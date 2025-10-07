import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>🏠 Welcome to Home Page</h2>;
}

function About() {
  return <h2>ℹ️ About Us Page</h2>;
}

function Contact() {
  return <h2>📞 Contact Page</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        {/* Links to navigate */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
