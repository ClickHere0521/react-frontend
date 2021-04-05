import React, { useEffect } from "react";
import HeaderTwo from '../../../components/headers/header-two'
import Banner from './components/Banner'
import Category from './components/Category';
import AboutUs from './components/About-us';
import Collections from './components/Collections';
import CategoryTwo from './components/Category-two';
import SpecialProducts from '../../../components/common/Collections/Collection3';
import { withApollo } from '../../../helpers/apollo/apollo';
import ProductBox from '../../../components/common/Collections/TabCollection2';
import ProductSlider from '../../../components/common/Collections/Collection9';
import CategoryThree from './components/Category-three';
import Blog from '../../../components/common/Blog/blog1';
import ServiceLayout from '../../../components/common/Service/service1';
import Instagram from '../../../components/common/instagram/instagram2';
import LogoBlock from '../../../components/common/logo-block';
import FooterFive from '../../../components/footers/footer-five';
import { Product4 } from '../../../services/script';
import ModalComponent from '../../../components/common/Modal';
import Helmet from 'react-helmet';
import favicon from '../../../public/assets/images/favicon/10.png';


const Shoes = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#f7869b');
    })
    return (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
        </Helmet>
        <ModalComponent />
        <HeaderTwo logoName={'logo/6.png'} direction="bottom" topClass="top-header top-header-dark" />
        <Banner />
        <Category />
        <AboutUs />
        <Collections />
        <SpecialProducts type="shoes" line={true} innerClass="title3" inner="title-inner3" title="our Collections" subtitle="special offer" designClass="section-b-space p-t-0 ratio_asos" productSlider={Product4} noSlider="true" cartClass="cart-info" />
        <CategoryTwo />
        <ProductSlider type="shoes" />
        <div className="section-b-space">
        <CategoryThree />
        </div>
        <ProductBox type="shoes" noTitle={true} designClass="section-b-space p-t-0 ratio_asos" productSlider={Product4} noSlider="true" cartClass="cart-info" />
        <Blog type="shoes" sectionClass="blog blog-bg section-b-space ratio2_3" inner="title-inner3" title="title3" />
        <ServiceLayout sectionClass={"service border-section small-section border-top-0"}  />
        <section className="instagram ratio_square">
        <Instagram type="shoes" />
        </section>
        <div className="section-b-space">
            <LogoBlock />
        </div>
        <FooterFive logoName={'logo/6.png'}  layoutClass="black-subfooter" />
    </>
    )
}
export default withApollo(Shoes);