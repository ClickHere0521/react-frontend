import React from 'react';
import FashionBanner from '../../layouts/Fashion/Components/Collection-Banner';
import ElectronicBanner from '../../layouts/Electronic/Electronic-2/component/collection';
import WatchBanner from '../../layouts/Watch/components/Collection';
import FurnitureBanner from '../../layouts/Marketplace/components/Collections';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

const CollectionBannerPage = () => {
    return (
        <>
            <FashionBanner />
            <ElectronicBanner />
            <WatchBanner />
            <FurnitureBanner />
            <section className="section-b-space element-detail">
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <h5 className="card-header">Classes</h5>
                                <CardBody>
                                    <h5>Add class with collection-banner</h5>
                                    <h5>contain-align - .text-left, .text-center, .text-right</h5>
                                    <h5>contain-position - .p-left, .p-center, .p-right</h5>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CollectionBannerPage;