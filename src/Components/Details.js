import { Card, CardDeck } from "react-bootstrap";
import card5 from "../Images/card5.jpg"
const Details = () => {
    return (
        <CardDeck>
            <Card>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to
            additional content.{" "}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={card5} />
            </Card>
        </CardDeck>
    );
};
export default Details;
