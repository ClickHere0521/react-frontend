import React from 'react';
import StickyPage from './product/sticky_page';
import CommonLayout from '../../components/shop/common-layout';
import { withApollo } from '../../helpers/apollo/apollo'
import ProductSection from './common/product_section';
import ProductTab from './common/product-tab';

const Sticky = () => {
    return (
        <CommonLayout parent="home" title="product">
            <StickyPage />
            <ProductTab />
            <ProductSection />
        </CommonLayout>
    )
}

export default withApollo(Sticky);