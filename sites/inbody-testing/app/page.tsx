import SiteHeader from "./SiteHeader";

const metrics = [
  {
    label: "Skeletal muscle",
    copy: "See your skeletal muscle mass and track changes over time.",
    icon: "M12 6.5v11M8.5 9.5v5M15.5 9.5v5M5 11v2M19 11v2",
  },
  {
    label: "Body fat",
    copy: "Review body fat mass, percentage, and visceral fat level—not just total weight.",
    icon: "M12 3.5c2.7 3.2 5.2 6.6 5.2 10a5.2 5.2 0 1 1-10.4 0c0-3.4 2.5-6.8 5.2-10Z",
  },
  {
    label: "Segmental balance",
    copy: "Compare lean and fat analysis across your arms, legs, and trunk.",
    icon: "M12 5v14M8.2 7.5 5 12h6.4L8.2 7.5Zm7.6 0L12.6 12H19l-3.2-4.5Z",
  },
  {
    label: "Body water",
    copy: "Review total, intracellular, and extracellular water, plus ECW/TBW.",
    icon: "M12 3.5c2.8 3.4 5.5 6.9 5.5 10.2a5.5 5.5 0 0 1-11 0C6.5 10.4 9.2 6.9 12 3.5Z",
  },
];

function MetricIcon({ path }: { path: string }) {
  return (
    <span className="metric-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d={path} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader currentPage="inbody-testing" />

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow">InBody 380 body composition &amp; grip testing</p>
          <h1 id="page-title">See the progress the scale can’t show.</h1>
          <p className="hero-lede">
            Your weight is only one number. Our InBody 380 estimates muscle, body fat, body water, and
            segmental balance. Every test also includes an InGrip hand-strength measurement you can compare over time.
          </p>

          <div className="quick-facts" aria-label="Test highlights">
            <span>InBody 380</span>
            <span>Non-invasive</span>
            <span>Grip test included</span>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="https://saddlebrookestrength.setmore.com/services/52cc6466-d92f-46cb-8edd-ab03280ac678">
              Book your InBody test
              <span aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="tel:+12624504794">Call (262) 450-4794</a>
          </div>

          <div className="price-line">
            <strong>$25</strong>
            <span>includes InBody 380 + InGrip</span>
            <i aria-hidden="true" />
            <span>5-minute appointment</span>
          </div>
        </div>

        <div className="results-visual" aria-label="InBody 380 body composition analyzer">
          <div className="desert-ring" aria-hidden="true" />
          <figure className="inbody-device">
            <img src="/images/inbody-380.png" alt="InBody 380 professional body composition analyzer" />
            <figcaption>InBody 380 · Professional body composition analyzer</figcaption>
          </figure>
          <div className="floating-stat stat-muscle">
            <span className="stat-dot" />
            <div><strong>Muscle</strong><small>Track lean mass</small></div>
          </div>
          <div className="floating-stat stat-progress">
            <span className="stat-line" aria-hidden="true">↗</span>
            <div><strong>Progress</strong><small>Compare over time</small></div>
          </div>
        </div>
      </section>

      <section className="measurement-section" id="what-it-shows" aria-labelledby="measurements-title">
        <div className="section-heading">
          <p className="eyebrow">A clearer picture of you</p>
          <h2 id="measurements-title">What the InBody 380 can show</h2>
          <p>Turn one weigh-in into detailed information you can follow from one test to the next.</p>
        </div>
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <MetricIcon path={metric.icon} />
              <h3>{metric.label}</h3>
              <p>{metric.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grip-section" id="grip-strength" aria-labelledby="grip-title">
        <div className="grip-visual">
          <div className="grip-halo" aria-hidden="true" />
          <img src="/images/ingrip-dynamometer.png" alt="InBody InGrip handheld grip-strength dynamometer" />
          <div className="grip-badge grip-badge-left"><strong>Measured in pounds</strong><span>An objective result</span></div>
          <div className="grip-badge grip-badge-right"><strong>Track change</strong><span>Compare future tests</span></div>
        </div>

        <div className="grip-copy">
          <p className="eyebrow">InBody InGrip Dynamometer</p>
          <h2 id="grip-title">Strength you can measure—and build on.</h2>
          <p className="grip-lede">
            Grip strength adds a practical strength baseline to your
            body-composition results.
          </p>

          <aside className="grip-why" aria-label="Why track grip strength">
            <strong>Why track grip strength?</strong>
            <p>
              Grip strength is a useful marker of overall strength and function.
              Research associates stronger grip with healthier aging and lower
              mortality risk, but it cannot predict an individual lifespan.
            </p>
          </aside>

          <div className="grip-availability">
            <span aria-hidden="true">✓</span>
            <div><strong>Included with every $25 InBody test.</strong><small>No separate booking or additional charge.</small></div>
          </div>
          <p className="grip-safety">Tell Abel before testing if gripping causes pain or you have a current hand, wrist, elbow, or shoulder injury or restriction.</p>
        </div>
      </section>

      <aside className="safety-note standalone-safety-note" aria-label="Important safety information">
        <span className="safety-icon" aria-hidden="true">!</span>
        <div>
          <h3>Important safety information</h3>
          <p>
            Do not take the test if you have a pacemaker or another implanted or
            essential electronic medical device. Testing is not recommended
            during pregnancy. If you have questions about whether testing is
            appropriate for you, consult your healthcare professional before
            booking.
          </p>
        </div>
      </aside>

      <section className="faq-section" aria-labelledby="faq-title">
        <div className="faq-intro">
          <p className="eyebrow">Good to know</p>
          <h2 id="faq-title">Common questions</h2>
          <p>Still unsure whether the test is right for you? Call SaddleBrooke Strength at <a href="tel:+12624504794">(262) 450-4794</a>.</p>
        </div>
        <div className="faq-list">
          <details>
            <summary>What happens during the 5-minute appointment?<span>+</span></summary>
            <p>Remove your shoes and socks, complete the InBody and InGrip measurements, then review the key results with Abel.</p>
          </details>
          <details>
            <summary>How should I prepare?<span>+</span></summary>
            <ul className="faq-prep-list">
              <li>Do not eat for at least three hours beforehand.</li>
              <li>Test before exercise and after your body has fully recovered.</li>
              <li>Hydrate normally; do not overhydrate right before testing.</li>
              <li>Use the restroom immediately before the test.</li>
              <li>Be ready to remove shoes, socks, and pantyhose.</li>
              <li>Retest at a similar time and under similar conditions.</li>
            </ul>
          </details>
          <details>
            <summary>How is this different from a regular scale?<span>+</span></summary>
            <p>A scale shows only total weight. The InBody 380 estimates muscle, body fat, body water, and how lean and fat mass are distributed across the body.</p>
          </details>
          <details>
            <summary>Does the test hurt?<span>+</span></summary>
            <p>No. The test is non-invasive. You stand on the foot electrodes and hold the hand electrodes for a brief measurement.</p>
          </details>
          <details>
            <summary>How often should I retest?<span>+</span></summary>
            <p>Every two to four weeks can be useful when actively tracking progress. Testing under the same conditions matters more than testing frequently.</p>
          </details>
          <details>
            <summary>Is this a medical diagnosis?<span>+</span></summary>
            <p>No. Results are estimates intended for education and progress tracking. They do not diagnose or treat a medical condition.</p>
          </details>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div>
          <p className="eyebrow eyebrow-gold">InBody 380 &amp; InGrip testing · SaddleBrooke</p>
          <h2 id="cta-title">Ready for a clearer picture of your body and strength?</h2>
          <p>$25 includes InBody 380 body composition + InGrip strength testing · 5-minute appointment</p>
        </div>
        <div className="cta-actions">
          <a className="button button-gold" href="https://saddlebrookestrength.setmore.com/services/52cc6466-d92f-46cb-8edd-ab03280ac678">Book your InBody test <span aria-hidden="true">→</span></a>
          <a className="cta-call" href="tel:+12624504794">Call SaddleBrooke Strength</a>
        </div>
      </section>

      <footer>
        <img src="/images/saddlebrooke-logo.webp" alt="SaddleBrooke Strength" />
        <p>Body composition and grip-strength results are for educational and progress-tracking purposes and are not a diagnosis or medical advice. Body composition results can vary with hydration and testing conditions.</p>
      </footer>
    </main>
  );
}
