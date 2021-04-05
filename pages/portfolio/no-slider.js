import React from 'react';
import TopCollection from '../../components/common/Collections/Collection3';
import CommonLayout from '../../components/shop/common-layout';
import {withApollo } from '../../helpers/apollo/apollo'
import { Product7 } from '../../services/script';

const NoSlider = () => {
    return (
        <CommonLayout parent="home" title="Elements" subTitle="no-slider">
           <TopCollection type="fashion" productSlider={Product7} designClass="section-b-space ratio_asos" noSlider={false} cartClass="cart-info cart-wrap" />
        </CommonLayout>       
    )
}

export default withApollo(NoSlider);