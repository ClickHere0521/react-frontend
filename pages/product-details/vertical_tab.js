import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import ProductSection from './common/product_section';
import { withApollo } from '../../helpers/apollo/apollo';
import VerticalTabPage from './product/verticalTabPage';

const VerticalTab = () => {
  const id = "1";
  return (
    <CommonLayout parent="home" title="product">
        <VerticalTabPage pathId="1" />
      <ProductSection />
    </CommonLayout>
  );
}


export default withApollo(VerticalTab);