import React from "react";
import "./kaneki.css";

const KanekiPage = () => {
  return (
    <div className="kaneki-container">
      <header className="kaneki-hero">
        <div className="hero-text-wrapper">
          <h1>KANEKI KEN</h1>
          <p className="alias">"The One-Eyed King"</p>
        </div>
      </header>
      <main className="kaneki-content">
        <section className="tragedy-quote">
          <p>
            "I’m not the protagonist of a novel or anything. I’m just a college
            student who likes to read, like you could find anywhere. But... if,
            for sake of argument, you were to write a story with me in the lead
            role, it would certainly be... a tragedy..."
          </p>
        </section>
        {/* ... rest of your content ... */}
      </main>
    </div>
  );
};

export default KanekiPage;
