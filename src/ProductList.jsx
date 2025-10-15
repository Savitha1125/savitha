import { Card, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

import img from './assets/Headset.jpg';
import img1 from './assets/Sunglass.jpg';
import img2 from './assets/Waterbottle.jpg';
import img3 from './assets/Shoes.jpg';

export default function ProductList() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;

  const products = [
    { id: 101, name: "Headset", img: img },
    { id: 102, name: "Sunglass", img: img1 },
    { id: 103, name: "Waterbottle", img: img2 },
    { id: 104, name: "Shoes", img: img3 },
  ];

  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "30px" }}>Our Products</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          padding: "20px",
        }}
      >
        {products.map((p) => (
          <Card key={p.id} style={{ width: "18rem", textAlign: "center" }}>
            <Card.Img variant="top" src={p.img} />
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Link to={`/product/${p.id}`}>
                <Button variant="primary">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
