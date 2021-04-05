import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import ProductSection from './common/product_section';
import { withApollo } from '../../helpers/apollo/apollo';
import NoSidebarPage from './product/noSidebarPage';

const LeftSidebar = () => {
  const id = "1";
  return (
    <CommonLayout parent="home" title="product">
        <NoSidebarPage pathId="1" />
      <ProductSection />
    </CommonLayout>
  );
}


export default withApollo(LeftSidebar);