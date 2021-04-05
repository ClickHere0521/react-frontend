import React,{Fragment} from 'react';
import { Media, Container, Row, Col } from 'reactstrap';
import kids2 from '../../../../public/assets/images/kids/2.jpg';
import kids1 from '../../../../public/assets/images/kids/1.jpg';

const CollectionBanner = () => {
        return ( 
            <Fragment>
                 {/*collection banner layout*/}
                 <section className="banner-padding absolute-banner pb-0 ratio2_1">
                    <Container className="absolute-bg">
                        <Row className="partition2">
                            <Col md="6">
                                <a href="#">
                                    <div className="collection-banner p-right text-center">
                                        <div>
                                            <Media src={kids2}
                                                 className="img-fluid  bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner">
                                            <div>
                                                <h4>save 30%</h4>
                                                <h2>outfits</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                            <Col md="6">
                                <a href="#">
                                    <div className="collection-banner p-right text-center">
                                        <div>
                                            <Media src={kids1}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>toys</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/*collection banner layout end*/}
            </Fragment>
         );
}
 
export default CollectionBanner;