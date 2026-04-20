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
            <div className="kaneki-grid-row">
              <div className="text-box">
                <h2 className="kaneki-grid-heading">The Persona</h2>
                <p className="kaneki-grid-analysis">
                  The 'college student' is a functional complex used for social
                  adaptation. For Kaneki, this is a desperate sanctuary of human
                  morality and literature. However, by clinging to this mask, he
                  creates a psychological tension that prevents him from
                  integrating his new reality, eventually leading to a total
                  fracture of the self.
                </p>
              </div>
              <div className="image-box">
                <img src="/images/kaneki-human.webp" alt="Human Kaneki" />
              </div>
            </div>
            <div className="kaneki-grid-row shadow-row">
              <div className="text-box">
                <h2 className="kaneki-grid-heading">The Shadow</h2>
                <p className="kaneki-grid-analysis">
                  he Shadow represents everything the ego refuses to
                  acknowledge. By denying his 'Ghoul' side, Kaneki allows his
                  repressed instincts and hunger to grow in the unconscious.
                  This denial fuels the Shadow's power until it no longer asks
                  for permission to emerge, resulting in the terrifying eruption
                  of his predatory nature.
                </p>
              </div>
              <div className="image-box">
                <img src="/images/kaneki-shadow.webp" alt="Shadow Kaneki" />
              </div>
            </div>
            <div className="kaneki-grid-row centipede-possessions shadow-row">
              <div className="text-box">
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
              <div className="image-box">
                <img
                  src="/images/centipede-kaneki.jpg"
                  alt="Centipede Kaneki"
                />
              </div>
            </div>
            <div className="kaneki-grid-row self-row">
              <div className="text-box">
                <h2 className="kaneki-grid-heading">The Self</h2>
                <p className="kaneki-grid-analysis">
                  The 'college student' is a functional complex used for social
                  adaptation. For Kaneki, this is a desperate sanctuary of human
                  morality and literature. However, by clinging to this mask, he
                  creates a psychological tension that prevents him from
                  integrating his new reality, eventually leading to a total
                  fracture of the self.
                </p>
              </div>
              <div className="image-box">
                <img src="/images/one-eyed-king.webp" alt="The One-Eyed King" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KanekiPage;
