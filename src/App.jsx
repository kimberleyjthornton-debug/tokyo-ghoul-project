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
                  <div className="image-slider-container">
                    <img src="/images/rize-kamishiro.webp" alt="Rize" />
                    <img src="/images/hide.webp" alt="Hide" />
                    <img src="/images/touka.webp" alt="Touka" />
                    <img src="/images/tsukiyama.webp" alt="Tsukiyama" />
                    <img src="/images/kaneki-ken.webp" alt="Kaneki" />
                    <img src="/images/eto.webp" alt="Eto" />
                    <img src="/images/juuzou-suzuya.webp" alt="Juuzou" />
                    <img src="/images/amon.webp" alt="Amon" />
                    <img src="/images/takizawa.webp" alt="Takizawa" />
                    <img src="/images/arima.webp" alt="Arima" />
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
