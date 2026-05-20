import React from "react";
import "./hideyoshi.css";

const HideyoshiPage = () => {
  return (
    <div className="hideyoshi-container">
      <header className="hideyoshi-hero">
        <div className="hero-text-wrapper">
          <h1>RIZE hideyoshi</h1>
          <p className="alias">"INSERT CONTENT"</p>
        </div>
      </header>

      <main className="hideyoshi-content">
        <section className="tragedy-quote">
          <p>"QUOTE"</p>
        </section>

        <section>
          <div className="hideyoshi-grid-container">
            <div className="hideyoshi-grid-row ego-row">
              <div className="text-box">
                <h2 className="hideyoshi-grid-heading">INSERT CONTENT</h2>
                <p className="hideyoshi-grid-analysis">INTESRT CONTENT</p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="hideyoshi-grid-row fracture-row shadow-row">
              <div className="text-box">
                <h2 className="hideyoshi-grid-heading">INSERT CONTENT</h2>
                <p className="hideyoshi-grid-analysis">INSERT CONTENT</p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="hideyoshi-grid-row owl-row shadow-row">
              <div className="text-box">
                <h2 className="hideyoshi-grid-heading">INSERT CONTENT</h2>
                <p className="hideyoshi-grid-analysis">INSERT CONTENT</p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="thideyoshi-grid-row acceptance-row self-row">
              <div className="text-box">
                <h2 className="hideyoshi-grid-heading">INSERT CONTENT</h2>
                <p className="hideyoshi-grid-analysis">INSERT CONTENT</p>
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
