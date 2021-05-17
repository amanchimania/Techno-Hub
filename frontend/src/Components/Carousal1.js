import React from 'react'
import c1 from "../Images/c1.jpg";
import c2 from "../Images/c2.jpg";
import c3 from "../Images/c3.jpg";
import { Carousel } from "react-bootstrap"
function Carousal1() {
    return (
        <>
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
        </>
    )
}

export default Carousal1;
