import React from 'react';
import CommonLayout from '../../components/shop/common-layout'
import GridTwoPage from './common/grid-2-page';
import { withApollo } from '../../helpers/apollo/apollo';

const GridTwo = () => {
    return (
        <CommonLayout parent="home" title="Portfolio">
            <GridTwoPage colClass="col-sm-6" limit="8" />
        </CommonLayout>
    )
}

export default withApollo(GridTwo);