// export default function Contact(){
//       return <h2 style={{ backgroundColor: "green",marginTop:"0", height: "150px",width:"50%" }}> Contact Page</h2>;
// }
import { Button } from "react-bootstrap";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

export default function Contact() {
  const navigate=useNavigate();
  const location=useLocation();
  const gocontact=()=>{
    navigate("details");
  }

  return (
    <div>
      <h2 className="contact">Contact Page</h2>
      <h4 className="co">This is the parent contact page.</h4>
      {/* <Link className="co" to="details">View Contact Details</Link> */}
      <p>Current-Url:{location.pathname}</p>
      <Button onClick={gocontact}>View Contact Details</Button>
      <Outlet />
    </div>
  );
}
