import React,{Fragment} from 'react';
import { Row, Col ,Container} from "reactstrap";

const AboutSection = () => {
    return (
        <Fragment>
            <section>
                <Container>
                    <Row>
                        <Col lg="8" className="m-auto">
                            <div className="title3">
                                <h2 className="title-inner3">welcome to tool store</h2>
                                <div className="line"></div>
                            </div>
                            <div className="about-text">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}

export default AboutSection;