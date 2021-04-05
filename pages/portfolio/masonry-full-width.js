import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import MasonryTwoPage from './common/masonry-2';
import { withApollo } from '../../helpers/apollo/apollo'

const MasonryGridFullWidth = () => {
    return (
        <CommonLayout parent="home" title="Portfolio">
            <MasonryTwoPage fluid={true} grid={4} colClass="col-lg-3 col-sm-6" />
        </CommonLayout>
    )
}

export default withApollo(MasonryGridFullWidth);
