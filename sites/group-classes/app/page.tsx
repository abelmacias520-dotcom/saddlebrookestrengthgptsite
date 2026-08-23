const setmoreHome =
  "https://saddlebrookestrength.setmore.com/services/ad071c58-8e9d-4d63-bfc9-d6c9208b86b7";
const cardioBooking =
  "https://saddlebrookestrength.setmore.com/classes/55488542-07a5-449d-a19f-813fcfeca829";
const jiuJitsuBooking =
  "https://saddlebrookestrength.setmore.com/classes/dbcbe3fe-c4be-4eb0-8d06-eee7a7309184";

const Check = () => <span className="check" aria-hidden="true">✓</span>;

export default function Home() {
  return (
    <main id="top">
      <a className="announcement" href="/group-classes">
        <span className="new-pill">New</span>
        <span>Cardio Kickboxing for Adults 55+ · First Class Free</span>
        <span className="announcement-link">View classes →</span>
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="SaddleBrooke Strength home">
          SaddleBrooke Strength
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a className="nav-feature" href="/group-classes">Classes</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-gold header-button" href={setmoreHome}>
          Book a phone call
        </a>
      </header>

      <section className="programs-context" id="programs">
        <div className="content-width">
          <p className="eyebrow">Programs</p>
          <div className="section-heading">
            <h1>Training Tailored for You</h1>
            <p>
              The existing personal-training programs stay in place. The new
              classes section begins immediately beneath them.
            </p>
          </div>

          <div className="program-grid" aria-label="Current program examples">
            <article>
              <span>01</span>
              <h2>Strength &amp; Balance</h2>
              <p>Build everyday strength, steadiness, and confidence.</p>
            </article>
            <article>
              <span>02</span>
              <h2>Golf Fitness</h2>
              <p>Improve rotation, stability, mobility, and power.</p>
            </article>
            <article>
              <span>03</span>
              <h2>Mobility &amp; Flexibility</h2>
              <p>Move more freely and reduce day-to-day stiffness.</p>
            </article>
            <article>
              <span>04</span>
              <h2>Post-Rehab Training</h2>
              <p>Return to strength with a careful, structured plan.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="classes" id="classes">
        <img
          className="watermark"
          src="https://saddlebrookestrength.com/saddlebrooke-logo.webp"
          alt=""
          aria-hidden="true"
        />

        <div className="content-width">
          <div className="classes-heading">
            <p className="eyebrow eyebrow-light">Small-group classes</p>
            <h2>Build Fitness. Gain Confidence. <em>Have Fun.</em></h2>
            <p>
              Beginner-friendly classes for adults 55+ in a welcoming,
              coach-led setting. No experience required.
            </p>
          </div>

          <div className="class-grid">
            <article className="class-card featured-card">
              <div className="class-image">
                <img
                  src="/cardio-kickboxing-class.webp"
                  alt="Active older adults enjoying a non-contact cardio kickboxing pad workout"
                />
                <span className="image-badge">New Class</span>
              </div>

              <div className="class-content">
                <p className="class-type">Cardio fitness · Adults 55+</p>
                <h3>Cardio <em>Kickboxing</em></h3>
                <p className="time-line">Thursdays · 10:00 AM</p>
                <p className="description">
                  Build cardiovascular fitness, coordination, balance, and
                  confidence with simple punch-and-kick combinations using pads.
                </p>

                <ul>
                  <li><Check />Beginner-friendly</li>
                  <li><Check />No sparring — hit pads, not people</li>
                  <li><Check />Gloves available to borrow</li>
                  <li><Check />HOA One Aerobics Room</li>
                  <li><Check />First class free</li>
                </ul>

                <div className="instructor">
                  <span className="monogram" aria-hidden="true">TR</span>
                  <p>
                    <strong>Led by Tim Rochford, MS</strong>
                    <span>7th-degree black belt · former kickboxing competitor</span>
                  </p>
                </div>

                <a className="button button-gold card-button" href={cardioBooking}>
                  Reserve your free class
                </a>
              </div>
            </article>

            <article className="class-card">
              <div className="class-image">
                <img
                  src="/ageless-jiu-jitsu-class-v3.webp"
                  alt="Adults practicing a controlled jiu-jitsu guard technique during class"
                />
                <span className="image-badge secondary-badge">Weekly Class</span>
              </div>

              <div className="class-content">
                <p className="class-type">Self-defense · Adults 55+</p>
                <h3>Ageless <em>Jiu-Jitsu</em></h3>
                <p className="time-line">Thursdays · 5:00 PM</p>
                <p className="description">
                  Learn practical self-defense and ground grappling at a safe,
                  comfortable pace in a supportive small group.
                </p>

                <ul>
                  <li><Check />Beginner-friendly</li>
                  <li><Check />No experience required</li>
                  <li><Check />Technique-focused instruction</li>
                  <li><Check />HOA One Aerobics Room</li>
                  <li><Check />First class free</li>
                </ul>

                <div className="instructor instructor-placeholder" aria-hidden="true">
                  <span className="monogram">AJ</span>
                  <p>
                    <strong>Comfortable, progressive instruction</strong>
                    <span>Learn safely at a pace that works for you</span>
                  </p>
                </div>

                <a className="button button-outline card-button" href={jiuJitsuBooking}>
                  Reserve your free class
                </a>
              </div>
            </article>
          </div>

          <p className="pricing-note">
            Class pricing is explained personally after the free first class.
          </p>
        </div>
      </section>

      <section className="reviews-preview" id="reviews">
        <div className="content-width">
          <p className="eyebrow">Community trust</p>
          <h2>Trusted by the Local Community</h2>
          <p>
            Your current reviews section would continue here, directly after
            the new Small-Group Classes section.
          </p>
        </div>
      </section>

      <footer id="contact">
        <span>SaddleBrooke Strength</span>
        <span>Strength · Balance · Independence</span>
      </footer>
    </main>
  );
}
