// import React, { useState } from "react";
//  import "./detailpage.css";

//  export default function Detail() {
//    const [showmenu,setShowmenu]=useState("false")
//    return (
//      <div className="container-fluid detailpage">
//        <div className="row text-center">
//          <div className="col menu-items active"
//          onMouseEnter={() => setShowWishlist(true)}
//          onMouseLeave={() => setShowWishlist(false)}>EXPRESS</div>
//          <div className="col menu-item">CAKES</div>
//          <div className="col menu-item">FLOWERS</div>
//          <div className="col menu-item">PLANTS</div>
//          <div className="col menu-item">GIFTS</div>
//          <div className="col menu-item">PERSONALIZED GIFTS</div>
//         <div className="col menu-item">CHOCOLATES</div>
//          <div className="col menu-item">COMBOS</div>
//          <div className="col menu-item">BIRTHDAY</div>
//          <div className="col menu-item">ANNIVERSARY</div>
//          <div className="Col menu-item">OCCASIONS</div>
//          </div>
//         <div className="delivery-container">
//    <i className="fi fi-rr-motorcycle scooty"></i>
//    <span className="delivery-text">2 Hour Delivery Gifts</span>
//  </div>

//      </div>
//    );
//  }
import React, { useState } from "react";
import "./detailpage.css";

export default function Detail() {
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <div className="container-fluid detailpage">
      <div className="row text-center align-items-center justify-content-between menu-row">
        {/* 🔹 Left Menu Items */}
        <div className="menu-left">
          <div className="menu-items active">EXPRESS</div>
          <div
  className="menu-item"
  onMouseEnter={() => setActiveMenu("cakes")}
  onMouseLeave={() => setActiveMenu(null)}
>
  CAKES
  {activeMenu === "cakes" && (
    <div
      className="mega-menu"
      onMouseEnter={() => setActiveMenu("cakes")}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="menu-column">
        <h4>By Flavour</h4>
        <p>Chocolate Cakes</p>
        <p>Red Velvet Cakes</p>
        <p>Butterscotch Cakes</p>
        <p>Vanilla Cakes</p>
        <p>Black Forest Cakes</p>
      </div>

      <div className="menu-column">
        <h4>By Type</h4>
        <p>Designer Cakes</p>
        <p>Photo Cakes</p>
        <p>Theme Cakes</p>
        <p>Heart Shape Cakes</p>
      </div>

      <div className="menu-column">
        <h4>By Occasion</h4>
        <p>Birthday Cakes</p>
        <p>Anniversary Cakes</p>
        <p>Kids Cakes</p>
        <p>Festival Cakes</p>
      </div>
    </div>
  )}
</div>

          <div className="menu-item">FLOWERS</div>
          <div className="menu-item">PLANTS</div>
          <div className="menu-item">GIFTS</div>
          <div className="menu-item">PERSONALIZED GIFTS</div>
          <div className="menu-item">CHOCOLATES</div>
          <div className="menu-item">COMBOS</div>
          <div className="menu-item">BIRTHDAY</div>
          <div className="menu-item">ANNIVERSARY</div>
          <div className="menu-item">OCCASIONS</div>
        </div>

        {/* 🔹 Right Side Delivery Box */}
        <div className="delivery-container">
          <i className="fi fi-rr-motorcycle scooty"></i>
          <span className="delivery-text">2 Hour Delivery Gifts</span>
        </div>
      </div>
    </div>
  );
}
