import React from 'react';
import CommonLayout from '../../components/shop/common-layout'
import GridTwoPage from './common/grid-2-page';
import { withApollo } from '../../helpers/apollo/apollo';

const GridThree = () => {
    return (
        <CommonLayout parent="home" title="Portfolio">
            <GridTwoPage colClass="col-lg-4 col-sm-6" limit='9' />
        </CommonLayout>
    )
}

export default withApollo(GridThree);