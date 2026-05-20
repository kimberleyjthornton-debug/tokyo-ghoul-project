import React from "react";
import "./suzuya.css";

const SuzuyaPage = () => {
  return (
    <div className="suzuya-container">
      <header className="suzuya-hero">
        <div className="hero-text-wrapper">
          <h1>SUZUYA JUUZOU</h1>
          <p className="alias">
            The CCG's Problem Child / The Pure Unconscious"
          </p>
        </div>
      </header>

      <main className="suzuya-content">
        <section className="tragedy-quote">
          <p>
            "Why should I apologize for being a monster? Has anyone ever
            apologized for turning me into one?"
          </p>
        </section>

        <section>
          <div className="suzuya-grid-container">
            <div className="suzuya-grid-row ego-row">
              <div className="text-box">
                <h2 className="suzuya-grid-heading">The Stitched Identity</h2>
                <p className="suzuya-grid-analysis">
                  Unlike ordinary investigators who wear standard suits and
                  follow rigid protocols, Juuzou completely lacks a conventional
                  human Persona. He wears bright, mismatched clothes, sports
                  body-stitch art, and exhibits a hyperactive, childlike
                  demeanor. This erratic mask isn't an intentional social
                  disguise; it is the fragile, unformed shell of an ego trying
                  to navigate human society after total developmental isolation.
                  Because he lacks a structured social filter, his eccentric
                  Persona serves as a direct window into his deeply fragmented,
                  unguided internal world.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="suzuya-grid-row fracture-row shadow-row">
              <div className="text-box">
                <h2 className="suzuya-grid-heading">The Playground of Death</h2>
                <p className="suzuya-grid-analysis">
                  Beneath his playful surface sits a completely detached
                  psychological framework regarding physical pain and morality.
                  Having been systematically tortured and forced to act as a
                  scrapper for ghoul entertainment, Juuzou's conscious ego lacks
                  any concept of fear, empathy, or self-preservation. When
                  unleashed on the battlefield, he surrenders completely to a
                  manic, hyper-violent state of pure impulse. He treats lethal
                  combat as a consequence-free game, displaying the terrifying
                  reality of what happens when a human mind is stripped of its
                  conditioning and left entirely to primitive, survivalist id
                  mechanics.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="suzuya-grid-row owl-row shadow-row">
              <div className="text-box">
                <h2 className="suzuya-grid-heading">The Adopted Conscience</h2>
                <p className="suzuya-grid-analysis">
                  Juuzou's path toward true psychological remodeling begins
                  through his deep, emotional bond with his partner and mentor,
                  Yukinori Shinohara. Shinohara functions as Juuzou's Surrogate
                  Superego, offering the unconditional parental love,
                  boundaries, and moral structure that Juuzou was denied as a
                  child. Through this relationship, Juuzou begins to anchor his
                  conscious mind to human values, learning to value another
                  person's life over his own immediate impulses. Shinohara
                  becomes the literal psychological bridge keeping Juuzou from
                  dissolving entirely into a state of feral, unhinged violence.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="suzuya-grid-row acceptance-row self-row">
              <div className="text-box">
                <h2 className="suzuya-grid-heading">The Integrated Guardian</h2>
                <p className="suzuya-grid-analysis">
                  Following the catastrophic loss of Shinohara, Juuzou avoids a
                  total mental collapse by stepping into a profound state of
                  psychological maturity. In :re, he achieves a balanced, highly
                  integrated Self. He assumes the mantle of Special Investigator
                  and becomes the leader of his own squad, inheriting Arima’s
                  title as the CCG's definitive weapon. He retains his unique,
                  unconventional spark and lethal tactical prowess, but anchors
                  it entirely to a deep sense of loyalty, responsibility, and
                  protective empathy for his subordinates. He evolves from a
                  broken, chaotic weapon into a sovereign, self-actualized
                  protector of the peace.
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

export default SuzuyaPage;
