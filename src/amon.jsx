import React from "react";
import "./amon.css";

const AmonPage = () => {
  return (
    <div className="amon-container">
      <header className="amon-hero">
        <div className="hero-text-wrapper">
          <h1>AMON KOTARO</h1>
          <p className="alias">"The Investigator / The Symmetrical Mirror"</p>
        </div>
      </header>

      <main className="amon-content">
        <section className="tragedy-quote">
          <p>
            "This world is wrong. It's twisted... and the ones twisting it are
            you ghouls! But... if you are right, then what was my life even
            for?!"
          </p>
        </section>

        <section>
          <div className="amon-grid-container">
            <div className="amon-grid-row ego-row">
              <div className="text-box">
                <h2 className="amon-grid-heading">The Shield of Justice</h2>
                <p className="amon-grid-analysis">
                  Amon’s conscious mind is anchored by a fiercely disciplined,
                  intensely moral Persona. As a top-tier CCG investigator, he
                  views the world through a stark, uncompromising
                  black-and-white lens: humans are innocent victims, and ghouls
                  are inherently evil monsters corrupting the earth. This rigid
                  mask of duty, constant physical training, and devotion to
                  justice is a defense mechanism built to seal away his
                  childhood trauma. He uses his conscious ideals to run away
                  from a terrifying truth he refuses to confront.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="amon-grid-row fracture-row shadow-row">
              <div className="text-box">
                <h2 className="amon-grid-heading">The Orphan's Nightmare</h2>
                <p className="amon-grid-analysis">
                  Beneath the heroic, clean-cut investigator sits a deeply
                  buried, agonizingly complex Shadow. Amon was raised in an
                  orphanage run by Donato Porpora—a powerful ghoul who genuinely
                  loved Amon like a son, yet brutally butchered the other
                  children in the facility. This creates a massive psychological
                  fracture: Amon’s entire life is dedicated to killing monsters,
                  yet his primary concept of a loving father is a monster. When
                  he encounters Kaneki during the civil battles, Kaneki spares
                  his life and cries over the necessity of fighting, causing
                  Amon’s rigid binary worldview to completely crack under the
                  weight of cognitive dissonance.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="amon-grid-row owl-row shadow-row">
              <div className="text-box">
                <h2 className="amon-grid-heading">The Floppy Experiment</h2>
                <p className="amon-grid-analysis">
                  Following his presumed death at the end of the original
                  series, Amon undergoes a literal, biological inversion.
                  Captured by Aogiri Tree and experimented on by Dr. Kanou, he
                  is transformed into a failed, Artificial One-Eyed Ghoul
                  ("Floppy"). His conscious human ego is completely smashed as
                  he is forced to adapt to the very physiology he spent his life
                  trying to eradicate. This phase represents the shadow
                  completely overtaking his reality—he must swallow ghoul meat
                  to survive, physically living out the exact existence he once
                  judged as unpardonable sin.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="amon-grid-row acceptance-row self-row">
              <div className="text-box">
                <h2 className="amon-grid-heading">The Balanced Truth</h2>
                <p className="amon-grid-analysis">
                  In the final chapters of his development, Amon achieves true
                  psychological individuation. He transcends his old, shallow
                  human Persona and his destructive ghoul Shadow, integrating
                  both into a sovereign, complete Self. He steps onto the
                  battlefield as a lone warrior who fights alongside both ghouls
                  and humans to stop the cycle of hatred. By finally confronting
                  Donato, acknowledging his twisted love for his ghoul father,
                  and accepting his own dual nature, Amon breaks out of his
                  mental prison to become a fundamental pillar of a newly
                  integrated, cooperative world.
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

export default AmonPage;
