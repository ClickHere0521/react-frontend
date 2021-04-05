import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import ProductSection from './common/product_section';
import { withApollo } from '../../helpers/apollo/apollo';
import FourImagePage from './product/4_image_page';

const FourImage = () => {

  return (
    <CommonLayout parent="home" title="product">
        <FourImagePage />
      <ProductSection />
    </CommonLayout>
  );
}


export default withApollo(FourImage);