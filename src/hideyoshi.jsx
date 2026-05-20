import React from "react";
import "./hideyoshi.css";

const HideyoshiPage = () => {
  return (
    <div className="hideyoshi-container">
      <header className="hideyoshi-hero">
        <div className="hero-text-wrapper">
          <h1>NAGACHIKA HIDEYOSHI</h1>
          <p className="alias">"Scarecrow / The Unconditional Anchor"</p>
        </div>
      </header>

      <main className="hideyoshi-content">
        <section className="tragedy-quote">
          <p>
            "I already knew, man. Who cares about that? Let's just go home."
          </p>
        </section>

        <section>
          <div className="hideyoshi-grid-container">
            <div className="hideyoshi-grid-row ego-row">
              <div className="text-box">
                <h2 className="hideyoshi-grid-heading">
                  The Carefree Companion
                </h2>
                <p className="hideyoshi-grid-analysis">
                  On the surface, Hide presents a highly energetic, brightly
                  colored, and almost intentionally oblivious human Persona. He
                  plays the role of the loud, fashion-clueless college student
                  perfectly. However, this mask hides an extraordinarily sharp
                  intellect and deep emotional intelligence. Hide uses his
                  unassuming Persona as a strategic tool to keep close tabs on
                  Kaneki's deteriorating mental state, navigating dangerous
                  human and ghoul investigations from the shadows without ever
                  breaking the comforting illusion of normal human friendship.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="hideyoshi-grid-row fracture-row shadow-row">
              <div className="text-box">
                <h2 className="hideyoshi-grid-heading">
                  The Shadow Track-Down
                </h2>
                <p className="hideyoshi-grid-analysis">
                  As Kaneki disappears into the violent underworld of ghouls,
                  Hide transitions from a casual observer into a silent,
                  hyper-vigilant protector. He systematically infiltrates CCG
                  communication networks and joins the division as an
                  investigator's assistant, risking his life to locate his
                  friend. This phase demonstrates his role as Kaneki's external
                  ego preservation mechanism: even when Kaneki's conscious human
                  mind completely fractures under torture and isolation, Hide
                  remains in the background, working tirelessly to preserve a
                  pathway back to the light.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="hideyoshi-grid-row owl-row shadow-row">
              <div className="text-box">
                <h2 className="hideyoshi-grid-heading">
                  The Devouring Salvation
                </h2>
                <p className="hideyoshi-grid-analysis">
                  During the catastrophic climax of the Anteiku Raid, Hide and a
                  completely manic, half-blind Kaneki confront each other in the
                  subterranean sewers. Instead of running from Kaneki's
                  unhinged, predatory Shadow, Hide steps directly into it. He
                  willingly offers his own body as sustenance to heal his
                  starving friend, telling him to fight with everything he has.
                  By offering himself up to be partially devoured, Hide performs
                  the ultimate act of unconditional love, forcing Kaneki to
                  survive while stamping his human presence permanently inside
                  Kaneki's psyche.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="hideyoshi-grid-row acceptance-row self-row">
              <div className="text-box">
                <h2 className="hideyoshi-grid-heading">The Reunited Source</h2>
                <p className="hideyoshi-grid-analysis">
                  Emerging in :re hidden behind the silent mask of "Scarecrow,"
                  Hide's final phase represents the ultimate survival and
                  restoration of Kaneki’s core humanity. When his throat
                  injuries are revealed, displaying the severe scars of Kaneki's
                  hunger, he shows no resentment. By organizing ghouls and
                  humans to unite for Kaneki’s rescue from the Dragon, Hide acts
                  as the ultimate catalyst for the unified Self. He proves that
                  Kaneki’s humanity was never truly lost, serving as the
                  permanent foundation upon which a new, balanced world can be
                  built.
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

export default HideyoshiPage;
