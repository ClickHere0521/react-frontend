import React from "react";
import { Container, Row ,Col ,Media} from "reactstrap";
import service1 from "../../../public/assets/images/icon/service1.png";
import service2 from "../../../public/assets/images/icon/service2.png";
import service3 from "../../../public/assets/images/icon/service3.png";
import service4 from "../../../public/assets/images/icon/service4.png";

const Service = () => {
    return (
        <Container>
            <section className="service section-b-space  border-section border-top-0">
                <Row className="partition4 ">
                    <Col lg="3" md="6" className="service-block1">
                        <Media src={service1} alt="" />
                        <h4>free shipping</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    </Col>
                    <Col lg="3" md="6" className="service-block1 ">
                        <Media src={service2} alt="" />
                        <h4>24 X 7 service</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    </Col>
                    <Col lg="3" md="6" className="service-block1 border border-0">
                        <Media src={service3} alt="" />
                        <h4>festival offer</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    </Col>
                    <Col lg="3" md="6" className="service-block1 border border-0">
                        <Media src={service4} alt="" />
                        <h4>online payment</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    </Col>
                </Row>
            </section>
        </Container>
    )
}

export default Service;