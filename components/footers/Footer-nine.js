import React from 'react';
import { Container, Row ,Col} from 'reactstrap';


const FooterNine = () => {
    return (
        <footer className="full-scroll-footer">
            <div className="sub-footer">
                <Container fluid={true}>
                    <Row>
                        <Col xl="6" md="6" sm="12">
                            <div className="footer-end">
                                <p><i className="fa fa-copyright" aria-hidden="true"></i> 2017-18 themeforest powered by
                                pixelstrap</p>
                            </div>
                        </Col>
                        <Col xl="6" md="6" sm="12">
                            <div className="payment-card-bottom text-right">
                                <p>Contact us: 123 456 7890</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default FooterNine;