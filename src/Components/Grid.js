import { Card, CardDeck } from "react-bootstrap";
import card1 from "../Images/card1.jpg";
import card2 from "../Images/card2.jpg";
import card3 from "../Images/card3.jpg";
import card4 from "../Images/card4.jpg";
const Grid = () => {
    return (
        <CardDeck style={{ heigth: "50px !important" }}>
            <Card >
                <Card.Img variant="top" src={card1} />
                <Card.Body>
                    <Card.Title><center>Card title</center></Card.Title>
                </Card.Body>

            </Card>
            <Card>
                <Card.Img variant="top" src={card2} />
                <Card.Body>
                    <Card.Title><center>Card title</center></Card.Title>
                </Card.Body>

            </Card>
            <Card>
                <Card.Img variant="top" src={card3} />
                <Card.Body>
                    <Card.Title><center>Card title</center></Card.Title>
                </Card.Body>

            </Card>
            <Card>
                <Card.Img variant="top" src={card4} />
                <Card.Body>
                    <Card.Title><center>Card title</center></Card.Title>
                </Card.Body>

            </Card>
        </CardDeck>
    );
};
export default Grid;