import React from "react";
import "./kirishima.css";

const KirishimaPage = () => {
  return (
    <div className="kirishima-container">
      <header className="kirishima-hero">
        <div className="hero-text-wrapper">
          <h1>RIZE kirishima</h1>
          <p className="alias">"INSERT CONTENT"</p>
        </div>
      </header>

      <main className="kirishima-content">
        <section className="tragedy-quote">
          <p>"QUOTE"</p>
        </section>

        <section>
          <div className="kirishima-grid-container">
            <div className="kirishima-grid-row ego-row">
              <div className="text-box">
                <h2 className="kirishima-grid-heading">INSERT CONTENT</h2>
                <p className="kirishima-grid-analysis">INTESRT CONTENT</p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="kirishima-grid-row fracture-row shadow-row">
              <div className="text-box">
                <h2 className="kirishima-grid-heading">INSERT CONTENT</h2>
                <p className="kirishima-grid-analysis">INSERT CONTENT</p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="kirishima-grid-row owl-row shadow-row">
              <div className="text-box">
                <h2 className="kirishima-grid-heading">INSERT CONTENT</h2>
                <p className="kirishima-grid-analysis">INSERT CONTENT</p>
              </div>
              <div className="image-box">
                <img src=" " alt=" " />
              </div>
            </div>

            <div className="tkirishima-grid-row acceptance-row self-row">
              <div className="text-box">
                <h2 className="kirishima-grid-heading">INSERT CONTENT</h2>
                <p className="kirishima-grid-analysis">INSERT CONTENT</p>
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
