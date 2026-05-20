import React from "react";
import "./yoshimura.css";

const YoshimuraPage = () => {
  return (
    <div className="yoshimura-container">
      <header className="yoshimura-hero">
        <div className="hero-text-wrapper">
          <h1>YOSHIMURA ETO</h1>
          <p className="alias">"The One-Eyed Owl / The Archetypal Trickster"</p>
        </div>
      </header>

      <main className="yoshimura-content">
        <section className="tragedy-quote">
          <p>
            "My books need to be works that look at the world from a twisted
            angle. Because the author itself... is completely broken."
          </p>
        </section>

        <section>
          <div className="yoshimura-grid-container">
            <div className="yoshimura-grid-row ego-row">
              <div className="text-box">
                <h2 className="yoshimura-grid-heading">The Literary Persona</h2>
                <p className="yoshimura-grid-analysis">
                  Eto constructs an incredibly brilliant, highly public
                  conscious Persona under her human alias, Takatsuki Sen. As a
                  famous, wildly eccentric horror novelist, she presents herself
                  as a disorganized, quirky, and deeply empathetic human woman.
                  This mask is a masterpiece of social adaptation. She uses her
                  books to subtly broadcast the hidden psychological decay of
                  society, using her brilliant intellectual Persona to openly
                  criticize the CCG and charm the public while completely hiding
                  her identity as the most dangerous ghoul in Tokyo.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="yoshimura-grid-row fracture-row shadow-row">
              <div className="text-box">
                <h2 className="yoshimura-grid-heading">The Founding Owl</h2>
                <p className="yoshimura-grid-analysis">
                  Beneath the playful human author sits the true leader of
                  Aogiri Tree. Eto's conscious ego does not battle her Shadow;
                  she has completely yielded to it, turning her predatory
                  biology into an instrument of absolute revolutionary terror.
                  Her mindset is defined by a cold, nihilistic malice born from
                  being abandoned in the 24th Ward as an infant. In this phase,
                  she operates with terrifying, uninhibited freedom, viewing
                  torture, war, and societal destabilization as necessary
                  surgical tools to force the evolution of the world.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="yoshimura-grid-row owl-row shadow-row">
              <div className="text-box">
                <h2 className="yoshimura-grid-heading">
                  The Devouring Complex
                </h2>
                <p className="yoshimura-grid-analysis">
                  When Eto manifests her massive, multi-eyed One-Eyed Owl Kakuja
                  form, her individual psychology expands into the Collective
                  Unconscious. Her physical body is completely encased in an
                  armor of mouths and kagune, mirroring the raw, unfiltered
                  imagery of a living nightmare. This form represents the
                  ultimate eruption of the instinctual ID. She becomes an
                  elemental force of pure destruction, swallowing investigators
                  whole and speaking in cryptic, mocking riddles that completely
                  break the psychological stability of anyone who dares to cross
                  her path.
                </p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="yoshimura-grid-row acceptance-row self-row">
              <div className="text-box">
                <h2 className="yoshimura-grid-heading">The Broken Catalyst</h2>
                <p className="yoshimura-grid-analysis">
                  In her final evolutionary phase, Eto achieves a twisted,
                  profound realization of the Self. She reveals that her entire
                  life of terror was a calculated master plan to tear down the
                  corrupt cage built by the Washuu clan. By purposely allowing
                  herself to be captured, publishing her final book to expose
                  ghoul reality to humanity, and eventually passing the throne
                  to Kaneki, she completes her psychological purpose. She
                  accepts her role as the tragic catalyst who had to break the
                  world apart so a balanced, unified future could finally be
                  born.
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

export default YoshimuraPage;
