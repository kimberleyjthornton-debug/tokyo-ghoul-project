import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import KanekiPage from "./kaneki"; // Ensure the file is named kaneki.jsx and has the export
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="Layout-Wrapper">
        {/* --- SIDEBAR: Stays visible on every page --- */}
        <nav className="Sidebar-Nav">
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/kaneki" className="nav-link">
                Kaneki Ken
              </NavLink>
            </li>
            <li>
              <NavLink to="/kamishiro" className="nav-link">
                Kamishiro Rize
              </NavLink>
            </li>
            <li>
              <NavLink to="/hideyoshi" className="nav-link">
                Nagachika Hideyoshi
              </NavLink>
            </li>
            <li>
              <NavLink to="/arima" className="nav-link">
                Arima Kishou
              </NavLink>
            </li>
            <li>
              <NavLink to="/amon" className="nav-link">
                Amon Kotaro
              </NavLink>
            </li>
            <li>
              <NavLink to="/suzuya" className="nav-link">
                Suzuya Juuzou
              </NavLink>
            </li>
            <li>
              <NavLink to="/yoshimura" className="nav-link">
                Yoshimura Eto
              </NavLink>
            </li>
            <li>
              <NavLink to="/takizawa" className="nav-link">
                Takizawa Seidou
              </NavLink>
            </li>
            <li>
              <NavLink to="/tsukiyama" className="nav-link">
                Tsukiyama Shuu
              </NavLink>
            </li>
            <li>
              <NavLink to="/kirishima" className="nav-link">
                Kirishima Touka
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* --- MAIN CONTENT: This area "swaps" based on the URL --- */}
        <div className="main-content">
          <Routes>
            {/* 1. THE HOME ROUTE */}
            <Route
              path="/"
              element={
                <>
                  <header>
                    <h1>Tokyo Ghoul</h1>
                  </header>
                  <section>
                    <p>
                      <span className="text-highlight">Tokyo Ghoul</span>{" "}
                      explores <span className="highlight">Individuation</span>,
                      the harrowing psychological journey of integrating one's
                      conscious self with the monstrous{" "}
                      <span className="highlight">"Shadow."</span>. Trauma,
                      identity, and the integration of repressed desires.
                      Through a Jungian lens, these characters are more than
                      just allies or enemies; they represent Jungian archetypes
                      of Kaneki’s own fractured psyche. Select a character below
                      to explore their profiles and uncover their role in his
                      transformation toward wholeness..
                    </p>
                  </section>
                  <div className="image-slider-container">
                    <NavLink to="/kamishiro">
                      <img src="/images/rize-kamishiro.webp" alt="Kamishiro" />
                    </NavLink>
                    <NavLink to="/hideyoshi">
                      <img src="/images/hide.webp" alt="Nagachika" />
                    </NavLink>
                    <NavLink to="/touka">
                      <img src="/images/touka.webp" alt="Kirishima" />
                    </NavLink>
                    <NavLink to="/tsukiyama">
                      <img src="/images/tsukiyama.webp" alt="Tsukiyama" />
                    </NavLink>
                    <NavLink to="/kaneki">
                      <img src="/images/kaneki-ken.webp" alt="Kaneki" />
                    </NavLink>
                    <NavLink to="/eto">
                      <img src="/images/eto.webp" alt="Yoshimura" />
                    </NavLink>
                    <NavLink to="/juuzou">
                      <img src="/images/juuzou-suzuya.webp" alt="Suzuya" />
                    </NavLink>
                    <NavLink to="/amon">
                      <img src="/images/amon.webp" alt="Amon" />
                    </NavLink>
                    <NavLink to="/takizawa">
                      <img src="/images/takizawa.webp" alt="Takizawa" />
                    </NavLink>
                    <NavLink to="/arima">
                      <img src="/images/arima.webp" alt="Arima" />
                    </NavLink>
                  </div>
                </>
              }
            />

            {/* 2. THE KANEKI ROUTE */}
            <Route path="/kaneki" element={<KanekiPage />} />

            {/* FUTURE ROUTES: You will add Rize, Hide, etc. here later */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
