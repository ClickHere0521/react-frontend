import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { Container, Row, Col, Media } from 'reactstrap';
import aboutus from '../../public/assets/images/about/about_us.jpg';
import avtar from '../../public/assets/images/avtar.jpg';
import two from '../../public/assets/images/2.jpg';
import Slider from 'react-slick';
import { Slider2, Slider4 } from '../../services/script';
import team1 from '../../public/assets/images/team/1.jpg';
import team2 from '../../public/assets/images/team/2.jpg';
import team3 from '../../public/assets/images/team/3.jpg';
import team4 from '../../public/assets/images/team/4.jpg';
import ServiceLayout from '../../components/common/Service/service1.js';

const AboutUs = () => {
    return (
        <>
            <CommonLayout parent="home" title="About-us">

                {/* // <!-- about section start --> */}
                <section className="about-page section-b-space">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="banner-section">
                                    <Media src={aboutus}
                                        className="img-fluid blur-up lazyload" alt="" /></div>
                            </Col>
                            <Col sm="12">
                                <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                    </h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    </p>
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                                demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
                                foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail
                                in their duty through weakness of will, which is the same as saying through shrinking from toil
                                and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our
                                power of choice is untrammelled and when nothing prevents our being able to do what we like
                                best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and
                                owing to the claims of duty or the obligations of business it will frequently occur that
                                pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in
                                these matters to this principle of selection: he rejects pleasures to secure other greater
                        pleasures, or else he endures pains to avoid worse pains.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* <!--Testimonial start--> */}
                <section className="testimonial small-section">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <Slider {...Slider2} className="slide-2 testimonial-slider no-arrow">
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <Media src={avtar} alt="#" />
                                                <h5>Mark Jecno</h5>
                                                <h6>Designer</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>you how all this mistaken idea of denouncing pleasure and praising pain was born
                                                and I will give you a complete account of the system, and expound the actual
                                        teachings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <Media src={two} alt="#" />
                                                <h5>Mark Jecno</h5>
                                                <h6>Designer</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>you how all this mistaken idea of denouncing pleasure and praising pain was born
                                                and I will give you a complete account of the system, and expound the actual
                                        teachings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <Media src={avtar} alt="#" />
                                                <h5>Mark Jecno</h5>
                                                <h6>Designer</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>you how all this mistaken idea of denouncing pleasure and praising pain was born
                                                and I will give you a complete account of the system, and expound the actual
                                        teachings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <Media src={avtar} alt="#" />
                                                <h5>Mark Jecno</h5>
                                                <h6>Designer</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>you how all this mistaken idea of denouncing pleasure and praising pain was born
                                                and I will give you a complete account of the system, and expound the actual
                                        teachings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <Media src={avtar} alt="#" />
                                                <h5>Mark Jecno</h5>
                                                <h6>Designer</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>you how all this mistaken idea of denouncing pleasure and praising pain was born
                                                and I will give you a complete account of the system, and expound the actual
                                        teachings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <Media src={avtar} alt="#" />
                                                <h5>Mark Jecno</h5>
                                                <h6>Designer</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>you how all this mistaken idea of denouncing pleasure and praising pain was born
                                                and I will give you a complete account of the system, and expound the actual
                                        teachings.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* <!--Testimonial ends--> */}

                {/* <!--Team start--> */}
                <section id="team" className="team section-b-space ratio_asos">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <h2>Our Team</h2>
                                <Slider className="team-4" {...Slider4}>
                                    <div>
                                        <div>
                                            <Media src={team1} className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <Media src={team2} className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <Media src={team3} className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <Media src={team4} className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <Media src={team1} className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* <!--Team ends--> */}

                <div className="section-b-space">
                    <ServiceLayout sectionClass={"service border-section small-section"}  />
                </div>
            </CommonLayout>
        </>
    )
}

export default AboutUs;