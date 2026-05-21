import React from "react";
import "./kamishiro.css";

const KamishiroPage = () => {
  return (
    <div className="kamishiro-container">
      <header className="kamishiro-hero">
        <div className="hero-text-wrapper">
          <h1>RIZE KAMISHIRO</h1>
          <p className="alias">"The Binge Eater / The Ravenous Anima"</p>
        </div>
      </header>

      <main className="kamishiro-content">
        <section className="tragedy-quote">
          <p>
            "Whose fault is it that things ended up like this? Coincidence? An
            accident? Fate? There's no such thing as fate. It's simply a
            combination of circumstances. And who is it that creates those
            circumstances?"
          </p>
        </section>

        <section>
          <div className="kamishiro-grid-container">
            <div className="kamishiro-grid-row ego-row">
              <div className="text-box">
                <h2 className="kamishiro-grid-heading">The Literary Mask</h2>
                <p className="kamishiro-grid-analysis">
                  In the conscious world, Rize constructs an impeccably tailored
                  Persona designed for social subversion and manipulation. She
                  masks her predatory nature behind the guise of an elegant,
                  soft-spoken, and intellectually curious young woman who
                  frequents quiet cafes reading complex literature. This
                  intellectual mask is a calculated adaptation used to disarm
                  her prey. For Kaneki, this Persona represents an idealized
                  mirror of his own ego, drawing him into a lethal trap by
                  projecting a shared, vulnerable humanity that masks her true
                  hunger.
                </p>
              </div>
              <div className="image-box">
                <img
                  src="/images/kamishiro-literary.webp"
                  alt="Kamishiro's Literary Mask"
                />
              </div>
            </div>

            <div className="kamishiro-grid-row fracture-row shadow-row">
              <div className="text-box">
                <h2 className="kamishiro-grid-heading">
                  The Gluttonous Shadow
                </h2>
                <p className="kamishiro-grid-analysis">
                  Beneath the refined, bookish intellect sits a ravenous,
                  completely uncontained Shadow defined entirely by primitive
                  instinct and impulse. Rize aggressively rejects all human
                  morality and ghoul societal codes alike, viewing the world
                  strictly as a hunting ground. When her mask drops, her base
                  desires completely hijack her psyche. Her chaotic obsession
                  with immediate gratification and "binge eating" represents a
                  total refusal to integrate with external reality, creating the
                  reckless, destructive patterns that ultimately lead to her
                  physical crushing under the steel beams.
                </p>
              </div>
              <div className="image-box">
                <img
                  src="/images/kamishiro-gluttonous.webp"
                  alt="Kamishiro's Gluttonous Shadow"
                />
              </div>
            </div>

            <div className="kamishiro-grid-row owl-row shadow-row">
              <div className="text-box">
                <h2 className="kamishiro-grid-heading">The Autonomous Anima</h2>
                <p className="kamishiro-grid-analysis">
                  Following her physical death, Rize undergoes a psychological
                  resurrection inside the architecture of Kaneki's mind. She
                  ceases to be a literal external enemy and instead evolves into
                  an Autonomous Complex—the personification of Kaneki's
                  repressed instincts. Whenever Kaneki faces extreme starvation
                  or psychological breakdown, this internalized projection of
                  Rize appears to taunt, seduce, and dismantle his fragile human
                  ego. She acts as the raw voice of his biological shadow,
                  forcing him to weaponize the animalistic power he desperately
                  tries to deny.
                </p>
              </div>
              <div className="image-box">
                <img
                  src="/images/kamishiro-autonomous-anima.webp"
                  alt="Kamishiro's Autonomous Anima"
                />
              </div>
            </div>

            <div className="kamishiro-grid-row acceptance-row self-row">
              <div className="text-box">
                <h2 className="kamishiro-grid-heading">The Fractured Origin</h2>
                <p className="kamishiro-grid-analysis">
                  While Kaneki successfully utilizes his mental projection of
                  Rize to move toward individuation, the literal, physical Rize
                  suffers a horrific psychological regression. Kept alive purely
                  as a biological incubator in Dr. Kanou's laboratory, her
                  consciousness is completely shattered by continuous,
                  systematic trauma. Stripped of all autonomy and reduced to a
                  primal state of perpetual, screaming madness, her personal arc
                  ends not in balanced integration, but as a hollow, tragic
                  monument to the cost of forced evolutionary exploitation.
                </p>
              </div>
              <div className="image-box">
                <img
                  src="/images/kamishiro-fractured-origin.webp"
                  alt="Kamishiro's Fractured Origin"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KamishiroPage;
