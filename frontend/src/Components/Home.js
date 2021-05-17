import "../styles.css";
import { useHistory } from "react-router-dom"
import {
  Alert,
  Button
} from "react-bootstrap";
import Grid from "./Grid";
import Foot from "./Foot";
import Details from "./Details";
import Carousal1 from "./Carousal1";
export default function App() {
  const history = useHistory()
  return (
    <div
      className="App"
      style={{
        // backgroundImage: `url(${background})`
        backgroundColor: "#f7f3e9"
      }}
    >
      <br /><br />

      <Carousal1 />

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
          <Button variant="primary" size="lg" onClick={() => history.push('/login')}>
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
