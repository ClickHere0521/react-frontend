import React from 'react';
import { Container, Row ,Col} from 'reactstrap';
import CommonLayout from '../../components/shop/common-layout';
import BlogList from './common/blog-list';
import { withApollo } from '../../helpers/apollo/apollo';

const BlogDetail = () => {
    return (
        <CommonLayout parent="home" title="blog">
            <section className="section-b-space blog-page ratio2_3">
                <Container>
                    <Row>
                        <Col>
                            <BlogList />
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default withApollo(BlogDetail);