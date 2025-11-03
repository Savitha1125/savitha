import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const [showPopup, setShowPopup] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showWishTooltip, setShowWishTooltip] = useState(false);

  const navigate = useNavigate();

  const handleWishlistClick = () => {
    navigate("/wishlist");
  };

  return (
    <>
      <div className="icons-right ms-5">
        {/* User icon */}
        <div
          className="icon-user"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <i className="fi fi-ss-user"></i>

          {showTooltip && (
            <div className="tooltip-user-box">
              <h4>Welcome</h4>
              <p className="order">To access account and manage orders</p>
              <button className="btn btn-outline-dark px-0 py-0">Signup/Login</button>
              <p className="show">
                My Winni
                <br />
                My Orders
                <br />
                My Address Book
                <br />
                My Wallet
                <br />
                My Reminder
              </p>
            </div>
          )}
        </div>

        {/* Wishlist icon */}
        <div
          className="wishlist"
          onMouseEnter={() => setShowWishTooltip(true)}
          onMouseLeave={() => setShowWishTooltip(false)}
          style={{ position: "relative" }}
          onClick={handleWishlistClick}
        >
          <div className="icon-heart me-5">
            <i className="fi fi-ss-heart"></i>

            {showWishTooltip && (
              <div className="tooltip-user-box1">
                <h6>Wishlist</h6>
              </div>
            )}
          </div>
        </div>

        {/* Cart icon */}
        <div className="icon2">
          <i className="fi fi-ss-shopping-cart"></i>
          <span className="badge" />
        </div>
      </div>
    </>
  );
}
