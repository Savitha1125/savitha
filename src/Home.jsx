import Contact from "./Contact";
import About from "./About";
import { Button } from "react-bootstrap";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";

export default function Home() {
    const navigate=useNavigate();
    const location=useLocation();
    const goDetail=()=>{
    navigate("home-details")
     }
  return (
    <>
      <h2 style={{backgroundImage:`url("./src/assets/pexels-james-wheeler-414612.jpg")`, height: "400px", backgroundPosition:"center",backgroundSize:"cover"}}></h2>
      {/* <Link to="home-details">View Home Details</Link> */}
      <Link to="details/101">View Details for ID 101</Link><br/>
      <Link to="details/102">View Details for ID 102</Link><br/>
      <Button onClick={goDetail}>View Home-Details</Button>
      <p>Current URL:{location.pathname}</p> 
      <Outlet/>
      <About/>
      <Contact/>
    </>
  );
}

