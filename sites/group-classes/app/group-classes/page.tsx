import type { Metadata } from "next";

const setmoreHome =
  "https://saddlebrookestrength.setmore.com/services/ad071c58-8e9d-4d63-bfc9-d6c9208b86b7";
const cardioBooking =
  "https://saddlebrookestrength.setmore.com/classes/55488542-07a5-449d-a19f-813fcfeca829";
const jiuJitsuBooking =
  "https://saddlebrookestrength.setmore.com/classes/dbcbe3fe-c4be-4eb0-8d06-eee7a7309184";

export const metadata: Metadata = {
  title: "Group Classes | SaddleBrooke Strength",
  description:
    "Beginner-friendly Cardio Kickboxing and Ageless Jiu-Jitsu at SaddleBrooke Strength. Your first class is free.",
  openGraph: {
    title: "Group Classes at SaddleBrooke Strength",
    description:
      "Cardio Kickboxing and Ageless Jiu-Jitsu at SaddleBrooke Strength. Your first class is free.",
    images: [
      {
        url: "https://cardio-kickboxing-mockup.abelmacias520.chatgpt.site/cardio-kickboxing-class.webp",
        width: 1536,
        height: 1024,
        alt: "Adults enjoying a Cardio Kickboxing class",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Group Classes at SaddleBrooke Strength",
    description:
      "Cardio Kickboxing and Ageless Jiu-Jitsu at SaddleBrooke Strength. Your first class is free.",
    images: [
      "https://cardio-kickboxing-mockup.abelmacias520.chatgpt.site/cardio-kickboxing-class.webp",
    ],
  },
};

const Benefit = ({ children }: { children: React.ReactNode }) => (
  <li>
    <span className="benefit-mark" aria-hidden="true">+</span>
    <span>{children}</span>
  </li>
);

export default function GroupClasses() {
  return (
    <main className="classes-page" id="top">
      <a className="announcement" href={cardioBooking}>
        <span className="new-pill">New</span>
        <span>Cardio Kickboxing · First Class Free</span>
        <span className="announcement-link">Reserve your spot →</span>
      </a>

      <header className="site-header group-page-header">
        <a className="wordmark" href="/" aria-label="SaddleBrooke Strength home">
          SaddleBrooke Strength
        </a>
        <nav aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/#programs">Programs</a>
          <a className="nav-feature" href="/group-classes" aria-current="page">Classes</a>
          <a href="/#reviews">Reviews</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="button button-gold header-button" href={setmoreHome}>
          Book a phone call
        </a>
      </header>

      <section className="group-hero">
        <img
          className="group-watermark"
          src="https://saddlebrookestrength.com/saddlebrooke-logo.webp"
          alt=""
          aria-hidden="true"
        />
        <div className="content-width group-hero-grid">
          <div className="group-hero-copy">
            <p className="eyebrow eyebrow-light">Small-group fitness</p>
            <h1>Group Classes at <em>SaddleBrooke Strength</em></h1>
            <p className="hero-lead">
              Build fitness, coordination, confidence, and new skills in a
              welcoming, coach-led setting. Both classes are beginner-friendly,
              and your first class is free.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#cardio-kickboxing">
                Explore the classes
              </a>
              <a className="text-link" href="#class-lineup">
                View Thursday lineup <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="group-hero-visual" aria-label="Cardio Kickboxing class preview">
            <img
              src="/cardio-kickboxing-class.webp"
              alt="Class participants enjoying a welcoming, non-contact Cardio Kickboxing class"
            />
            <div className="lineup-card" id="class-lineup">
              <p>Thursday classes</p>
              <div>
                <span>10:00 AM</span>
                <strong>Cardio Kickboxing</strong>
              </div>
              <div>
                <span>5:00 PM</span>
                <strong>Ageless Jiu-Jitsu</strong>
              </div>
              <small>HOA One Aerobics Room</small>
            </div>
          </div>
        </div>
      </section>

      <nav className="class-jump" aria-label="Jump to a class">
        <div className="content-width class-jump-inner">
          <span>Choose a class</span>
          <a href="#cardio-kickboxing">Cardio Kickboxing</a>
          <a href="#ageless-jiu-jitsu">Ageless Jiu-Jitsu</a>
        </div>
      </nav>

      <section className="class-detail cardio-detail" id="cardio-kickboxing">
        <div className="content-width class-detail-grid">
          <div className="detail-image-wrap">
            <img
              src="/cardio-kickboxing-class.webp"
              alt="Adults practicing punch combinations with pads during Cardio Kickboxing"
            />
            <span className="detail-image-label">Punch · Move · Get Stronger</span>
          </div>

          <div className="detail-copy">
            <p className="eyebrow">New class · Cardio fitness</p>
            <h2>Cardio <em>Kickboxing</em></h2>
            <p className="detail-subhead">An energizing workout without the intimidation.</p>
            <p>
              Learn simple punch and kick combinations while working with pads
              at a comfortable, approachable pace. Improve cardiovascular
              fitness, muscular endurance, coordination, agility, balance, and
              confidence.
            </p>

            <div className="class-facts">
              <div><span>When</span><strong>Thursdays · 10:00 AM</strong></div>
              <div><span>Where</span><strong>HOA One Aerobics Room</strong></div>
              <div><span>First visit</span><strong>Your first class is free</strong></div>
            </div>

            <ul className="benefit-list">
              <Benefit>No experience required</Benefit>
              <Benefit>No sparring — you&apos;ll hit pads, not people</Benefit>
              <Benefit>Gloves available to borrow</Benefit>
              <Benefit>Exercises can be adjusted to your comfort level</Benefit>
            </ul>

            <div className="coach-note">
              <span className="monogram" aria-hidden="true">TR</span>
              <p>
                <strong>Led by Tim Rochford, MS</strong>
                <span>Seventh-degree black belt and former kickboxing competitor</span>
              </p>
            </div>

            <a className="button button-gold detail-button" href={cardioBooking}>
              Reserve your free class
            </a>
          </div>
        </div>
      </section>

      <section className="class-detail jiu-jitsu-detail" id="ageless-jiu-jitsu">
        <div className="content-width class-detail-grid reverse-grid">
          <div className="detail-image-wrap">
            <img
              src="/ageless-jiu-jitsu-class-v3.webp"
              alt="Adults practicing a controlled jiu-jitsu guard technique during class"
            />
            <span className="detail-image-label">Learn · Move · Build Confidence</span>
          </div>

          <div className="detail-copy">
            <p className="eyebrow eyebrow-light">Skill-based movement · Self-defense</p>
            <h2>Ageless <em>Jiu-Jitsu</em></h2>
            <p className="detail-subhead">Keep your body and mind active while learning new skills.</p>
            <p>
              This beginner-friendly introduction to jiu-jitsu makes learning
              approachable from the start. Develop coordination, balance,
              mobility, body awareness, and confidence while learning practical
              martial arts skills in a supportive environment.
            </p>

            <div className="class-facts">
              <div><span>When</span><strong>Thursdays · 5:00 PM</strong></div>
              <div><span>Where</span><strong>HOA One Aerobics Room</strong></div>
              <div><span>First visit</span><strong>Your first class is free</strong></div>
            </div>

            <ul className="benefit-list">
              <Benefit>No martial arts experience required</Benefit>
              <Benefit>Technique-focused, progressive instruction</Benefit>
              <Benefit>Practical skills taught at a comfortable pace</Benefit>
              <Benefit>A welcoming, supportive small group</Benefit>
            </ul>

            <a className="button button-gold detail-button" href={jiuJitsuBooking}>
              Try Ageless Jiu-Jitsu free
            </a>
          </div>
        </div>
      </section>

      <section className="class-compare" aria-labelledby="compare-title">
        <div className="content-width">
          <div className="compare-heading">
            <p className="eyebrow">Find your fit</p>
            <h2 id="compare-title">Which Class Is Right for You?</h2>
            <p>
              Both classes welcome beginners. Choose the experience that sounds
              most like you—or try both before deciding.
            </p>
          </div>

          <div className="compare-grid">
            <article>
              <span className="compare-number">01</span>
              <p className="compare-kicker">Choose this for an upbeat workout</p>
              <h3>Cardio Kickboxing</h3>
              <ul>
                <li>Cardiovascular conditioning</li>
                <li>Punching and kicking combinations</li>
                <li>Pad work without sparring</li>
                <li>Endurance, coordination, and agility</li>
              </ul>
              <a href={cardioBooking}>Reserve Cardio Kickboxing <span aria-hidden="true">→</span></a>
            </article>

            <article>
              <span className="compare-number">02</span>
              <p className="compare-kicker">Choose this for a new skill</p>
              <h3>Ageless Jiu-Jitsu</h3>
              <ul>
                <li>A physical and mental challenge</li>
                <li>Practical martial arts skills</li>
                <li>Balance, mobility, and body awareness</li>
                <li>Progressive, supportive instruction</li>
              </ul>
              <a href={jiuJitsuBooking}>Try Ageless Jiu-Jitsu <span aria-hidden="true">→</span></a>
            </article>
          </div>
        </div>
      </section>

      <section className="classes-faq" aria-labelledby="faq-title">
        <div className="content-width faq-grid">
          <div className="faq-intro">
            <p className="eyebrow">Good to know</p>
            <h2 id="faq-title">Your First Class, Made Simple</h2>
            <p>
              Come as you are. The goal is to help you feel comfortable,
              capable, and welcome from the moment you arrive.
            </p>
          </div>

          <div className="faq-list">
            <details open>
              <summary>Do I need martial arts experience?</summary>
              <p>No. Both classes are designed to welcome complete beginners.</p>
            </details>
            <details>
              <summary>Is there sparring in Cardio Kickboxing?</summary>
              <p>No. You&apos;ll work with pads and mitts—not strike another person.</p>
            </details>
            <details>
              <summary>Do I need my own equipment?</summary>
              <p>
                Bring water and wear comfortable workout clothing. Cardio
                Kickboxing gloves are available to borrow.
              </p>
            </details>
            <details>
              <summary>What if I need an exercise adjusted?</summary>
              <p>
                Let your instructor know before class. Movements can be adjusted
                so you can work at a comfortable, appropriate level.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="classes-final-cta" aria-labelledby="final-cta-title">
        <div className="content-width final-cta-inner">
          <p className="eyebrow eyebrow-light">Your first class is free</p>
          <h2 id="final-cta-title">Try Something New This Thursday</h2>
          <p>
            Meet a supportive group, move with confidence, and discover which
            class feels right for you.
          </p>
          <div>
            <a className="button button-gold" href={cardioBooking}>Reserve Cardio Kickboxing</a>
            <a className="button button-outline" href={jiuJitsuBooking}>Try Ageless Jiu-Jitsu</a>
          </div>
        </div>
      </section>

      <section className="contact-band" aria-label="Contact SaddleBrooke Strength">
        <div className="content-width contact-band-grid">
          <div>
            <span>Call</span>
            <a href="tel:+12624504794">(262) 450-4794</a>
            <small>Call only — no text messages</small>
          </div>
          <div>
            <span>Email</span>
            <a href="mailto:abel@saddlebrookestrength.com">abel@saddlebrookestrength.com</a>
            <small>Questions are always welcome</small>
          </div>
          <div>
            <span>Location</span>
            <p>64485 E Saddlebrooke Blvd<br />Tucson, AZ 85739</p>
          </div>
          <div>
            <span>Not ready for a class?</span>
            <a href={setmoreHome}>Book a phone call →</a>
            <small>Talk through your goals first</small>
          </div>
        </div>
      </section>

      <footer id="contact">
        <span>SaddleBrooke Strength</span>
        <span>Strength · Balance · Independence</span>
      </footer>
    </main>
  );
}
