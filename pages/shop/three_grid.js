import React,{useState} from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { withApollo } from '../../helpers/apollo/apollo';
import { Row, Container } from 'reactstrap';
import ProductList from './common/productList';
import FilterPage from './common/filter';

const ThreeGrid = () => {

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
            <section className="section-b-space">
            <Container>
                <Row>
                  <ProductList colClass="col-lg-4 col-6 col-grid-box" layoutList='' noSidebar={true} />
                </Row>
            </Container>
            </section>
        </CommonLayout>
    )
}

export default withApollo(ThreeGrid);