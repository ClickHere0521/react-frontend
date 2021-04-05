import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import MasonryTwoPage from './common/masonry-2';
import { withApollo } from '../../helpers/apollo/apollo'

const MasonryGridTwo = () => {
    return (
        <CommonLayout parent="home" title="Portfolio">
            <MasonryTwoPage grid={2} colClass="col-lg-6" />
        </CommonLayout>
    )
}

export default withApollo(MasonryGridTwo);
