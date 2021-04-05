import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { withApollo } from '../../helpers/apollo/apollo';
import ProductTab from './common/product-tab';
import ProductSection from './common/product_section';
import RightImagePage from './product/rightImagePage';

const ThumbnailRight = () => {
    return (
        <CommonLayout parent="home" title="product">
            <RightImagePage />
            <ProductTab />
            <ProductSection />
        </CommonLayout>
    )
}

export default withApollo(ThumbnailRight); 