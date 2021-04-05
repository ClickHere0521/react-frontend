import React,{useState} from 'react';
import { Row ,Col,Collapse, Card, CardHeader, CardBody } from 'reactstrap';

const AccordianExample = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isDetail, setIsDetail] = useState(true);
    const [isReview, setIsReview] = useState(true);

    const toggleDetail = () => setIsDetail(!isDetail);
    const toggleReview = () => setIsReview(!isReview);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="product-right product-description-box">
            <h2>Women Pink Shirt</h2>
            <div className="rating three-star mb-2"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
            <div className="product-icon mb-3">
                <ul className="product-social">
                    <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://plus.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://rss.com" target="_blank"><i className="fa fa-rss"></i></a></li>
                </ul>
                <form className="d-inline-block">
                    <button className="wishlist-btn"><i className="fa fa-heart" ></i><span className="title-font">Add
                                            To WishList</span></button>
                </form>
            </div>
            <Row className="product-accordion">
                <Col sm="12" >
                    <div className="accordion theme-accordion" id="accordionExample">
                        <Card>
                            <CardHeader className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button"  onClick={toggle}
                                        data-toggle="collapse" data-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">product
                                                        description</button>
                                </h5>
                            </CardHeader>
                            <Collapse isOpen={isOpen} id="collapseOne" className="collapse" aria-labelledby="headingOne"
                                data-parent="#accordionExample">
                                <div className="card-body">
                                    <p>it look like readable English. Many desktop publishing packages
                                    and web page editors now use Lorem Ipsum as their default model
                                    text, and a search for 'lorem ipsum' will uncover many web sites
                                    still in their infancy. Various versions have evolved over the
                                    years,All the Lorem Ipsum generators on the Internet tend to
                                    repeat predefined chunks as necessary, making this the first
                                    true generator on the Internet. It uses a dictionary of over 200
                                    Latin words, combined with a handful of model sentence
                                                        structures</p>
                                    <div className="single-product-tables detail-section">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Febric:</td>
                                                    <td>Chiffon</td>
                                                </tr>
                                                <tr>
                                                    <td>Color:</td>
                                                    <td>Red</td>
                                                </tr>
                                                <tr>
                                                    <td>Material:</td>
                                                    <td>Crepe printed</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Collapse>
                        </Card>
                        <Card className="card">
                            <CardHeader className="card-header" id="headingTwo">
                                <h5 className="mb-0"><button className="btn btn-link collapsed" type="button"
                                    data-toggle="collapse" data-target="#collapseTwo"
                                    aria-expanded="false" onClick={toggleDetail}
                                    aria-controls="collapseTwo">details</button></h5>
                            </CardHeader>
                            <Collapse isOpen={isDetail} id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                data-parent="#accordionExample">
                                <CardBody>
                                    <div className="mt-2 text-center">
                                        <iframe src="https://www.youtube.com/embed/BUWzX78Ye_8"
                                            allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                    </div>
                                </CardBody>
                            </Collapse>
                        </Card>
                        <Card className="card">
                            <CardHeader className="card-header" id="headingThree">
                                <h5 className="mb-0"><button className="btn btn-link collapsed" type="button"
                                    data-toggle="collapse" data-target="#collapseThree"
                                    aria-expanded="false" onClick={toggleReview}
                                    aria-controls="collapseThree">review</button></h5>
                            </CardHeader>
                            <Collapse isOpen={isReview} id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                data-parent="#accordionExample">
                                <CardBody className="card-body">
                                    <p>no reviews yet</p>
                                </CardBody>
                            </Collapse>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AccordianExample;