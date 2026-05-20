import React from "react";
import "./kirishima.css";

const KirishimaPage = () => {
  return (
    <div className="kirishima-container">
      <header className="kirishima-hero">
        <div className="hero-text-wrapper">
          <h1>KIRISHIMA TOUKA</h1>
          <p className="alias">"The Rabbit / The Guardian of the Threshold"</p>
        </div>
      </header>

      <main className="kirishima-content">
        <section className="tragedy-quote">
          <p>
            "What the hell do you know?! It's all because we can't eat this
            stuff... because we're born like this... we're monsters! I've...
            I've always wanted to be normal... like you."
          </p>
        </section>

        <section>
          <div className="kirishima-grid-container">
            <div className="kirishima-grid-row ego-row">
              <div className="text-box">
                <h2 className="kirishima-grid-heading">
                  The Schoolgirl Persona
                </h2>
                <p className="kirishima-grid-analysis">
                  Touka’s conscious mind is anchored by a fiercely guarded human
                  Persona. By wearing a school uniform, attending class, making
                  human friends, and forcing herself to swallow toxic human
                  food, she attempts to carve out a psychological sanctuary of
                  normalcy. This mask isn't just a camouflage for survival; it
                  represents her ego’s deepest, suppressed desire to belong to a
                  peaceful world. However, this rigid division creates immense
                  internal friction, as she must constantly repress her
                  biological reality to preserve the illusion.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="kirishima-grid-row fracture-row shadow-row">
              <div className="text-box">
                <h2 className="kirishima-grid-heading">The Rabbit's Rage</h2>
                <p className="kirishima-grid-analysis">
                  When her human sanctuary is threatened or her loved ones face
                  danger, Touka's Persona drops entirely, unleashing "The
                  Rabbit." Her Shadow is a storm of defensive, hyper-violent
                  instinct born from childhood abandonment and systemic trauma.
                  In this state, she completely surrenders to predatory
                  aggression, viewing the CCG and the human world with cold,
                  unforgiving malice. This fracture showcases her inability to
                  reconcile her two halves, reacting with raw, animalistic
                  survival mechanics whenever her fragile emotional equilibrium
                  is breached.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="kirishima-grid-row owl-row shadow-row">
              <div className="text-box">
                <h2 className="kirishima-grid-heading">
                  The Threshold Guardian
                </h2>
                <p className="kirishima-grid-analysis">
                  As she matures, Touka begins the difficult process of
                  integrating her dual natures. Working at Anteiku under
                  Yoshimura’s guidance, she learns to channel her protective
                  instincts without letting her violent Shadow completely hijack
                  her consciousness. She becomes a bridge between worlds—fierce
                  enough to defend the weak, yet empathetic enough to hold onto
                  her humanity. By acknowledging her capacity for violence while
                  actively choosing compassion, she steps into the archetype of
                  the Threshold Guardian for Kaneki, modeling a rough blueprint
                  of functional dual-existence.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="kirishima-grid-row acceptance-row self-row">
              <div className="text-box">
                <h2 className="kirishima-grid-heading">The Reclaimed Self</h2>
                <p className="kirishima-grid-analysis">
                  In the final chapters of her development, Touka achieves a
                  true integration of the Self. She abandons the frantic,
                  reactive rage of her youth and opens :re café, creating a
                  permanent, stable space where ghouls and humans can peacefully
                  coexist. By marrying Kaneki and carrying a child, she fully
                  synthesizes her ghoul biology with her deeply held human
                  values. Her arc reaches a state of psychological
                  individuation—she is no longer a monster pretending to be
                  human, nor a human trapped in a monster's body, but a
                  complete, sovereign individual who has successfully united her
                  conscious ideals with her instinctual shadow.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KirishimaPage;
