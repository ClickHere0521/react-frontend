import React from 'react';
import { useRouter } from 'next/router'
import CommonLayout from '../../components/shop/common-layout';
import ProductSection from './common/product_section';
import { withApollo } from '../../helpers/apollo/apollo';
import ThreeColLeftPage from './product/3_col_left_page';

const ThreeColLeft = () => {

  return (
    <CommonLayout parent="home" title="product">
        <ThreeColLeftPage />
      <ProductSection />
    </CommonLayout>
  );
}


export default withApollo(ThreeColLeft);