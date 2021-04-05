import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import CollectionBannerPage from './common/collection-banner';

const CollectionBanner = () => {
    return (
        <CommonLayout parent="home" title="elements" subTitle="banner">
            <CollectionBannerPage />
        </CommonLayout>
    )
}

export default CollectionBanner;