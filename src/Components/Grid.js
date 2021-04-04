import { Card, CardDeck } from "react-bootstrap";
import "../styles.css"
import card1 from "../Images/card1.jpg";
import card2 from "../Images/card2.jpg";
import card3 from "../Images/card3.jpg";
import card4 from "../Images/card4.jpg";
const Grid = () => {
    return (
        <div id="app" className="grid">
            <a href="#"><img src={card1} style={{ height: "200px", width: "200px" }} alt="" /></a>
            <a href="#"> <img src={card2} style={{ height: "200px", width: "200px" }} alt="" /></a>
            <a href="#"> <img src={card3} style={{ height: "200px", width: "200px" }} alt="" /></a>
            <a href="#"> <img src={card4} style={{ height: "200px", width: "200px" }} alt="" /></a>
        </div>
    );
};
export default Grid;