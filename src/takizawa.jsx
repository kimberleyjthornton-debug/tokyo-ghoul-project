import React from "react";
import "./takizawa.css";

const TakizawaPage = () => {
  return (
    <div className="takizawa-container">
      <header className="takizawa-hero">
        <div className="hero-text-wrapper">
          <h1>TAKIZAWA SEIDOU</h1>
          <p className="alias">"T-OWL / The Shattered Idealist"</p>
        </div>
      </header>

      <main className="takizawa-content">
        <section className="tragedy-quote">
          <p>
            "In this world, the weak get eaten. Who is strong? Me. That's right,
            I am! I'm the one who killed them all! I'm... a Ghoul!"
          </p>
        </section>

        <section>
          <div className="takizawa-grid-container">
            {/* Phase 1: The Rigid Ego / Perfectionism */}
            <div className="takizawa-grid-row ego-row">
              <div className="text-box">
                <h2 className="takizawa-grid-heading">The Rigid Ego</h2>
                <p className="takizawa-grid-analysis">
                  As a CCG Investigator, Seidou’s psyche is defined by an
                  absolute obsession with order, rank, and external validation.
                  His perfectionism is a fragile defense mechanism against an
                  overwhelming fear of failure and inferiority. Because his ego
                  is rigidly tied to being 'good' and praised, it lacks the
                  flexibility required to survive a psychological crisis.
                </p>
              </div>
              <div className="image-box">
                <img
                  src="/images/takizawa-human.webp"
                  alt="Investigator Takizawa"
                />
              </div>
            </div>

            {/* Phase 2: Total Ego Death / Fracture */}
            <div className="takizawa-grid-row fracture-row shadow-row">
              <div className="text-box">
                <h2 className="takizawa-grid-heading">Ego Death & Fracture</h2>
                <p className="takizawa-grid-analysis">
                  Subjected to Dr. Kanou's agonizing experimentation, Seidou
                  experiences a catastrophic ego death. When his rigid moral
                  framework is forcibly shattered, the mind breaks completely.
                  Unable to reconcile his identity as a justice-seeking human
                  with his new reality as a human-eating monster, the conscious
                  mind fractures, leaving behind a chaotic vacuum.
                </p>
              </div>
              <div className="image-box">
                <img
                  src="/images/takizawa-torture.webp"
                  alt="Shattered Takizawa"
                />
              </div>
            </div>

            {/* Phase 3: The Shadow Unleashed (T-Owl) */}
            <div className="takizawa-grid-row owl-row shadow-row">
              <div className="text-box">
                <h2 className="takizawa-grid-heading">The Shadow Unleashed</h2>
                <p className="takizawa-grid-analysis">
                  Reborn as 'T-Owl', the repressed shadow completely overwhelms
                  the psyche. His deep-seated feelings of inadequacy, jealousy,
                  and fear are inverted into a maniacal, violent defense
                  mechanism. By adopting the persona of a ruthless monster, his
                  mind attempts to escape the unbearable pain of his
                  vulnerability. He laughs at the horror because weeping would
                  destroy what little is left.
                </p>
              </div>
              <div className="image-box">
                <img src="/images/takizawa-t-owl.webp" alt="T-Owl Ghoul" />
              </div>
            </div>

            {/* Phase 4: Pathological Acceptance */}
            <div className="takizawa-grid-row acceptance-row self-row">
              <div className="text-box">
                <h2 className="takizawa-grid-heading">
                  Pathological Acceptance
                </h2>
                <p className="takizawa-grid-analysis">
                  Unlike Kaneki's balanced integration of the self, Takizawa
                  settles into a tragic, fragmented acceptance. He recognizes
                  his monstrosity but perceives himself as forever irredeemable.
                  His survival relies on navigating the world as a broken
                  entity—neither fully human nor completely mindless
                  monster—acting as a grim monument to the cost of forced
                  evolution.
                </p>
              </div>
              <div className="image-box">
                <img
                  src="/images/takizawa-owl-king.webp"
                  alt="Takizawa Acceptance"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TakizawaPage;
