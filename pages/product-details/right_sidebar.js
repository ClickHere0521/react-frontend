import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import ProductSection from './common/product_section';
import { withApollo } from '../../helpers/apollo/apollo';
import RightSidebarPage from './product/rightSidebarPage';

const LeftSidebar = () => {

  return (
    <CommonLayout parent="home" title="product">
        <RightSidebarPage />
      <ProductSection />
    </CommonLayout>
  );
}


export default withApollo(LeftSidebar);