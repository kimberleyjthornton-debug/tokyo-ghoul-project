import React from "react";
import "./tsukiyama.css";

const TsukiyamaPage = () => {
  return (
    <div className="tsukiyama-container">
      <header className="tsukiyama-hero">
        <div className="hero-text-wrapper">
          <h1>TSUKIYAMA SHUU</h1>
          <p className="alias">"The Gourmet / The Narcissistic Shadow"</p>
        </div>
      </header>

      <main className="tsukiyama-content">
        <section className="tragedy-quote">
          <p>
            "You don't need to blame yourself for hurting someone, just like a
            wolf doesn't apologize for devouring a lamb. The weak are meat, and
            the strong do eat. It is the majestic law of nature!"
          </p>
        </section>

        <section>
          <div className="tsukiyama-grid-container">
            <div className="tsukiyama-grid-row ego-row">
              <div className="text-box">
                <h2 className="tsukiyama-grid-heading">
                  The Flamboyant Aristocrat
                </h2>
                <p className="tsukiyama-grid-analysis">
                  Tsukiyama’s conscious mind is dominated by a highly
                  exaggerated, theatrical Persona. He presents himself as a
                  refined international gentleman, an elitist connoisseur of
                  European literature, fine dining, and haute couture. This
                  flamboyant mask is used to mask his terrifying sociopathy and
                  project an aura of supreme control. His ego is entirely
                  dependent on this aesthetic superiority, treating his
                  monstrous cravings not as a moral failing, but as a heightened
                  artistic pursuit that places him far above ordinary ghouls and
                  humans.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="tsukiyama-grid-row fracture-row shadow-row">
              <div className="text-box">
                <h2 className="tsukiyama-grid-heading">The Ghoul Restaurant</h2>
                <p className="tsukiyama-grid-analysis">
                  When his aesthetic boundaries are crossed or an obsession
                  takes root, the polished aristocrat fractures instantly,
                  unleashing a manic, obsessive predator. This side of Tsukiyama
                  is defined by pure, unadulterated gluttony and psychological
                  fixation—most notably his twisted, predatory obsession with
                  consuming Kaneki. This represents a total psychological
                  fracture: his elegant ego completely loses control to his
                  primal Id, driving him to acts of extreme, manic desperation
                  where his sophisticated language devolves into animalistic
                  screams for gratification.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="tsukiyama-grid-row owl-row shadow-row">
              <div className="text-box">
                <h2 className="tsukiyama-grid-heading">
                  The Melancholic Emptiness
                </h2>
                <p className="tsukiyama-grid-analysis">
                  Following Kaneki’s presumed death at the end of the original
                  series, Tsukiyama experiences a catastrophic psychological
                  collapse. Deprived of the object of his obsession, his ego
                  completely disintegrates into a state of severe pathological
                  depression and physical wasting. His glamorous Persona
                  vanishes entirely, leaving behind a hollow, bedridden shell
                  consumed by grief and starvation. This phase exposes the
                  terrifying vulnerability of a psyche built entirely on
                  external fixation; without his "gourmet" obsession to feed his
                  ego, his internal world plunges into total shadow and decay.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="tsukiyama-grid-row acceptance-row self-row">
              <div className="text-box">
                <h2 className="tsukiyama-grid-heading">The Loyal Leader</h2>
                <p className="tsukiyama-grid-analysis">
                  Tsukiyama's true path to individuation occurs during the
                  events of :re. Forced to step up to protect his family and
                  rescue a memory-wiped Kaneki (Haise), he finally integrates
                  his shallow, selfish desires into a deeper sense of communal
                  responsibility. He stops viewing Kaneki as a meal to be
                  possessed and starts viewing him as a leader to be supported.
                  By transforming his destructive obsession into genuine,
                  sacrificial loyalty, Tsukiyama achieves a balanced
                  Self—retaining his theatrical, colorful passion but anchoring
                  it to an authentic, mature moral framework.
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

export default TsukiyamaPage;
