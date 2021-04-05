import React from 'react';
import ModalComponent from '../../../components/common/Modal';
import HeaderTen from '../../../components/headers/Header-ten';
import Collection from './Component/Collection';
import CollectionTwo from './Component/Collection2';
import HomeSlider from './Component/Home';
import SpecialProducts from '../../../components/common/Collections/TabCollection1';
import ProductSlider from '../../../components/common/Collections/Collection9';
import { withApollo } from '../../../helpers/apollo/apollo';
import { Product4 } from '../../../services/script';
import ParallaxBanner from './Component/Parallax';
import Instagram from '../../../components/common/instagram/instagram1';
import FooterFive from '../../../components/footers/footer-six';

const Fashion2 = () => {
    return (
        <>
            <ModalComponent />
            <HeaderTen logoName={'logo/12.png'} topClass="top-header-dark2" />
            <HomeSlider />
            <Collection />
            <CollectionTwo />
            <SpecialProducts type="fashion" backImage={true} productSlider={Product4} line={true} title="title1 section-t-space" inner="title-inner1"  designClass="section-b-space p-t-0 ratio_asos" noSlider="true" cartClass="cart-info cart-wrap" /> 
            <ParallaxBanner />
            <ProductSlider type="fashion" />
            <Instagram type="fashion" />
            <FooterFive logoName={'logo/f3.png'} layoutClass="darker-subfooter" />
        </>
    )
}

export default withApollo(Fashion2);