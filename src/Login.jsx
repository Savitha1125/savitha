
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Button } from "bootstrap";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("Savitha");
    navigate("/product"); 
  };

  return (
    <div style={{ textAlign:"center", marginTop:"50px" }}>
      <h2>Login Page</h2>
      <button style={{backgroundColor:"red"}} onClick={handleLogin}>Login</button>
    </div>
  );
}
