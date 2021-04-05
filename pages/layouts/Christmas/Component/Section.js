import React from 'react';
import parallax2 from '../../../../public/assets/images/christmas/parallax/2.jpg';
const Section = () => {
    return (
        <section className="p-0 overflow-cls">
        <div className="full-banner feature-banner" style={{backgroundImage: `url('${parallax2}')`, backgroundSize: "cover", backgroundPosition: "center center", display: "block"}}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="feature-text">
                            <h2>SEND GIFT YOUR LOVED ONE</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <ul className="feature-object">
                            <li>
                                <div className="media">
                                    <div className="media-body">
                                        <div>
                                            <h4>Flower</h4>
                                            <p>Fashion Has Been Creating Well-Designed</p>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="../assets/images/christmas/f-p/1.png"
                                        alt="Generic placeholder image" />
                                </div>
                            </li>
                            <li>
                                <div className="media">
                                    <div className="media-body">
                                        <div>
                                            <h4>chocolate</h4>
                                            <p>Fashion Has Been Creating Well-Designed</p>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="../assets/images/christmas/f-p/2.png"
                                        alt="Generic placeholder image" />
                                </div>
                            </li>
                            <li>
                                <div className="media">
                                    <div className="media-body">
                                        <div>
                                            <h4>gift cards</h4>
                                            <p>Fashion Has Been Creating Well-Designed</p>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="../assets/images/christmas/f-p/3.png"
                                        alt="Generic placeholder image" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-sm-6 offset-lg-4">
                        <ul className="feature-object-right">
                            <li>
                                <div className="media">
                                    <img className="img-fluid" src="../assets/images/christmas/f-p/4.png"
                                        alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <div>
                                            <h4>photo frame</h4>
                                            <p>Fashion Has Been Creating Well-Designed</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="media">
                                    <img className="img-fluid" src="../assets/images/christmas/f-p/5.png"
                                        alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <div>
                                            <h4>watches</h4>
                                            <p>Fashion Has Been Creating Well-Designed</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="media">
                                    <img className="img-fluid" src="../assets/images/christmas/f-p/6.png"
                                        alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <div>
                                            <h4>plants</h4>
                                            <p>Fashion Has Been Creating Well-Designed</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="center-img">
                <img src=" ../assets/images/christmas/bg1.png" alt="" className="img-fluid" />
            </div>
            <div className="banner-decor">
                <div className="left-img">
                    <img src="../assets/images/christmas/decor.png" className="img-fluid" alt="" />
                </div>
                <div className="right-img">
                    <img src="../assets/images/christmas/decor.png" className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Section