import React from "react";
import "./kaneki.css";

const KanekiPage = () => {
  return (
    <div className="kaneki-container">
      <header className="kaneki-hero">
        <div className="hero-text-wrapper">
          <h1>KANEKI KEN</h1>
          <p className="alias">"The One-Eyed King"</p>
        </div>
      </header>
      <main className="kaneki-content">
        <section className="tragedy-quote">
          <p>
            "I’m not the protagonist of a novel or anything. I’m just a college
            student who likes to read, like you could find anywhere. But... if,
            for sake of argument, you were to write a story with me in the lead
            role, it would certainly be... a tragedy..."
          </p>
        </section>
        <section className="kaneki-analysis">
          <div className="kaneki-grid-container mt-5">
            <div className="row">
              <div className="col">
                <img
                  src="/images/human-kaneki.webp"
                  alt="Human Kaneki"
                  title="Human Kaneki"
                />
              </div>
              </div>
              <div className="col">
                <div>
                  <h2 className="kaneki-grid-heading text-center">
                    The Persona
                  </h2>
                  <p>
                    <p className="kaneki-grid-analysis">
                      The "college student" mask. Gentle, well-read, and
                      desperate to remain in the human world.
                    </p>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div>
                    <h2 class="kaneki-grid-heading text-center">The Shadow</h2>
                    <p className="kaneki-grid-analysis">
                      Total loss of control. The repressed hunger and rage that
                      manifests as the "Centipede."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KanekiPage;
