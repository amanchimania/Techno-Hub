import { Card, CardDeck } from "react-bootstrap";
import card5 from "../Images/card5.jpg"
import "../styles.css"

const Details = () => {
    return (
        <div id="app" className="grid">
            <div style={{ height: "500px", width: "500px" }}>
                <span style={{ position: "relative", top: "250px" }}>We're committed to your complete satisfaction with our service. If you're not 100% happy, we'll do whatever it takes to make it right.</span>
            </div>
            <a href="#"> <img src={card5} style={{ height: "500px", width: "500px" }} alt="" /></a>

        </div>
    );
};
export default Details;
