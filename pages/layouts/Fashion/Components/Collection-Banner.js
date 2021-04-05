import React, { Fragment } from 'react';
import Link from 'next/link'
import { Container, Row, Col , Media} from 'reactstrap';
import banner1 from '../../../../public/assets/images/sub-banner1.jpg';
import banner2 from '../../../../public/assets/images/sub-banner2.jpg';

const CollectionBanner = () => {
    return (
        <Fragment>

            {/*collection banner*/}
            <section className="pb-0">
                <Container>
                    <Row className="partition2">
                        <Col md='6'>
                            <Link href={`/left-sidebar/collection`}>
                                <a><div className="collection-banner p-right text-center">
                                    <Media src={banner1} className="img-fluid" alt="" />
                                    <div className="contain-banner">
                                        <div>
                                            <h4>save 30%</h4>
                                            <h2>men</h2>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </Link>
                        </Col>
                        <Col md='6'>
                            <Link href={`/left-sidebar/collection`}>
                                <a>
                                    <div className="collection-banner p-right text-center">
                                        <Media src={banner2} className="img-fluid" alt="" />
                                        <div className="contain-banner">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>women</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*collection banner end*/}
        </Fragment>
    );
}

export default CollectionBanner;