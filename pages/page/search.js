import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { Container, Row, Col, Input } from 'reactstrap';
import { withApollo } from '../../helpers/apollo/apollo';

const Search = () => {
    return (
        <CommonLayout parent="home" title="search">
            {/* <!--section start--> */}
            <section className="authentication-page section-b-space">
                <Container>
                    <section className="search-block">
                        <Container>
                            <Row>
                                <Col lg="6" className="offset-lg-3">
                                    <form className="form-header">
                                        <div className="input-group">
                                            <Input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"
                                                placeholder="Search Products......" />
                                            <div className="input-group-append">
                                                <button className="btn btn-solid"><i className="fa fa-search"></i>Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </Container>
            </section>
            {/* <!-- section end --> */}

        </CommonLayout>
    )
}

export default withApollo(Search);