import React, { Fragment, useEffect } from "react";
import { withApollo } from '../../../helpers/apollo/apollo';
import HeaderSeven from "../../../components/headers/header-seven";
import Banner from "./Component/Banner";
import Category from './Component/Category';
import TopCollection from '../../../components/common/Collections/Collection1';
import Service from '../../../components/common/Service/service3';
import ParallaxBanner from './Component/ParallaxBanner';
import SpecialProducts from '../../../components/common/Collections/TabCollection1';
import Instagram from '../../../components/common/instagram/instagram2';
import FooterFive from "../../../components/footers/footer-five";
import Paragraph from '../../../components/common/Paragraph';
import { Product5 } from "../../../services/script";
import ModalComponent from "../../../components/common/Modal";
import Helmet from 'react-helmet';
import favicon from '../../../public/assets/images/favicon/16.png';

const Jewellery = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#5fcbc4');
    })
    return (
        <Fragment>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
            </Helmet>
            <div className="bg_cls">
                <ModalComponent />
                <HeaderSeven logoName={'logo/13.png'} />
                <Banner />
                <Category />
                <Paragraph title="title1  section-t-space title5" inner="title-inner1" hrClass={true} />
                <TopCollection type="jewellery" designClass="p-t-0 j-box ratio_square" productSlider={Product5} noSlider="true" cartClass="cart-info cart-wrap" />
                <Service layoutClass="section-b-space" />
                <ParallaxBanner />
                <SpecialProducts type="jewellery" heading="exclusive products" title="title1  section-t-space title5" inner="title-inner1" hrClass={true}
                                 designClass="p-t-0 j-box ratio_square" noSlider="true" cartClass="cart-info cart-wrap" />
                <section className="instagram ratio_square section-b-space">
                    <Instagram type="jewellery" />
                </section>
                <FooterFive logoName={'logo/13.png'} layoutClass="black-subfooter" />
            </div>
        </Fragment>
    );
}

export default withApollo(Jewellery);