import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { Container, Row ,Col} from 'reactstrap';

const Typography = () => {
    return (
        <CommonLayout parent="home" title="typography">
            <section className="section-b-space typography_section">
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="typography-box">
                                <div className="headings">
                                    <h3>headings</h3>
                                    <span>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are
                                available.</span>
                                </div>
                                <div className="typo-content heading_content">
                                    <h1>h1 heading</h1>
                                    <h2>h2 heading</h2>
                                    <h3>h3 heading</h3>
                                    <h4>h4 heading</h4>
                                    <h5>h5 heading</h5>
                                    <h6>h6 heading</h6>
                                </div>
                            </div>
                            <div className="typography-box">
                                <div className="headings">
                                    <h3>Text Color</h3>
                                    <span>You can Give text color by using txt-* class</span>
                                </div>
                                <div className="typo-content">
                                    <p className="text-primary">This is Primary text You can archive this adding
                                <code>.text-primary</code> class</p>
                                    <p className="text-secondary">This is Secondary text You can archive this adding
                                <code>.text-secondary</code> class</p>
                                    <p className="text-success">This is Success text You can archive this adding
                                <code>.text-success</code> class</p>
                                    <p className="text-info">This is Info text You can archive this adding <code>.text-info</code>
                                class</p>
                                    <p className="text-warning">This is Warning text You can archive this adding
                                <code>.text-warning</code> class</p>
                                    <p className="text-danger">This is Danger text You can archive this adding
                                <code>.text-danger</code> class</p>
                                    <p className="text-dark">This is Dark text You can archive this adding <code>.text-dark</code>
                                class</p>
                                    <p className="text-muted">This is Primary text You can archive this adding
                                <code>.text-muted</code> class</p>
                                </div>
                            </div>
                            <div className="typography-box">
                                <div className="headings">
                                    <h3>Text Color</h3>
                                    <span>You can Give text color by using txt-* class</span>
                                </div>
                                <div className="typo-content product-pagination">
                                    <ul className="pagination">
                                        <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><span
                                            aria-hidden="true"><i className="fa fa-chevron-left"
                                                aria-hidden="true"></i></span> <span className="sr-only">Previous</span></a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span
                                            aria-hidden="true"><i className="fa fa-chevron-right"
                                                aria-hidden="true"></i></span> <span className="sr-only">Next</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="typography-box">
                                <div className="headings">
                                    <h3>Text Color</h3>
                                    <span>You can Give text color by using txt-* class</span>
                                </div>
                                <div className="typo-content">
                                    <form>
                                        <div className="form-row">
                                            <div className="col-12 mb-3">
                                                <label htmlFor="name">First Name</label>
                                                <input type="text" className="form-control" id="name" placeholder="Enter Your name"
                                                    required="" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="email">Email</label>
                                                <input type="text" className="form-control" id="email" placeholder="Email"
                                                    required="" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label>Write Your Message</label>
                                                <textarea className="form-control" placeholder="Write Your Message"
                                                    id="exampleFormControlTextarea1" rows="5"></textarea>
                                            </div>
                                        </div>
                                        <div className="row">

                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="typography-box">
                                <div className="headings">
                                    <h3>Alignment</h3>
                                    <span>Use text utilities as needed to change the alignment of your blockquote.</span>
                                </div>
                                <div className="typo-content">
                                    <p className="text-left">This is a left aligned text .text-left</p>
                                    <p className="text-center">This is a center aligned text .text-center</p>
                                    <p className="text-right">This is a right aligned text .text-right</p>
                                </div>
                            </div>
                            <div className="typography-box">
                                <div className="headings">
                                    <h3>loader</h3>
                                </div>
                                <div className="typo-content loader-typo">
                                    <div className="pre-loader"></div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="typography-box ">
                                <div className="headings">
                                    <h3>buttons</h3>
                                    <span>Styling for common inline HTML5 elements.</span>
                                </div>
                                <div className="typo-content typo-buttons">
                                    <a href="#" className="btn btn-solid mr-3">button</a>
                                    <a href="#" className="btn btn-outline mr-3">button</a>
                                    <a href="#" className="btn btn-solid black-btn mr-3">button</a>
                                    <a href="#" className="btn btn-solid btn-sm">button</a>
                                </div>
                            </div>
                            <div className="typography-box">
                                <div className="headings">
                                    <h3>Inline text elements</h3>
                                    <span>Styling for common inline HTML5 elements.</span>
                                </div>
                                <div className="typo-content">
                                    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                                    <p><del>This line of text is meant to be treated as deleted text.</del></p>
                                    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                                    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                                    <p><u>This line of text will render as underlined</u></p>
                                    <p><small>This line of text is meant to be treated as fine print.</small></p>
                                    <p><strong>This line rendered as bold text.</strong></p>
                                    <p><em>This line rendered as italicized text.</em></p>
                                </div>
                            </div>
                            <div className="typography-box">
                                <div className="headings">
                                    <h3>lists</h3>
                                    <span>Styling for common inline HTML5 elements.</span>
                                </div>
                                <div className="typo-content">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h6 className="sub-title">Unorder list</h6>
                                            <ul>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <h6 className="sub-title">order list</h6>
                                            <ol>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                            </ol>
                                        </div>
                                        <div className="col-sm-6">
                                            <h6 className="sub-title">order list</h6>
                                            <dl>
                                                <dt>Lorem ipsum dolor sit amet</dt>
                                                <dd>- ipsum dolor sit amet</dd>
                                                <dt>Lorem ipsum dolor sit amet</dt>
                                                <dd>- ipsum dolor sit amet</dd>
                                                <dt>Lorem ipsum dolor sit amet</dt>
                                                <dd>- ipsum dolor sit amet</dd>
                                            </dl>
                                        </div>
                                        <div className="col-sm-6">
                                            <h6 className="sub-title">order list</h6>
                                            <ul>
                                                <li><i className="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet</li>
                                                <li><i className="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet</li>
                                                <li><i className="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet</li>
                                                <li><i className="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet</li>
                                                <li><i className="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet</li>
                                                <li><i className="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet</li>
                                                <li><i className="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="typography-box">
                                <div className="headings">
                                    <h3>lists</h3>
                                    <span>Styling for common inline HTML5 elements.</span>
                                </div>
                                <div className="typo-content input_button">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <form>
                                                <div>
                                                    <input type="radio" name="gender" id="one" value="male" />
                                                    <label htmlFor="one">radio button1</label>
                                                </div>
                                                <div>
                                                    <input type="radio" name="gender" id="two" value="male" />
                                                    <label htmlFor="two">radio button2</label>
                                                </div>
                                                <div>
                                                    <input type="radio" name="gender" id="three" value="male" />
                                                    <label htmlFor="three">radio button3</label>
                                                </div>
                                                <div>
                                                    <input type="radio" name="gender" id="four" value="male" />
                                                    <label htmlFor="four">radio button4</label>
                                                </div>
                                                <div>
                                                    <input type="radio" name="gender" id="five" value="male" />
                                                    <label htmlFor="five">radio button5</label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-sm-6">
                                            <form>
                                                <div>
                                                    <input type="checkbox" name="gender" id="six" value="male" />
                                                    <label htmlFor="six">checkbox button1</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" name="gender" id="seven" value="male" />
                                                    <label htmlFor="seven">checkbox button2</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" name="gender" id="eight" value="male" />
                                                    <label htmlFor="eight">checkbox button3</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" name="gender" id="nine" value="male" />
                                                    <label htmlFor="nine">checkbox button4</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" name="gender" id="ten" value="male" />
                                                    <label htmlFor="ten">checkbox button5</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="typography-box">
                                <div className="headings">
                                    <h3>Naming a source</h3>
                                    <span>Add a <code className="highlighter-rouge">&lt;footer className="blockquote-footer"&gt;</code>
                                for identifying the source. Wrap the name of the source work in <code
                                            className="highlighter-rouge">&lt;cite&gt;</code>.</span>
                                </div>
                                <div className="typo-content">
                                    <blockquote className="blockquote">
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.</p>
                                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source
                                        Title</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="typography-box">
                                <div className="headings">
                                    <h3>social icons</h3>
                                </div>
                                <div className="typo-content">
                                    <div className="footer-social">
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://plus.google.com" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://rss.com" target="_blank"><i className="fa fa-rss" aria-hidden="true"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </CommonLayout>
    )
}

export default Typography;