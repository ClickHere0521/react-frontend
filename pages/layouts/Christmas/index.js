import React, { Fragment, useEffect } from 'react';
import ModalComponent from '../../../components/common/Modal';
import Helmet from 'react-helmet';
import favicon from '../../../public/assets/images/favicon/1.png';
import HeaderOne from '../../../components/headers/header-one';
import HomeBanner from './Component/Home';
import CollectionBanner from './Component/CollectionBanner';
import TopCollection from '../../../components/common/Collections/Collection3';
import { Product4 } from '../../../services/script';
import { withApollo } from '../../../helpers/apollo/apollo';
import ParallaxBanner from './Component/Parallax';
import SpecialProducts from '../../../components/common/Collections/TabCollection1';
import TabProducts from '../../../components/common/Collections/TabCollection11';
import Section from './Component/Section';
import BlogSection from './Component/Blog';
import Instagram from '../../../components/common/instagram/instagram1';
import LogoBlock from '../../../components/common/logo-block';
import FooterOne from '../../../components/footers/footer-one';

const Christmas = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#ff4c3b');
    })
    return (
        <Fragment>
            <div className="christmas">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
            </Helmet>
            <ModalComponent />
            <HeaderOne logoName={'logo/f5.png'} topClass="top-header" headerClass="header-christmas video-header" />
            <HomeBanner />
            <CollectionBanner />
            <TopCollection innerClass="title1" backImage={true} inner="title-inner1" type="christmas" title="top collection" subtitle="special offer" productSlider={Product4} designClass="product-4 product-christmas section-b-space product-m no-arrow slick-initialized slick-slider" noSlider="true" cartClass="cart-info cart-wrap" />
            <ParallaxBanner />
            <SpecialProducts type="christmas" backImage={true}  line={true} title="title1 section-t-space" heading="exclusive title" inner="title-inner1" designClass="section-b-space product-christmas p-t-0" noSlider="true" cartClass="cart-info cart-wrap" />
            <Section />
            <TabProducts type="christmas" backImage={true} productSlider={Product4} line={true} title="title1 section-t-space margin-add" inner="title-inner1" designClass="section-b-space product-christmas p-t-0" noSlider="true" cartClass="cart-info cart-wrap" />
            <BlogSection type="christmas" />
            <Instagram type="christmas" />
            <div className="section-b-space">
                <LogoBlock />
            </div>
            <FooterOne logoName={'logo/f5.png'} footerClass="footer-christmas bg-size" />
            </div>
        </Fragment>
    )
}

export default withApollo(Christmas);