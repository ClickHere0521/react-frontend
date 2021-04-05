import React, { Fragment, useEffect } from 'react';
import { withApollo } from '../../../helpers/apollo/apollo';
import HeaderOne from '../../../components/headers/header-one';
import FooterOne from '../../../components/footers/footer-six';
import Banner from './common/Banner';
import SpecialProducts from '../../../components/common/Collections/TabCollection6';
import Category from './common/Category';
import ParallaxBanner from './common/ParallaxBanner';
import ServiceLayout from '../../../components/common/Service/service3';
import ProductSlider from '../../../components/common/Collections/Collection8';
import CategoryTwo from './common/Category-2';
import TopCollection from '../../../components/common/Collections/Collection3';
import Blog from '../../../components/common/Blog/blog1';
import Instagram from '../../../components/common/instagram/instagram1';
import { Product4 } from '../../../services/script';
import ModalComponent from '../../../components/common/Modal';
import Helmet from 'react-helmet';
import favicon from '../../../public/assets/images/favicon/3.png';

const Bags = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#f0b54d');
    })
    
    return (
        <Fragment>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
            </Helmet>
            <div className="bg-white">
                <ModalComponent />
                <HeaderOne logoName={'layout3/logo.png'} direction="top" topClass="top-header top-header-dark2" />
                <Banner />
                <div className="section-b-space">
                    <SpecialProducts type="bags" ProductSlider={Product4} designClass="ratio_square" cartClass="cart-detail" noSlider="true" />
                </div>
                <Category />
                <ParallaxBanner />
                <ProductSlider type="bags" title="Product style 2" ProductSlider={Product4} designClass="bag-product ratio_square" cartClass="cart-detail" noSlider="true" />
                <div className="service section-b-space">
                    <ServiceLayout />
                </div>
                <CategoryTwo />
                <TopCollection type="bags" title="Top Collection" subtitle="special offer" productSlider={Product4} designClass="ratio_asos" noSlider="true" cartClass="cart-detail" inner="title-inner1" innerClass="title1" />
                <Blog type="bags" sectionClass="blog ratio3_2" inner="title-inner1" title="title1" />
                <Instagram type="bags" />
                <FooterOne logoName={'layout3/footerlogo.png'} layoutClass="darker-subfooter" />
            </div>
        </Fragment>
    )
}

export default withApollo(Bags);