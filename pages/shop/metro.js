import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { withApollo } from '../../helpers/apollo/apollo';
import { Media, Container, Row, Col } from 'reactstrap';
import menu2 from '../../public/assets/images/mega-menu/2.jpg';
import Products from "../../components/common/Collections/Collection12";

const Metro = () => {
    return (
        <CommonLayout title="collection" parent="home" >
            <section className="">
                <div className="collection-wrapper">
                    <Container>
                        <Row>
                            <Col className="collection-content">
                                <div className="page-main-content">
                                    <div className="top-banner-wrapper">
                                        <a href={null}>
                                            <Media src={menu2} className="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <div className="top-banner-content small-section pb-0">
                                            <h4>fashion</h4>
                                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                                            to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        </div>
                                    </div>
                                    <div className="collection-product-wrapper">
                                        <Products type="metro" col="metro" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </CommonLayout>
    )
}

export default withApollo(Metro);