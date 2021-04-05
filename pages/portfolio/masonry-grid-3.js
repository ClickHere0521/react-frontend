import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import MasonryTwoPage from './common/masonry-2';
import { withApollo } from '../../helpers/apollo/apollo'

const MasonryGridThree = () => {
    return (
        <CommonLayout parent="home" title="Portfolio">
            <MasonryTwoPage grid={3} colClass="col-lg-4 col-sm-6" />
        </CommonLayout>
    )
}

export default withApollo(MasonryGridThree);
