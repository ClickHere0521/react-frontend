import React,{useState} from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { withApollo } from '../../helpers/apollo/apollo';
import Popupsidebr from './common/Popupsidebr';
import { Container, Row} from 'reactstrap';

const SidebarPopup = () => {
    return (
        <CommonLayout title="collection" parent="home" >
            <section className="section-b-space ratio_asos">
                <div className="collection-wrapper">
                    <Container>
                        <Row>
                            <Popupsidebr colClass="col-xl-3 col-6 col-grid-box"/>
                        </Row>
                    </Container>
                </div>
            </section>
        </CommonLayout>
    )
}

export default withApollo(SidebarPopup);