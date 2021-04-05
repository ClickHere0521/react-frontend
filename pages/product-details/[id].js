import React from 'react';
import { useRouter } from 'next/router'
import CommonLayout from '../../components/shop/common-layout';
import ProductSection from './common/product_section';
import { withApollo } from '../../helpers/apollo/apollo';
import LeftSidebarPage from './product/leftSidebarPage';

const LeftSidebar = () => {
  
  const router = useRouter();
  const id = router.query.id;
  
  return (
    <CommonLayout parent="Home" title="Product">
        <LeftSidebarPage pathId={id} />
      <ProductSection />
    </CommonLayout>
  );
}


export default withApollo(LeftSidebar);