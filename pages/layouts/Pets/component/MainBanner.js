import React from 'react';
import Slider from 'react-slick';
import { Container ,Row ,Col} from 'reactstrap';

const MainBanner = () => {

    return (
        <>
            <title>MultiKart | Pets Store</title>
            <section className="p-0 small-slider">
                <Slider className="slide-1 home-slider">
                    <div>
                        <div className="home home46">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>every pet is different</h4>
                                                <h1>let's shop</h1>
                                                <a href="#" className="btn btn-solid">shop now</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div>
                        <div className="home home45">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>Any thing that pets want</h4>
                                                <h1>save 20%</h1>
                                                <a href="#" className="btn btn-solid">shop now</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Slider>
            </section>
        </>
    );

}

export default MainBanner;