import React,{useState} from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { withApollo } from '../../helpers/apollo/apollo';
import { Container, Row } from 'reactstrap';
import ProductList from './common/productList';
import FilterPage from './common/filter';

const RightSidebar = () => {

    const [sidebarView,setSidebarView] = useState(false)
    const openCloseSidebar = () => {
        if(sidebarView){
            setSidebarView(!sidebarView)
        } else {
            setSidebarView(!sidebarView)
        }
    }
    return (
        <CommonLayout title="collection" parent="home" >
            <section className="section-b-space ratio_asos">
                <div className="collection-wrapper">
                    <Container>
                        <Row>
                            <ProductList colClass="col-xl-3 col-6 col-grid-box" openSidebar={() => openCloseSidebar(sidebarView)} />
                            <FilterPage sm="3"  sidebarView={sidebarView} closeSidebar={() => openCloseSidebar(sidebarView)} />
                        </Row>
                    </Container>
                </div>
            </section>
        </CommonLayout>
    )
}

export default withApollo(RightSidebar);