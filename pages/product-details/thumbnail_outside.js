import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { withApollo } from '../../helpers/apollo/apollo';
import ProductTab from './common/product-tab';
import ProductSection from './common/product_section';
import OutsideImagePage from './product/imageOutsidePage';

const ThumbnailOutside = () => {
    return (
        <CommonLayout parent="home" title="product">
            <OutsideImagePage />
            <ProductTab />
            <ProductSection />
        </CommonLayout>
    )
}

export default withApollo(ThumbnailOutside); 