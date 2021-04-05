import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import two from '../../public/assets/images/2.jpg';
import avtar from '../../public/assets/images/avtar.jpg';
import twenty from '../../public/assets/images/20.jpg';
import { Container, Row ,Col, Media } from 'reactstrap';

const Review = () => {
    return (
        <CommonLayout parent="home" title="review">
            <section className="section-b-space blog-detail-page review-page">
                <Container>
                    <Row>
                        <Col sm="12">
                            <ul className="comment-section">
                                <li>
                                    <div className="media"><Media src={avtar} alt="Generic placeholder image" />
                                        <div className="media-body">
                                            <h6>Mark Jecno <span>( 12 Jannuary 2018 at 1:30AM )</span></h6>
                                            <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis
                                            fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer
                                            faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique
                                            odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat
                                            lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus
                                            sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis
                                        erat tempor quis. Vestibulum eu vestibulum ex.</p>
                                            <ul className="comnt-sec">
                                                <li><a href="#"><i className="fa fa-thumbs-o-up"
                                                    aria-hidden="true"></i><span>(14)</span></a></li>
                                                <li><a href="#">
                                                    <div className="unlike"><i className="fa fa-thumbs-o-down"
                                                        aria-hidden="true"></i>(2)</div>
                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media"><Media src={two} alt="Generic placeholder image" />
                                        <div className="media-body">
                                            <h6>Mark Jecno <span>( 12 Jannuary 2018 at 1:30AM )</span></h6>
                                            <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis
                                            fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer
                                            faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique
                                            odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat
                                            lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus
                                            sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis
                                        erat tempor quis. Vestibulum eu vestibulum ex.</p>
                                            <ul className="comnt-sec">
                                                <li><a href="#"><i className="fa fa-thumbs-o-up"
                                                    aria-hidden="true"></i><span>(14)</span></a></li>
                                                <li><a href="#">
                                                    <div className="unlike"><i className="fa fa-thumbs-o-down"
                                                        aria-hidden="true"></i>(2)</div>
                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media"><Media src={twenty} alt="Generic placeholder image" />
                                        <div className="media-body">
                                            <h6>Mark Jecno <span>( 12 Jannuary 2018 at 1:30AM )</span></h6>
                                            <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis
                                            fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer
                                            faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique
                                            odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat
                                            lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus
                                            sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis
                                        erat tempor quis. Vestibulum eu vestibulum ex.</p>
                                            <ul className="comnt-sec">
                                                <li><a href="#"><i className="fa fa-thumbs-o-up"
                                                    aria-hidden="true"></i><span>(14)</span></a></li>
                                                <li><a href="#">
                                                    <div className="unlike"><i className="fa fa-thumbs-o-down"
                                                        aria-hidden="true"></i>(2)</div>
                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media"><Media src={avtar} alt="Generic placeholder image" />
                                        <div className="media-body">
                                            <h6>Mark Jecno <span>( 12 Jannuary 2018 at 1:30AM )</span></h6>
                                            <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis
                                            fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer
                                            faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique
                                            odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat
                                            lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus
                                            sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis
                                        erat tempor quis. Vestibulum eu vestibulum ex.</p>
                                            <ul className="comnt-sec">
                                                <li><a href="#"><i className="fa fa-thumbs-o-up"
                                                    aria-hidden="true"></i><span>(14)</span></a></li>
                                                <li><a href="#">
                                                    <div className="unlike"><i className="fa fa-thumbs-o-down"
                                                        aria-hidden="true"></i>(2)</div>
                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media"><Media src={two} alt="Generic placeholder image" />
                                        <div className="media-body">
                                            <h6>Mark Jecno <span>( 12 Jannuary 2018 at 1:30AM )</span></h6>
                                            <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis
                                            fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer
                                            faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique
                                            odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat
                                            lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus
                                            sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis
                                        erat tempor quis. Vestibulum eu vestibulum ex.</p>
                                            <ul className="comnt-sec">
                                                <li><a href="#"><i className="fa fa-thumbs-o-up"
                                                    aria-hidden="true"></i><span>(14)</span></a></li>
                                                <li><a href="#">
                                                    <div className="unlike"><i className="fa fa-thumbs-o-down"
                                                        aria-hidden="true"></i>(2)</div>
                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Review;