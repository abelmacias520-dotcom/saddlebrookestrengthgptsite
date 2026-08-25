import SiteHeader from "./SiteHeader";

const bookingUrl =
  "https://saddlebrookestrength.setmore.com/services/ad071c58-8e9d-4d63-bfc9-d6c9208b86b7";

const programs = [
  {
    number: "01",
    title: "Personal Training",
    description:
      "One-on-one coaching for strength, balance, mobility, flexibility, and nutrition.",
    link: "https://saddlebrookestrength.com/personal-training",
    action: "Explore Personal Training",
  },
  {
    number: "02",
    title: "Golf Fitness",
    description:
      "Build golf-ready mobility, rotation, balance, strength, and endurance.",
    link: "https://saddlebrookestrength.com/golf-fitness",
    action: "Explore Golf Fitness",
  },
  {
    number: "03",
    title: "Group Classes",
    description:
      "Welcoming classes for cardio fitness, coordination, balance, and confidence.",
    link: "https://saddlebrookestrength.com/group-classes",
    action: "View Group Classes",
  },
  {
    number: "04",
    title: "InBody Testing",
    description:
      "Track muscle, body fat, body water, balance, and grip strength.",
    link: "https://saddlebrookestrength.com/inbody-testing",
    action: "Learn About InBody Testing",
  },
];

const reviews = [
  {
    quote:
      "He really listens to your goals and adjusts the exercises based on your capabilities.",
    name: "Debbi Reecer",
    source: "Nextdoor · SaddleBrooke",
  },
  {
    quote:
      "Abel is great in modifying your plan that will still meet your goals.",
    name: "Gary Sorensen",
    source: "Nextdoor · SaddleBrooke",
  },
  {
    quote:
      "Every session was beneficial to me learning how to safely workout with machines and free weights.",
    name: "Laura Meder",
    source: "Google",
  },
];

