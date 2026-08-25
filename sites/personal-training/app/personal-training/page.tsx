import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";

const benefits = [
  {
    number: "01",
    title: "Build useful strength",
    copy: "Train the movements that make daily life, hobbies, and travel feel easier.",
  },
  {
    number: "02",
    title: "Move with confidence",
    copy: "Improve balance, coordination, and control through progressive practice.",
  },
  {
    number: "03",
    title: "Protect your mobility",
    copy: "Build joint-friendly mobility and stability around the way your body moves.",
  },
  {
    number: "04",
    title: "Stay accountable",
    copy: "Work with a coach who adjusts the plan and keeps your progress moving.",
  },
];

const fitList = [
  "You want to feel stronger and more capable in everyday life",
  "You want a clear, sensible plan for starting—or restarting—exercise",
  "You want coaching that respects your history, limitations, and goals.",
];

const trainingAreas = [
  "InBody & grip testing",
  "Movement assessments",
  "Mobility assessment",
  "Personalized flexibility program",
  "Strength & balance program",
  "Nutrition coaching",
];

export const metadata: Metadata = {
  title: "One-on-One Personal Training | Saddlebrooke Strength",
  description:
    "One-on-one personal training in SaddleBrooke with testing, assessments, flexibility, strength, balance, and nutrition coaching.",
  openGraph: {
    title: "Stronger for What Matters.",
    description: "One-on-One Personal Training | Saddlebrooke Strength",
    url: "https://saddlebrookestrength.com/personal-training",
    images: [
      {
        url: "https://saddlebrooke-personal-training.abelmacias520.chatgpt.site/og.png",
        width: 1200,
        height: 630,
        alt: "Stronger for What Matters — One-on-One Personal Training at Saddlebrooke Strength",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stronger for What Matters.",
    description: "One-on-One Personal Training | Saddlebrooke Strength",
    images: [
      "https://saddlebrooke-personal-training.abelmacias520.chatgpt.site/og.png",
    ],
  },
};

export default function PersonalTrainingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "One-on-One Personal Training",
    description:
      "Individualized personal training with InBody and grip testing, movement and mobility assessments, personalized flexibility, strength and balance, and nutrition coaching.",
    serviceType: "Personal training",
    url: "https://saddlebrookestrength.com/personal-training",
    audience: {
      "@type": "Audience",
      audienceType: "Adults seeking individualized fitness coaching",
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

      <SiteHeader currentPage="personal-training" />

      <div className="breadcrumb" aria-label="Breadcrumb">
        <a href="https://saddlebrookestrength.com/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="https://saddlebrookestrength.com/#programs">Programs</a>
        <span aria-hidden="true">/</span>
        <strong>Personal Training</strong>
      </div>

      <section className="service-section">
        <div className="service-hero">
          <img
            src="/personal-training-hero-v2.png"
            alt="A personal trainer coaches a woman through a controlled strength exercise"
          />
          <div className="service-panel">
            <p className="eyebrow">One-on-One Personal Training</p>
            <h1>
              Stronger for<br />
              what <em>matters.</em>
            </h1>
            <p className="lede">
              Personalized coaching built around your goals, your starting
              point, and the strength you want to carry into everyday life.
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

        <div className="benefit-grid" aria-label="Personal training benefits">
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
            <h2>Your plan starts with you.</h2>
            <p>
              We start with your goals and current movement, then build a
              practical plan at your pace.
            </p>
          </div>

          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <p>Discover</p>
                <h3>Talk through your goals</h3>
                <small>
                  Your goals, health history, schedule, and experience.
                </small>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <p>Assess</p>
                <h3>Establish your baseline</h3>
                <small>
                  InBody, grip, movement, and mobility testing.
                </small>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <p>Train + track</p>
                <h3>Build steady progress</h3>
                <small>
                  Flexibility, strength, balance, nutrition coaching, and
                  check-ins.
                </small>
              </div>
            </li>
          </ol>
        </section>

        <section className="training-section" aria-labelledby="training-heading">
          <div>
            <p className="eyebrow eyebrow-green">Built around your needs</p>
            <h2 id="training-heading">What your program includes.</h2>
          </div>
          <ol className="training-grid">
            {trainingAreas.map((area, index) => (
              <li key={area}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {area}
              </li>
            ))}
          </ol>
        </section>

        <section className="coaches-section" aria-labelledby="coaches-heading">
          <div className="coaches-intro">
            <p className="eyebrow eyebrow-green">Your coaching team</p>
            <h2 id="coaches-heading">Experienced. Personal. Encouraging.</h2>
          </div>

          <div className="coach-stack">
            <article className="coach-card coach-card-abel">
              <img
                className="coach-photo"
                src="/abel.jpg"
                alt="Abel Macias, owner and personal trainer"
              />
              <div className="coach-number">01</div>
              <div className="coach-content">
                <h3>Abel Macias</h3>
                <p>NASM Certified Personal Trainer</p>
                <small>
                  Senior Fitness • Corrective Exercise • Stretch &amp; Flexibility
                </small>
              </div>
            </article>

            <article className="coach-card">
              <img
                className="coach-photo"
                src="/tim.jpg"
                alt="Tim Rochford, personal trainer"
              />
              <div className="coach-number">02</div>
              <div className="coach-content">
                <h3>Tim Rochford, MS</h3>
                <p>NASM &amp; ACE Certified Personal Trainer</p>
                <small>FAI Functional Aging Specialist • CAFS</small>
              </div>
            </article>
          </div>
        </section>

        <section className="fit-row">
          <div>
            <p className="eyebrow eyebrow-green">Who it is for</p>
            <h2>You do not have to be “in shape” to start.</h2>
          </div>
          <ol>
            {fitList.map((item, index) => (
              <li key={item}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </section>

        <section className="service-cta" id="contact">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>Let’s build strength you can use.</h2>
            <p>
              Tell us what you want to feel more confident doing, and we’ll help
              you begin.
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
          Personal training is not medical treatment. Fitness assessments
          identify exercise needs and do not diagnose medical conditions.
          Medical clearance may be recommended when appropriate. Individual
          results vary.
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
