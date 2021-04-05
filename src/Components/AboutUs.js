import Foot from "./Foot";
import { Card, Button } from "react-bootstrap";
import Aman from "../Images/Aman.jpg"
const AboutUs = () => {
    return (
        <><br /><br />
            <Card>
                <Card.Header>About Us</Card.Header>
                <Card.Body>
                    <img src={Aman}></img>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
       We believe more in work to be done, then promising it. {' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Aman Chimania</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <Foot />
        </>
    );
};
export default AboutUs;
