import "../styles.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Carousel,
  Alert,
  Button
} from "react-bootstrap";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import background from "../Images/background.jpg";
import logo from "../Images/logo.png";
import c1 from "../Images/c1.jpg";
import c2 from "../Images/c2.jpg";
import c3 from "../Images/c3.jpg";
import Grid from "./Grid";
import Foot from "./Foot";
import Details from "./Details";
import Partners from "./Partners"
export default function App() {
  let style1 = {
    justifyContent: "space-evenly",
    color: "red"
  };
  return (
    <div
      className="App"
      style={{
        // backgroundImage: `url(${background})`
        backgroundColor: "#f7f3e9"
      }}
    >
      <br /><br />
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={c2} alt="First slide" />
          <Carousel.Caption>
            <h3>Windows Update </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={c1} alt="Second slide" />

          <Carousel.Caption>
            <h3>Laptop Servicing</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={c3} alt="Third slide" />

          <Carousel.Caption>
            <h3>CCTV Installation</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br /><br />
      <h1 className="product-header">
        <b>
          <center>Products</center>
        </b>
      </h1>
      <div>
        <br /><br />
        <Grid />
      </div>
      <br /><br />
      <Alert variant="success">
        <center>
          Ready to get Started!{" "}
          <Button variant="primary" size="lg">
            Book a Service
          </Button>{" "}
        </center>
      </Alert>
      <br /><br />
      <Details />
      <br /><br />
      <Foot />
    </div>
  );
}
