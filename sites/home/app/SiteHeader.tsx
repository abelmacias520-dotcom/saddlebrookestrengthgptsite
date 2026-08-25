"use client";

import { useEffect, useRef, useState } from "react";

export type SitePage =
  | "home"
  | "personal-training"
  | "golf-fitness"
  | "group-classes"
  | "inbody-testing";

const bookingUrl =
  "https://saddlebrookestrength.setmore.com/services/ad071c58-8e9d-4d63-bfc9-d6c9208b86b7";

const programs: Array<{ number: string; title: string; page: SitePage; href: string }> = [
  { number: "01", title: "Personal Training", page: "personal-training", href: "https://saddlebrookestrength.com/personal-training" },
  { number: "02", title: "Golf Fitness", page: "golf-fitness", href: "https://saddlebrookestrength.com/golf-fitness" },
  { number: "03", title: "Group Classes", page: "group-classes", href: "https://saddlebrookestrength.com/group-classes" },
  { number: "04", title: "InBody Testing", page: "inbody-testing", href: "https://saddlebrookestrength.com/inbody-testing" },
];

export default function SiteHeader({ currentPage }: { currentPage: SitePage }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOutside = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeWithEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sbs-site-header">
      <a
        className="sbs-brand"
        href="https://saddlebrookestrength.com/"
        aria-label="Saddlebrooke Strength home"
      >
        <img src="/sbs-icon.webp" alt="" width="68" height="68" />
        <span className="sbs-brand__tagline">Strength · Balance · Independence</span>
      </a>

      <div className="sbs-nav-menu" ref={containerRef}>
        <button
          ref={buttonRef}
          className="sbs-menu-trigger"
          type="button"
          aria-expanded={open}
          aria-controls="sbs-site-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span>Menu</span>
          <span className="sbs-menu-icon" aria-hidden="true"><i /><i /><i /></span>
        </button>

        {open ? (
          <div className="sbs-menu-panel" id="sbs-site-navigation">
            <a
              className="sbs-menu-home"
              href="https://saddlebrookestrength.com/"
              aria-current={currentPage === "home" ? "page" : undefined}
              onClick={closeMenu}
            >
              Home <span aria-hidden="true">→</span>
            </a>

            <p className="sbs-menu-label">Programs</p>
            <nav className="sbs-menu-programs" aria-label="Program pages">
              {programs.map((program) => (
                <a
                  href={program.href}
                  key={program.page}
                  aria-current={currentPage === program.page ? "page" : undefined}
                  onClick={closeMenu}
                >
                  <span>{program.number}</span>
                  <strong>{program.title}</strong>
                  <b aria-hidden="true">→</b>
                </a>
              ))}
            </nav>

            <div className="sbs-menu-actions">
              <a href="https://saddlebrookestrength.com/#reviews" onClick={closeMenu}>Reviews</a>
              <a href="https://saddlebrookestrength.com/#contact" onClick={closeMenu}>Contact</a>
            </div>

            <a className="sbs-menu-booking" href={bookingUrl} onClick={closeMenu}>
              Schedule a Free 15-Minute Call
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
