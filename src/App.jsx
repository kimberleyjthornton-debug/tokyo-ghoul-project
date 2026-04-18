import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="Layout-Wrapper">
        <nav className="Sidebar-Nav">
          <ul>
            <li>
              <a href="/kaneki" className="nav-link">
                Kaneki Ken
              </a>
            </li>
            <li>
              <a href="/kamishiro" className="nav-link">
                Rize Kamishiro
              </a>
            </li>
            <li>
              <a href="/nagachika" className="nav-link">
                Hideyoshi Nagachika
              </a>
            </li>
            <li>
              <a href="/arima" className="nav-link">
                Arima Kishou
              </a>
            </li>
            <li>
              <a href="/amon" className="nav-link">
                Kotaro Amon
              </a>
            </li>
            <li>
              <a href="/suzuya" className="nav-link">
                Suzuya Juuzou
              </a>
            </li>
            <li>
              <a href="/yoshimura" className="nav-link">
                Eto Yoshimura
              </a>
            </li>
            <li>
              <a href="/yoshimura" className="nav-link">
                Takizawa Seidou
              </a>
            </li>
            <li>
              <a href="/tsukiyama" className="nav-link">
                Tsukiyama Shuu
              </a>
            </li>
            <li>
              <a href="/kirishima" className="nav-link">
                Kirishima Touka
              </a>
            </li>
          </ul>
        </nav>
        <div className="main-content">
          <header>
            <h1>Tokyo Ghoul</h1>
          </header>
          <div className="image-slider-container">
            <img src="/images/rize-kamishiro.webp" />
            <img src="/images/hide.webp" />
            <img src="/images/touka.webp" />
            <img src="/images/tsukiyama.webp" />
            <img src="/images/kaneki-ken.webp" href="/kaneki" />
            <img src="/images/eto.webp" />
            <img src="/images/juuzou-suzuya.webp" />
            <img src="/images/amon.webp" />
            <img src="/images/takizawa.webp" />
            <img src="/images/arima.webp" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
