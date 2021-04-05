import React from 'react';
import { Row, Col } from 'reactstrap';

const Category = () => {
    return (
        <div className="container category-button">
            <section className="section-b-space border-section border-bottom-0">
                <Row className="partition1">
                    <Col ><a href="#" className="btn btn-outline btn-block">airbag</a></Col>
                    <Col ><a href="#" className="btn btn-outline btn-block">burn bag</a></Col>
                    <Col ><a href="#" className="btn btn-outline btn-block">briefcase</a></Col>
                    <Col ><a href="#" className="btn btn-outline btn-block">carpet bag</a></Col>
                    <Col ><a href="#" className="btn btn-outline btn-block">money bag</a></Col>
                    <Col ><a href="#" className="btn btn-outline btn-block">tucker bag</a></Col>
                </Row>
            </section>
        </div>
    )
}

export default Category;