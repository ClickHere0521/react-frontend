import React, { useEffect } from 'react';
import HeaderTwo from '../../../components/headers/header-two';
import FooterOne from '../../../components/footers/footer-one';
import Banner from './components/Banner';
import CollectionBanner from './components/Collection-Banner';
import { withApollo } from '../../../helpers/apollo/apollo';
import ProductBox from '../../../components/common/Collections/TabCollection4';
import TopCollection from '../../../components/common/Collections/Collection1';
import Blog from '../../../components/common/Blog/blog1';
import ServiceLayout from '../../../components/common/Service/service3';
import Instagram from '../../../components/common/instagram/instagram2';
import ModalComponent from '../../../components/common/Modal';
import Helmet from 'react-helmet';
import favicon from '../../../public/assets/images/favicon/10.png';
import ProductSlider from './components/Collection';
import { Product4 } from '../../../services/script';

const Flowers = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#fa869b');
    })
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
            </Helmet>
            <ModalComponent />
            <HeaderTwo logoName={'logo/6.png'} topClass="top-header" />
            <Banner />
            <CollectionBanner />
            <ProductSlider type="flower" productDetail="text-center" cartClass="cart-box" ProductSlider={Product4} cartClass="cart-box" noSlider="true" />
            <ProductBox type="flower" bgClass="bg-block" title="exclusive bag" subtitle="trend" designClass="section-b-space border-section border-top-0" cartClass="cart-box" noSlider="true" />
            <TopCollection type="flower" productDetail="text-center" line={true} titleClass="title4" innerTitle="title-inner4" title="trending items" designClass="section-b-space" cartClass="cart-box" noSlider="true" />
            <Blog type="beauty" sectionClass="blog flower-bg section-b-space ratio3_2" title="title4" inner="title-inner4" />
            <ServiceLayout />
            <section className="instagram ratio_square section-b-space">
                <Instagram type="flower" />
            </section>
            <FooterOne logoName={'logo/6.png'} />
        </>
    )
}

export default withApollo(Flowers);