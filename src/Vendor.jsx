import React, { useState } from "react";
import "./Vendor.css";

export default function VendorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const nameRegex = /^[A-Za-z ]{2,20}$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex = /^[a-zA-Z0-9@#_]{4,8}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!name) newErrors.name = "Name is required!";
    else if (!nameRegex.test(name)) newErrors.name = "Name must be letters only!";

    if (!email) newErrors.email = "Email is required!";
    else if (!emailRegex.test(email)) newErrors.email = "Enter a valid email!";

    if (!address) newErrors.address = "Address is required!";
    if (!city) newErrors.city = "City is required!";

    if (!password) newErrors.password = "Password is required!";
    else if (!passwordRegex.test(password))
      newErrors.password = "Password must be 4–8 characters!";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setAddress("");
      setCity("");
      setPassword("");
    }
  };

  return (
    <div className="vendor-container">
      <form onSubmit={handleSubmit} className="vendor-form">
        
        {/* 🔹 This is your form header */}
        <div className="form-header">
          <h2>Vendor Registration Application Form</h2>
          <p className="subtitle">
            Fill the below details to send an application for registration.
          </p>
        </div>

        <hr />

        {/* Rest of your inputs */}
        <label>Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? "error-input" : ""}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <label>Address *</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={errors.address ? "error-input" : ""}
        />
        {errors.address && <span className="error">{errors.address}</span>}

        <label>City *</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={errors.city ? "error-input" : ""}
        />
        {errors.city && <span className="error">{errors.city}</span>}

        <label>Email *</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "error-input" : ""}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Password *</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={errors.password ? "error-input" : ""}
        />
        {errors.password && <span className="error">{errors.password}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
