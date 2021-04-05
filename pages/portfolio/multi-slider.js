import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { withApollo } from '../../helpers/apollo/apollo';
import ProductSlider from '../../components/common/Collections/Collection9';
import BagProductSlider from '../../components/common/Collections/Collection8';

const MultiSlider = () => {
    return (
        <CommonLayout parent="home" title="elements" subTitle="multi-slider">
           <ProductSlider type="shoes" />
           <div className="section-b-space">
            <BagProductSlider type="bags" />
           </div>
        </CommonLayout>
    )
}

export default withApollo(MultiSlider);