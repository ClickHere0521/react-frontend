import React from 'react';
import TopCollection from '../../components/common/Collections/Collection3';
import CommonLayout from '../../components/shop/common-layout';
import {withApollo } from '../../helpers/apollo/apollo'
import { Product4 } from '../../services/script';

const ProductSlider = () => {
    return (
        <CommonLayout parent="home" title="Elements" subTitle="product-slider">
           <TopCollection type="fashion" productSlider={Product4} designClass="section-b-space ratio_asos" noSlider="true" cartClass="cart-info cart-wrap" />
        </CommonLayout>       
    )
}

export default withApollo(ProductSlider);