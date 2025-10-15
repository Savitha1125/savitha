
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useAccess } from './AccessContext';

function BasicExample() {
  const { AccessService } = useAccess();
  const location = useLocation();

  const isServiceEnabled = AccessService || location.pathname === "/service";

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Our Products</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link
              className={`nav-link ${!isServiceEnabled ? "text-muted" : ""}`}
              to={isServiceEnabled ? "/service" : location.pathname}
              style={{ pointerEvents: isServiceEnabled ? "auto" : "none" }}
            >
              Service Us
            </Link>
            <Link className="nav-link" to="/blog">Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