export default function Home() {
  return (
    <main>
      <a
        className="announcement-banner"
        href="https://saddlebrookestrength.com/group-classes"
        aria-label="New cardio kickboxing class. First class free. View class details."
      >
        <span className="announcement-banner__badge">New</span>
        <span className="announcement-banner__message">
          Cardio Kickboxing — Your First Class Is Free
        </span>
        <span className="announcement-banner__action">
          View Class Details <span aria-hidden="true">→</span>
        </span>
      </a>

      <SiteHeader currentPage="home" />

      <section className="hero" id="top">
        <div className="hero__content">
          <p className="eyebrow">Personal training &amp; fitness in SaddleBrooke</p>
          <h1>
            Stay strong. Move with confidence. <span>Keep doing what you love.</span>
          </h1>
          <p className="hero__copy">
            Personalized coaching, practical programs, and clear progress tracking
            to help you build strength, improve balance, and stay active.
          </p>
          <div className="button-row">
            <a className="button button--gold" href={bookingUrl}>
              Schedule a Free 15-Minute Call
            </a>
            <a className="text-link text-link--light" href="#programs">
              Explore Programs <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero__note">Start with a free, no-pressure conversation.</p>
        </div>

        <div className="hero__image-wrap">
          <img
            className="hero__image"
            src="/home-hero.png"
            alt="A personal trainer coaching a woman through a split-squat exercise"
          />
          <div className="hero__badge">
            <strong>2024</strong>
            <span>Neighborhood Favorite</span>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Why choose Saddlebrooke Strength">
        <p>Personalized Plans</p>
        <p>Certified Trainers</p>
        <p>Beginner Friendly</p>
        <p>Local to SaddleBrooke</p>
      </section>

      <section className="section programs" id="programs">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow eyebrow--gold">Ways to train</p>
            <h2>Choose the support that fits your goals.</h2>
          </div>
          <p>
            Start with one-on-one coaching, improve your golf game, train with a
            group, or get a clear picture of your current progress.
          </p>
        </div>

        <div className="program-grid">
          {programs.map((program) => (
            <a
              className="program-card"
              href={program.link}
              key={program.title}
              aria-label={`${program.action}: ${program.title}`}
            >
              <span className="program-card__number">{program.number}</span>
              <div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
              <span className="program-card__action">
                {program.action} <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="approach-section">
        <div className="section approach">
          <div className="approach__intro">
            <p className="eyebrow">How we coach</p>
            <h2>A smarter, more personal way to train.</h2>
            <p>
              We start with your goals and current ability, then build a practical
              plan that grows with you.
            </p>
          </div>
          <div className="approach__steps">
            <article>
              <span>01</span>
              <div>
                <h3>Start with a clear baseline</h3>
                <p>
                  See how you move and what matters most.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Train with purpose</h3>
                <p>
                  Adjust every exercise to your comfort, ability, and goals.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Build lasting confidence</h3>
                <p>
                  Track what feels easier and more confident.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section trainers" id="trainers">
        <div className="section-heading section-heading--centered">
          <p className="eyebrow eyebrow--gold">Meet your trainers</p>
          <h2>Experienced coaching. Personal attention.</h2>
          <p>
            Personal attention from two experienced trainers.
          </p>
        </div>

        <div className="trainer-list">
          <article className="trainer-card">
            <div className="trainer-card__image-wrap">
              <img
                className="trainer-card__image"
                src="/abel.jpg"
                alt="Abel Macias, owner and personal trainer at Saddlebrooke Strength"
              />
            </div>
            <div className="trainer-card__content">
              <p className="trainer-card__role">Owner &amp; Personal Trainer</p>
              <h3>Abel Macias</h3>
              <p className="trainer-card__bio">
                Abel builds practical programs for strength, balance, mobility,
                flexibility, and golf fitness—meeting each client where they are.
              </p>
              <ul className="credential-list" aria-label="Abel Macias certifications">
                <li>NASM Certified Personal Trainer</li>
                <li>Senior Fitness Specialist</li>
                <li>Golf Fitness Specialist</li>
                <li>Corrective Exercise Specialist</li>
                <li>Stretching &amp; Flexibility Coach</li>
              </ul>
            </div>
          </article>

          <article className="trainer-card trainer-card--reverse">
            <div className="trainer-card__image-wrap">
              <img
                className="trainer-card__image"
                src="/tim.jpg"
                alt="Tim Rochford, personal trainer at Saddlebrooke Strength"
              />
            </div>
            <div className="trainer-card__content">
              <p className="trainer-card__role">Personal Trainer</p>
              <h3>Tim Rochford</h3>
              <p className="trainer-card__bio">
                Tim holds an M.S. in Exercise Science–Kinesiology and brings
                deep experience in functional training, golf fitness, martial arts,
                and kickboxing.
              </p>
              <ul className="credential-list" aria-label="Tim Rochford certifications">
                <li>CAFS &amp; Functional Golf Training Specialist</li>
                <li>Human Movement &amp; Functional Aging Specialist</li>
                <li>ACE &amp; NASM Certified Personal Trainer</li>
                <li>Seventh-Degree Black Belt in Kajukenbo</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="section reviews">
          <div className="section-heading section-heading--reviews">
            <div>
              <p className="eyebrow">Community trust</p>
              <h2>Trusted by our local community.</h2>
            </div>
          </div>

          <div className="review-grid">
            {reviews.map((review) => (
              <figure className="review-card" key={review.name}>
                <div className="stars" aria-label="Five-star review">
                  ★ ★ ★ ★ ★
                </div>
                <blockquote>“{review.quote}”</blockquote>
                <figcaption>
                  <strong>{review.name}</strong>
                  <span>{review.source}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-section__shade" />
        <div className="contact-section__content">
          <p className="eyebrow">Ready to get started?</p>
          <h2>Let’s find the right starting point.</h2>
          <p>
            Tell us your goals, ask questions, and find the right starting point
            in a free 15-minute call.
          </p>
          <div className="button-row button-row--contact">
            <a className="button button--gold" href={bookingUrl}>
              Schedule a Free 15-Minute Call
            </a>
            <a className="button button--outline-light" href="tel:+12624504794">
              Call (262) 450-4794
            </a>
          </div>
          <span className="call-note">Call only — no text messages.</span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <img src="/logo-mark.webp" alt="Saddlebrooke Strength" width="180" height="92" />
          <p>
            Personal training, golf fitness, group classes, and InBody testing in
            SaddleBrooke, Arizona.
          </p>
          <span>Strength · Balance · Independence</span>
        </div>
        <div>
          <h2>Programs</h2>
          <ul>
            {programs.map((program) => (
              <li key={program.title}>
                <a href={program.link}>{program.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <address>
            <a href="tel:+12624504794">(262) 450-4794</a>
            <a href="mailto:abel@saddlebrookestrength.com">
              abel@saddlebrookestrength.com
            </a>
            <span>
              64485 E Saddlebrooke Blvd
              <br />
              Tucson, AZ 85739
            </span>
          </address>
        </div>
        <p className="site-footer__copyright">© 2026 Saddlebrooke Strength</p>
      </footer>

      <a className="mobile-cta" href={bookingUrl}>
        Schedule a Free 15-Minute Call
      </a>
    </main>
  );
}
