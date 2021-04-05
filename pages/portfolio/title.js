import React from 'react';
import CommonLayout from '../../components/shop/common-layout'
import TitlePage from './common/title-page';

const Title = () => {
    return (
        <CommonLayout parent="home" title="elements" subTitle="title">
            <TitlePage />
        </CommonLayout>
    )
}

export default Title;