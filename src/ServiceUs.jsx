// // export default function Contact(){
// //       return <h2 style={{ backgroundColor: "green",marginTop:"0", height: "150px",width:"50%" }}> Contact Page</h2>;
// // }
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAccess } from "./AccessContext";

export default function ServiceUs() {
  const { AccessService } = useAccess();
  const navigate = useNavigate();

  useEffect(() => {
    if (!AccessService) {
      navigate(-1); 
    }
  }, [AccessService, navigate]);

  if (!AccessService) return null;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Our Services</h1>
      <p>Here are our amazing services!</p>
    </div>
  );
}
