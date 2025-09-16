import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RowColLayoutColWidthBreakpointExample() {
  return (
    <Container fluid>
      <Row>
        <Col md={6} lg={4} xs={12} className="bg-primary p-5 ">
          <Col sm={8} xs={8}className="item ">
          <Col className='box1'>
          <Col lg={6} md={12} sm={12}className='box2'></Col>
          <Col lg={6} md={12} sm={12} className='box3'></Col>
          <Col lg={6} md={12} sm={12}className='box2'></Col>
          <Col lg={6} md={12} sm={12} className='box3'></Col>
          </Col>
        </Col>
        </Col>
        <Col md={6} lg={4} xs={12} className="bg-secondary p-5">2 of 3</Col>
        <Col md={6} lg={4} xs={12} className="bg-success p-5">3 of 3</Col>
      </Row>
      <Row>
        <Col className="item1">
        <Col md={12} sm={12} className='k1 w-50 bg-light p-3'></Col>
        <Col md={12} sm={12} className='k2 w-50 bg-light p-3'>
        <Col className='k3 bg-danger w-50 h-100 float-end'>
        <Col className='k4 bg-warning w-50 h-75 float-end mt-3 me-3'></Col></Col>

        </Col>
        </Col>
      </Row>
      <Row>
        <Col className='cl'>
        <Col md={12} lg={6} sm={12} className='parent'>
        <Col className='pa1 bg-dark h-50 mt-5 w-25 float-end me-5'></Col></Col>
        <Col md={12} lg={6} sm={12} className='child'></Col>
          </Col>
      </Row>
      
  <Row className="align-items-end order">
    
    <Col xs={12} lg={6} className="or1">
      <Row>
        <Col xs={12} md={6} className="simple bg-success">
        </Col>
        <Col xs={12} md={6} className="simple1">
        </Col>
      </Row>
    </Col>
    <Col xs={12} lg={6} className="or2">
    
    </Col>
  </Row>


    </Container>
  );
}

export default RowColLayoutColWidthBreakpointExample;
  

