import { Card, CardDeck } from "react-bootstrap";
export default Details = () => {
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
                <Card.Img variant="top" src="holder.js/100px160" />
            </Card>
        </CardDeck>
    );
};
