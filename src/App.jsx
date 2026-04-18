import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="Full-page">
        <header>
          <h1>Tokyo Ghoul</h1>
        </header>
        <div className="image-slider-container">
          <img src="/images/arima.webp" />
          <img src="/images/eto.webp" />
          <img src="/images/hide.webp" />
          <img src="/images/kaneki-ken.webp" className="kaneki-human" />
          <img src="/images/juuzou-suzuya.webp" />
          <img src="/images/tsukiyama.webp" />
          <img src="/images/touka.webp" />
        </div>
      </div>
    </>
  );
}

export default App;
