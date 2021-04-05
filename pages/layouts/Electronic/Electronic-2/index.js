import React, { Fragment, useEffect } from 'react';
import HeaderFour from '../../../../components/headers/header-four';
import { withApollo } from '../../../../helpers/apollo/apollo';
import Collection from './component/collection';
import HomeBanner from './component/home-banner';
import SpecialProducts from '../../../../components/common/Collections/TabCollection1';
import { Product4 } from '../../../../services/script';
import FooterOne from '../../../../components/footers/footer-one';
import ThemeSettings from '../../../../components/customizer/theme-settings'
import ModalComponent from '../../../../components/common/Modal';
import Helmet from 'react-helmet';
import favicon from '../../../../public/assets/images/favicon/9.png';

const Electronic2 = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#6d7e87');
    })
    return (
        <Fragment>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
            </Helmet>
            <ModalComponent />
            <HeaderFour hfluid={false} logoName={'logo/8.png'} topClass="top-header top-header-dark2" />
            <div className="container-fluid layout-8">
                
                <title>MultiKart | Electronic Store</title>
                
                <HomeBanner />
                <Collection />
                <div className="section-b-space">
                <SpecialProducts backImage={true} type={'electronics'} title="title2" noTitle={true} productSlider={Product4} noSlider="true" cartClass="cart-detail" />
                </div>

            </div>
            <div className="footer-white light-layout-imp">
                <FooterOne logoName={'logo/8.png'} />
            </div>
            <ThemeSettings />
        </Fragment>

    );
}

export default withApollo(Electronic2);