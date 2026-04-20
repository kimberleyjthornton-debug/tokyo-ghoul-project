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
        <section className>
          <div className="kaneki-grid-container">
            <div className="row kaneki-grid-row mb-3">
              <div className="col">
                <img
                  src="/images/kaneki-human.webp"
                  alt="Human Kaneki"
                  className="img-fluid rounded"
                  title="Human Kaneki"
                />
              </div>
              <div className="col">
                <div>
                  <h2 className="kaneki-grid-heading text-center">
                    The Persona
                  </h2>
                  <p className="kaneki-grid-analysis">
                    The "college student" mask. Gentle, well-read, and desperate
                    to remain in the human world.
                  </p>
                </div>
              </div>
            </div>
            <div className="row kaneki-grid-row mb-3">
              <div className="col">
                <div>
                  <h2 className="kaneki-grid-heading text-center">
                    The Shadow
                  </h2>
                  <p className="kaneki-grid-analysis">
                    The emergence of the Shadow Self. The ghoul side of Kaneki
                    that he tries to suppress, denying his hunger and urges.
                  </p>
                </div>
              </div>
              <div className="col">
                <img
                  src="/images/kaneki-shadow.webp"
                  alt="Ghoul Kaneki"
                  className="img-fluid rounded"
                  title="Ghoul Kaneki"
                />
              </div>
            </div>
            <div className="row kaneki-grid-row mb-3 centipede-possessions">
              <div className="col">
                <img
                  src="/images/centipede-kaneki.jpg"
                  alt="Centipede Kaneki"
                  className="img-fluid rounded"
                  title="Centipede Kaneki"
                />
              </div>
              <div className="col">
                <div>
                  <h2 className="kaneki-grid-heading text-center">
                    The Shadow Possession
                  </h2>
                  <p className="kaneki-grid-analysis">
                    The Centipede represents an 'Autonomous Complex.' It is the
                    trauma of Yamori's torture manifesting as a separate entity.
                    Here, the Shadow is no longer a part of Kaneki—it has
                    possessed him, turning his suffering into a destructive,
                    animalistic force of pure survival.
                  </p>
                </div>
              </div>
            </div>
            <div className="row kaneki-grid-row mb-3">
              <div className="col">
                <div>
                  <h2 className="kaneki-grid-heading text-center">The Self</h2>
                  <p className="kaneki-grid-analysis">
                    The final stage of Individuation. Kaneki stops fighting his
                    nature and accepts both the 'Student' and the 'Ghoul.' By
                    integrating his tragedy, he achieves wholeness, manifesting
                    as the One-Eyed King who bridges two worlds.
                  </p>
                </div>
              </div>
              <div className="col">
                <img
                  src="/images/one-eyed-king.webp"
                  alt="The One Eyed King"
                  className="img-fluid rounded"
                  title="The One Eyed King"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KanekiPage;
