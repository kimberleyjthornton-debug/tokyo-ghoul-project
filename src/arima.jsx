import React from "react";
import "./arima.css";

const ArimaPage = () => {
  return (
    <div className="arima-container">
      <header className="arima-hero">
        <div className="hero-text-wrapper">
          <h1>ARIMA KISHOU</h1>
          <p className="alias">"The CCG's Reaper / The White God of Death"</p>
        </div>
      </header>

      <main className="arima-content">
        <section className="tragedy-quote">
          <p>
            "I... always hated it. I hated myself, who only stole things from
            others... I was finally... able to leave something behind...""
          </p>
        </section>

        <section>
          <div className="arima-grid-container">
            <div className="arima-grid-row ego-row">
              <div className="text-box">
                <h2 className="arima-grid-heading">The Invincible Mask</h2>
                <p className="arima-grid-analysis">
                  Arima’s conscious mind is entirely swallowed by an unyielding,
                  god-like Persona. To the CCG and the ghoul world alike, he is
                  an emotionless, undefeated machine of pure execution—devoid of
                  fear, malice, or empathy. This mask of absolute perfection is
                  an artificial adaptation demanded by his upbringing in the
                  Sunlit Garden. He suppresses every trace of human
                  vulnerability to maintain the establishment's ultimate weapon,
                  creating a terrifyingly detached ego that detaches entirely
                  from his own internal emotional landscape.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="arima-grid-row fracture-row shadow-row">
              <div className="text-box">
                <h2 className="arima-grid-heading">The Reaper's Threshold</h2>
                <p className="arima-grid-analysis">
                  In the subterranean depths of Cochlea and V14, Arima acts as
                  the literal destructive shadow of the CCG's authority. He
                  systematically obliterates Kaneki’s physical body and
                  fractures his remaining sanity, wiping away his memories to
                  remodel him into "Haise Sasaki." This phase represents the
                  absolute tyranny of the Archetypal Father: Arima enforces
                  total ego death upon Kaneki, using absolute violence to break
                  down the young ghoul’s identity so it can be entirely
                  rewritten and controlled by the systemic conscious world.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="arima-grid-row owl-row shadow-row">
              <div className="text-box">
                <h2 className="arima-grid-heading">The Cold Guardian</h2>
                <p className="arima-grid-analysis">
                  During the years of Kaneki's amnesia as Haise, Arima
                  transitions into a complex, dual role. While remaining his
                  supreme commander, he simultaneously acts as a surrogate
                  father figure, reading books with Haise and offering cold,
                  precise mentorship. Beneath the silent surface, Arima is
                  intentionally nurturing his own replacement. He looks at
                  Kaneki not as an enemy to destroy forever, but as the chosen
                  vessel—the only individual capable of eventually carrying the
                  weight of his own repressed, monstrous shadow and breaking the
                  cycle of exploitation.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="arima-grid-row acceptance-row self-row">
              <div className="text-box">
                <h2 className="arima-grid-heading">The Gift of Death</h2>
                <p className="arima-grid-analysis">
                  In their final battle at Cochlea, Arima's arc achieves a
                  profound, tragic resolution. Upon being defeated by a fully
                  integrated Kaneki, Arima cuts his own throat, utilizing his
                  final breaths to pass the mantle of leadership to his "son."
                  By orchestrating his own defeat, Arima's cold Persona shatters
                  completely, revealing a deeply sorrowful human who hated a
                  life spent only taking from others. Through this ultimate
                  sacrifice, he abdicates his throne, crowning Kaneki as the
                  One-Eyed King and leaving behind a liberated legacy of unified
                  hope.
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

export default ArimaPage;
