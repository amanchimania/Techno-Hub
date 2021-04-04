import "../styles.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Carousel,
  Alert,
  Button
} from "react-bootstrap";
import imgg from "../Aman.jpg";
import background from "../background.jpg";
import logo from "../logo.png";
import c1 from "../c1.jpg";
import c2 from "../c2.jpg";
import c3 from "../c3.jpg";
import Grid from "./Grid";
import Foot from "./Foot";
import Details from "./Details";
export default function App() {
  let style1 = {
    justifyContent: "space-evenly",
    color: "red"
  };
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <Navbar
        className="header"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <img src={logo} style={{ height: "40px", width: "40px" }}></img>{" "}
        &nbsp;&nbsp;&nbsp;
        <Navbar.Brand href="#home">Techno Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#partners">Partners</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Software Solutions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Hardware Solutions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Device Installation
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={c2} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={c1} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={c3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1 className="product-header">
        <b>
          <center>Products</center>
        </b>
      </h1>
      <div>
        <Grid style={{ style1 }} />
      </div>
      <Alert variant="success">
        <center>
          Ready to get Started!{" "}
          <Button variant="primary" size="lg">
            Book a Service
          </Button>{" "}
        </center>
      </Alert>
      <Details />
      <Foot />
    </div>
  );
}
