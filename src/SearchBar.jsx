import React, { useState } from "react";
import "./Searchbar.css";

export default function SearchBar() {
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className="right-section">
      <div className="search-bar">
        <input
          className="text"
          type="text"
          placeholder="Search 5000+ flowers, cakes, gifts etc"
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <i className="fi fi-br-search"></i>

        {showSuggestions && (
          <div className="search-tooltip">
            <h6 className="search-item">
              Trending Shortcut
              <hr />
            </h6>
            <div className="sub-menu">Cakes</div>
            <div className="sub-menu1">Flowers</div>
            <div className="sub-menu2">Gifts</div>
            <div className="sub-menu00">Combos</div>
            <div className="sub-menu01">Chocolates</div>
            <div className="sub-menu02">Birthday Gifts</div>
            <div className="sub-menu3">Personalized Gifts</div>
            <div className="sub-menu001">Anniversary Gifts</div>
          </div>
        )}
      </div>
    </div>
  );
}
