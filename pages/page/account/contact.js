import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Col, Media, Form, Label, Input } from 'reactstrap';
import Phone from '../../../public/assets/images/icon/phone.png';
import Email from '../../../public/assets/images/icon/email.png';

const Contact = () => {
    return (
        <CommonLayout parent="home" title="Contact">
            <section className="contact-page section-b-space">
                <Container>
                    <Row className="section-b-space">
                        <Col lg="7" className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321"
                                allowFullScreen></iframe>
                        </Col>
                        <Col lg="5">
                            <div className="contact-right">
                                <ul>
                                    <li>
                                        <div className="contact-icon">
                                            <Media src={Phone}
                                                alt="Generic placeholder image" className="m-auto" />
                                            <h6>Contact Us</h6>
                                        </div>
                                        <div className="media-body">
                                            <p>+91 123 - 456 - 7890</p>
                                            <p>+86 163 - 451 - 7894</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-icon"><i className="fa fa-map-marker" aria-hidden="true"></i>
                                            <h6>Address</h6>
                                        </div>
                                        <div className="media-body">
                                            <p>ABC Complex,Near xyz, New York</p>
                                            <p>USA 123456</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-icon">
                                            <Media src={Email}
                                                alt="Generic placeholder image" className="m-auto" />
                                            <h6>Address</h6>
                                        </div>
                                        <div className="media-body">
                                            <p>Support@Shopcart.com</p>
                                            <p>info@shopcart.com</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-icon"><i className="fa fa-fax" aria-hidden="true"></i>
                                            <h6>Fax</h6>
                                        </div>
                                        <div className="media-body">
                                            <p>Support@Shopcart.com</p>
                                            <p>info@shopcart.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <Form className="theme-form">
                                <Row>
                                    <Col md="6">
                                        <Label for="name">First Name</Label>
                                        <Input type="text" className="form-control" id="name" placeholder="Enter Your name"
                                            required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="email">Last Name</Label>
                                        <Input type="text" className="form-control" id="last-name" placeholder="Email" required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="review">Phone number</Label>
                                        <Input type="text" className="form-control" id="review" placeholder="Enter your number"
                                            required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="email">Email</Label>
                                        <Input type="text" className="form-control" id="email" placeholder="Email" required="" />
                                    </Col>
                                    <Col md="12">
                                        <Label for="review">Write Your Message</Label>
                                        <textarea className="form-control" placeholder="Write Your Message"
                                            id="exampleFormControlTextarea1" rows="6"></textarea>
                                    </Col>
                                    <Col md="12">
                                        <button className="btn btn-solid" type="submit">Send Your Message</button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Contact;