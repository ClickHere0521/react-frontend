import React from 'react';
import { Container, Row ,Col } from 'reactstrap';
import CommonLayout from '../../components/shop/common-layout';
import BlogList from './common/blog-list';
import BlogSidebar from './common/blog-sidebar';
import { withApollo } from '../../helpers/apollo/apollo';

const blogLeftSidebar = () => {
    return (
        <CommonLayout parent="blog" title="blog left sidebar" >
            <section className="section-b-space blog-page ratio2_3">
                <Container>
                    <Row>
                        <BlogSidebar />
                        <Col xl="9" md="7" lg="8" className="order-sec">
                            <BlogList />
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default withApollo(blogLeftSidebar);