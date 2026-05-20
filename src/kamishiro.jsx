import React from "react";
import "./kamishiro.css";

const KamishiroPage = () => {
  return (
    <div className="kamishiro-container">
      <header className="kamishiro-hero">
        <div className="hero-text-wrapper">
          <h1>RIZE KAMISHIRO</h1>
          <p className="alias">"INSERT CONTENT"</p>
        </div>
      </header>

      <main className="kamishiro-content">
        <section className="tragedy-quote">
          <p>"QUOTE"</p>
        </section>

        <section>
          <div className="kamishiro-grid-container">
            <div className="kamishiro-grid-row ego-row">
              <div className="text-box">
                <h2 className="kamishiro-grid-heading">INSERT CONTENT</h2>
                <p className="kamishiro-grid-analysis">INTESRT CONTENT</p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="kamishiro-grid-row fracture-row shadow-row">
              <div className="text-box">
                <h2 className="kamishiro-grid-heading">INSERT CONTENT</h2>
                <p className="kamishiro-grid-analysis">INSERT CONTENT</p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="kamishiro-grid-row owl-row shadow-row">
              <div className="text-box">
                <h2 className="kamishiro-grid-heading">INSERT CONTENT</h2>
                <p className="kamishiro-grid-analysis">INSERT CONTENT</p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="tkamishiro-grid-row acceptance-row self-row">
              <div className="text-box">
                <h2 className="kamishiro-grid-heading">INSERT CONTENT</h2>
                <p className="kamishiro-grid-analysis">INSERT CONTENT</p>
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

export default KamishiroPage;
