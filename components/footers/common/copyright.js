import React, { Fragment } from 'react';
import { Container ,Row ,Col ,Media} from 'reactstrap';
import visa from '../../../public/assets/images/icon/visa.png';
import mastercard from '../../../public/assets/images/icon/mastercard.png';
import paypal from '../../../public/assets/images/icon/paypal.png';
import americanexpress from '../../../public/assets/images/icon/american-express.png';
import discover from '../../../public/assets/images/icon/discover.png';

const CopyRight = ({layout, fluid}) => {
    return (
        <Fragment>
            <div className={`sub-footer ${layout}`}>
                <Container fluid={fluid}>
                    <Row>
                        <Col xl="6" md="6" sm="12">
                            <div className="footer-end">
                                <p><i className="fa fa-copyright" aria-hidden="true"></i> 2020-21 themeforest
                                        powered by pixelstrap</p>
                            </div>
                        </Col>
                        <Col xl="6" md="6" sm="12">
                            <div className="payment-card-bottom">
                                <ul>
                                    <li>
                                        <a href="#"><Media src={visa} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><Media src={mastercard} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><Media src={paypal} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><Media src={americanexpress} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><Media src={discover} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

export default CopyRight;