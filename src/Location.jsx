import { useState } from "react";
import img1 from './assets/in.png'; 
import './Location.css'

export default function DeliveryLocation() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="location-box" onClick={() => setShowPopup(true)}>
        <img src={img1} alt="India Flag" className="flag" />
        <span className="country-code">IND</span>
        <div className="divider"></div>
        <i className="fa-solid fa-location-dot" style={{ marginLeft: "15px" }}></i>
        <span className="choose-text" style={{ marginLeft: "10px" }}>
          Choose Delivery Location
        </span>
        <i className="fa-solid fa-pen" style={{ marginLeft: "18px" }}></i>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h1>Select Delivery Location</h1>
              <button className="close-btn" onClick={() => setShowPopup(false)}>
                ✕
              </button>
            </div>

            <h4 className="popup-subtitle">
              Select a delivery location to see product availability
            </h4>

            <div className="radio-group">
              <label>
                <input type="radio" name="location" defaultChecked />
               <span style={{marginLeft:"10px",fontWeight:"bold"}}>Within India</span> 
              </label>
              <label>
                <input type="radio" name="location" />
                <span style={{marginLeft:"10px"}}>Outside India</span>
              </label>
            </div>

            <div className="search-section">
              <i className="fa-solid fa-location-dot"></i>
              <input
                type="text"
                placeholder="Enter Delivery Area or Pincode"
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="links">
              <a href="#">Don’t Know Pincode?</a>
              <i
                className="fi fi-rs-location-crosshairs"
                style={{ color: "#80c2f1", marginRight: "-30%", marginTop: "3px" }}
              ></i>
              <span style={{ color: "#80c2f1" }}>Detect my Location</span>
            </div>

            <p className="login-text">
              Login to view saved addresses. <a href="#">Login</a>
            </p>

            <button className="continue-btn">Continue Shopping</button>
          </div>
        </div>
      )}
       <div className="icons-right">
      <div className="icon">
        <i class="fi fi-ss-user"></i>
      </div>
      <div className="icon">
        <i class="fi fi-ss-heart"></i>
        <span className="badge"></span>
      </div>
      <div className="icon">
        <i class="fi fi-ss-shopping-cart"></i>
        <span className="badge"></span>
      </div>
    </div>
    </>
  );
}
