import React from "react";

const KanekiPage = () => {
  return (
    <div>
      {/* You can import your sidebar here later! */}

      <main className="main-content">
        <header className="character-header">
          <h1>Ken Kaneki</h1>
          <p className="alias">"The One-Eyed King"</p>
        </header>

        <section className="jungian-analysis">
          <h2>Psychological Profile</h2>
          <p>
            {/* Your Jungian integration text goes here */}
            Kaneki represents the struggle of the Shadow...
          </p>
        </section>

        <section></section>
      </main>
    </div>
  );
};

export default KanekiPage;
