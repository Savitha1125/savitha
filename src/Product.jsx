
import { useParams, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import img from './assets/Headset.jpg';
import img1 from './assets/Sunglass.jpg';
import img2 from './assets/Waterbottle.jpg';
import img3 from './assets/Shoes.jpg';

const productdata = {
  101: { name:'Headset', img:img, price:'1000', Features:['Hear to song','Nice Product','Black Color'] },
  102: { name:'Sunglass', img:img1, price:'250', Features:['Lightweight','Strong','Hypoallergenic'] },
  103: { name:'Waterbottle', img:img2, price:'500', Features:['Pure Taste','Easy To Clean','Everyday Use'] },
  104: { name:'Shoes', img:img3, price:'1500', Features:['Non-Slip sole','Good Arch Support','Multiple Colour Options'] }
};

export default function Product() {
  const { user } = useAuth();
  const { id } = useParams();
  const product = productdata[id];

  // Redirect to login if user not logged in
  if (!user) return <Navigate to="/login" replace />;

  return (
    <>
      <h3 style={{ textAlign:"center" }}>PRODUCT DETAILS</h3>
      <div style={{ display:"flex", justifyContent:"center", padding:"20px" }}>
        <Card style={{ width:'18rem', textAlign:"center" }}>
          <Card.Img variant="top" src={product.img} />
          <Card.Header>{product.name}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            {product.Features.map((f, i) => (
              <ListGroup.Item key={i}>{f}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
      <p style={{ textAlign:"center" }}>Product ID: {id}</p>
    </>
  );
}
