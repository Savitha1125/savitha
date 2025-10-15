
// import { useAuth } from "./AuthContext";
// import { useAccess} from './AuthContext';
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const { user, login } = useAuth();
//   const navigate = useNavigate();
//   const {canAccessService,setCanAccessService}=useAccess();

//   const handleReadMore=()=>{
//     setCanAccessService(true)
//     navigate("/service")
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Home Page</h1>
//       <button onClick={handleReadMore}>Read More</button>
//     </div>
//   );
// }
// src/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAccess } from "./AccessContext";

export default function Home() {
  const navigate = useNavigate();
  const { setAccessService } = useAccess();

  const handleReadMore = () => {
    setAccessService(true); 
    navigate("/service");      
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Home Page</h1>
      <button
        onClick={handleReadMore}
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        Read More
      </button>
    </div>
  );
}
