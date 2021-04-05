import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { withApollo } from '../../helpers/apollo/apollo';
import SpecialProducts from '../../components/common/Collections/TabCollection1';
import WithSlider from '../../components/common/Collections/TabCollection6';

const Tab = () => {
    return (
        <CommonLayout parent="home" title="Portfolio" subTitle="tab">
            <SpecialProducts heading="without slider" title="title1" inner="title-inner1" type="fashion" designClass="section-b-space ratio_asos" noSlider="true" cartClass="cart-info cart-wrap"  />
            <WithSlider heading="with slider" title="title1" inner="title-inner1" type="fashion" designClass="section-b-space pt-0 ratio_asos" noSlider="true" cartClass="cart-info cart-wrap"  />
        </CommonLayout>
    )
}

export default withApollo(Tab);