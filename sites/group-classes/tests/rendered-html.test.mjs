import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const fetchPage = (pathname) =>
  worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

test("redirects the retired mockup homepage to the complete classes page", async () => {
  const response = await fetchPage("/");

  assert.equal(response.status, 307);
  assert.equal(
    response.headers.get("location"),
    "http://localhost/group-classes",
  );
});

test("renders the complete group classes page", async () => {
  const response = await fetchPage("/group-classes");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(html, /Group Classes at/);
  assert.match(html, /Cardio Kickboxing/);
  assert.match(html, /Ageless Jiu-Jitsu/);
  assert.doesNotMatch(html, /Homepage Mockup/);
});
