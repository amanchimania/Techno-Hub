import "./styles.css";
import { Nav, Navbar, NavDropdown, Carousel } from "react-bootstrap";
import imgg from "./Aman.jpg";
import Grid from "./Grid";
import Foot from "./Foot";
import Details from "./Details";
export default function App() {
  let style1 = {
    justifyContent: "space-evenly",
    color: "red"
  };
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Techno Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Partners</Nav.Link>
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
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={imgg} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imgg} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imgg} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1>
        <b>Products</b>
      </h1>
      <div style={{ display: " flex ", color: "red" }}>
        <Grid style={{ style1 }} />
      </div>
      <Details />
      <Foot />
    </div>
  );
}
