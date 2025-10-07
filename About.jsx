// import React from "react";

// export default function About() {
//   return <h2 style={{ backgroundColor: "yellow",marginTop:"0", height: "150px",width:"50%" }}> About Page</h2>;
// }
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Img1 from './assets/Flower.jpg';
import Img2 from './assets/Car.jpg';
import Img3 from './assets/Potato.png';
import Img4 from './assets/images.jpg';

function CardExample() {
  return (
    <Row className='m-5'>
      <Col lg={3} md={4} sm={12}>
        <Card style={{height:"309px",width:"80%",border:"5px solid black"}}>
          <Card.Img variant="top" src={Img2} />
          <Card.Body>
            <Card.Title>Car</Card.Title>
            <Card.Text className="text-center">Car Image</Card.Text>
            <Button className='float-end me-3 w-75' variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={3} md={4} sm={12}>
        <Card style={{height:"309px", width:"80%",border:"5px solid black"}}>
          <Card.Img variant="top" src={Img2} />
          <Card.Body>
            <Card.Title>Car</Card.Title>
            <Card.Text className="text-center">Car Image</Card.Text>
            <Button className='float-end me-3 w-75' variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={3} md={4} sm={12}>
        <Card style={{height:"309px", width:"80%",border:"5px solid black"}}>
          <Card.Img variant="top" src={Img2} />
          <Card.Body>
            <Card.Title>Car</Card.Title>
            <Card.Text className="text-center">Car Image</Card.Text>
            <Button className='float-end me-3 w-75' variant="primary ">Add to Cart</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={3} md={4} sm={12}>
        <Card style={{height:"309px",width:"80%",border:"5px solid black"}}>
          <Card.Img variant="top" src={Img2} />
          <Card.Body>
            <Card.Title>Car</Card.Title>
            <Card.Text className="text-center">Car Image</Card.Text>
            <Button className='float-end me-3 w-75' variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CardExample;
