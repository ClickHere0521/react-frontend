import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import ProductSection from './common/product_section';
import { withApollo } from '../../helpers/apollo/apollo';
import AccordianPage from './product/accordian_page';

const Accordian = () => {

  return (
    <CommonLayout parent="home" title="product">
      <AccordianPage />
      <ProductSection />
    </CommonLayout>
  );
}


export default withApollo(Accordian);