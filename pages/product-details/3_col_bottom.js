import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import ProductSection from './common/product_section';
import { withApollo } from '../../helpers/apollo/apollo';
import ThreeColBottomPage from './product/3_col_Bottom_page';

const ThreeColBottom = () => {

  return (
    <CommonLayout parent="home" title="product">
      <ThreeColBottomPage />
      <ProductSection />
    </CommonLayout>
  );
}


export default withApollo(ThreeColBottom);