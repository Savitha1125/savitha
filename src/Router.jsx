
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./blog";
import ServiceUs from "./ServiceUs";
import NavBar from "./Nav";
import { AccessProvider } from "./AccessContext";
import BaseComponent from "bootstrap/js/dist/base-component";
import BasicExample from "./Nav";

export default function Router() {
  return (
    <AccessProvider>
      <BrowserRouter>
        <BasicExample />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/service" element={<ServiceUs />} />
        </Routes>
      </BrowserRouter>
    </AccessProvider>
  );
}
