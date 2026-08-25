import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";

const benefits = [
  {
    number: "01",
    title: "Move more freely",
    copy: "Build usable mobility through the hips, upper back, and shoulders.",
  },
  {
    number: "02",
    title: "Rotate with control",
    copy: "Develop golf-relevant strength through the legs, hips, and trunk.",
  },
  {
    number: "03",
    title: "Stay balanced",
    copy: "Train stability, weight transfer, and confidence on changing terrain.",
  },
  {
    number: "04",
    title: "Finish with energy",
    copy: "Improve the endurance your body needs for practice and a full round.",
  },
];

const fitList = [
  "Golfers who feel stiff or restricted during the swing",
  "Players who want better balance and lower-body stability",
  "Adults returning to golf after time away",
  "Golfers who lose energy or control late in the round",
];

export const metadata: Metadata = {
  title: "Golf Fitness Program | Saddlebrooke Strength",
  description:
    "Personalized golf-fitness training in SaddleBrooke, built around mobility, balance, strength, rotational control, and endurance.",
  openGraph: {
    title: "Move Better. Swing Stronger. Keep Playing.",
    description: "Golf Fitness at Saddlebrooke Strength",
    url: "https://saddlebrookestrength.com/golf-fitness",
    images: [
      {
        url: "https://saddlebrooke-golf-fitness.abelmacias520.chatgpt.site/golf-fitness-hero-male.png",
        width: 1536,
        height: 1024,
        alt: "A fit man in his 50s training rotational strength with a personal trainer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Move Better. Swing Stronger. Keep Playing.",
    description: "Golf Fitness at Saddlebrooke Strength",
    images: [
      "https://saddlebrooke-golf-fitness.abelmacias520.chatgpt.site/golf-fitness-hero-male.png",
    ],
  },
};

export default function GolfFitnessPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Golf Fitness Program",
    description:
      "Personalized golf-fitness training built around mobility, balance, strength, rotational control, and endurance.",
    serviceType: "Golf fitness training",
    url: "https://saddlebrookestrength.com/golf-fitness",
    audience: {
      "@type": "Audience",
      audienceType: "Golfers seeking individualized fitness training",
    },
    areaServed: [
      { "@type": "Place", name: "SaddleBrooke, Arizona" },
      { "@type": "City", name: "Tucson, Arizona" },
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "Saddlebrooke Strength",
      url: "https://saddlebrookestrength.com/",
      telephone: "+1-262-450-4794",
      email: "abel@saddlebrookestrength.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "64485 E Saddlebrooke Blvd",
        addressLocality: "Tucson",
        addressRegion: "AZ",
        postalCode: "85739",
        addressCountry: "US",
      },
    },
  };

  return (
    <main className="subpage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <SiteHeader currentPage="golf-fitness" />

      <div className="breadcrumb" aria-label="Breadcrumb">
        <a href="https://saddlebrookestrength.com/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="https://saddlebrookestrength.com/#programs">Programs</a>
        <span aria-hidden="true">/</span>
        <strong>Golf Fitness</strong>
      </div>

      <section className="golf-section">
        <div className="golf-hero">
          <img
            src="/golf-fitness-hero-male.png"
            alt="A fit man in his 50s training rotational strength with a personal trainer"
          />
          <div className="golf-panel">
            <p className="eyebrow">Golf Fitness</p>
            <h1>
              Move better.<br />
              Swing stronger.<br />
              <em>Keep playing.</em>
            </h1>
            <p className="lede">
              Personalized golf-fitness training built around mobility, balance,
              strength, rotational control, and endurance.
            </p>
            <div className="actions">
              <a
                className="button button-primary"
                href="https://saddlebrookestrength.setmore.com/services/ad071c58-8e9d-4d63-bfc9-d6c9208b86b7"
              >
                Schedule a Free 15-Minute Call
              </a>
              <a className="call-link" href="tel:+12624504794">
                Call Saddlebrooke Strength <span aria-hidden="true">→</span>
              </a>
            </div>
            <small>Start with a free, no-pressure conversation.</small>
          </div>
        </div>

        <div className="benefit-grid" aria-label="Golf fitness benefits">
          {benefits.map((benefit) => (
            <article key={benefit.number}>
              <span>{benefit.number}</span>
              <h2>{benefit.title}</h2>
              <p>{benefit.copy}</p>
            </article>
          ))}
        </div>

        <section className="body-behind-game">
          <div className="body-copy">
            <p className="eyebrow eyebrow-green">Training with purpose</p>
            <h2>Train the body behind your game.</h2>
            <p>
              Golf asks your body to create force, control rotation, maintain
              balance, and repeat it over an entire round. Your plan begins with
              how you move today—then progresses at a pace that fits you.
            </p>
          </div>

          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <p>Discover</p>
                <h3>Start with your game</h3>
                <small>
                  Discuss your goals, playing schedule, health history, and
                  what you notice on the course.
                </small>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <p>Assess</p>
                <h3>Establish your baseline</h3>
                <small>
                  Review golf-relevant mobility, balance, strength, and
                  rotational control.
                </small>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <p>Train + track</p>
                <h3>Build your plan</h3>
                <small>
                  Follow individualized, progressive training with regular
                  check-ins and reassessments.
                </small>
              </div>
            </li>
          </ol>
        </section>

        <section className="coaches-section" aria-labelledby="coaches-heading">
          <div className="coaches-intro">
            <p className="eyebrow eyebrow-green">Your golf fitness team</p>
            <h2 id="coaches-heading">Golf-fitness expertise.</h2>
          </div>

          <div className="coach-stack">
            <article className="coach-card coach-card-abel">
              <div className="coach-number">01</div>
              <div className="coach-content">
                <h3>Abel Macias</h3>
                <p>NASM Golf Fitness Specialist</p>
              </div>
            </article>

            <article className="coach-card">
              <div className="coach-number">02</div>
              <div className="coach-content">
                <h3>Tim Rochford, MS</h3>
                <p>Gray Institute Functional Golf Training Specialist</p>
              </div>
            </article>
          </div>
        </section>

        <section className="fit-row">
          <div>
            <p className="eyebrow eyebrow-green">Who it is for</p>
            <h2>You do not need to be an elite golfer to train like your game matters.</h2>
          </div>
          <ul>
            {fitList.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="golf-cta" id="contact">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>Let’s build a body that supports your game.</h2>
            <p>
              Tell us what you want to improve, and we’ll help you choose the
              right starting point.
            </p>
          </div>
          <div>
            <a
              className="button button-light"
              href="https://saddlebrookestrength.setmore.com/services/ad071c58-8e9d-4d63-bfc9-d6c9208b86b7"
            >
              Schedule a Free 15-Minute Call
            </a>
            <a className="footer-call" href="tel:+12624504794">
              Call Saddlebrooke Strength
            </a>
            <a href="tel:+12624504794">(262) 450-4794</a>
            <small>Call only — no text messages</small>
          </div>
        </section>

        <p className="disclaimer">
          Golf fitness is physical training, not swing instruction or medical
          treatment. Fitness assessments identify exercise needs and do not
          diagnose medical conditions. Individual results vary.
        </p>
      </section>

      <footer>
        <span>Saddlebrooke Strength</span>
        <span>64485 E Saddlebrooke Blvd • Tucson, AZ 85739</span>
        <a href="mailto:abel@saddlebrookestrength.com">
          abel@saddlebrookestrength.com
        </a>
      </footer>
    </main>
  );
}
