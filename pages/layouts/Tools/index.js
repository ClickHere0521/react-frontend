import React, { Fragment, useEffect } from "react";
import HeaderSix from '../../../components/headers/Header-six';
import FooterOne from '../../../components/footers/footer-four';
import Banner from './component/Banner';
import Service from "../../../components/common/Service/service3";
import AboutSection from "./component/About-section";
import Category from "./component/Category";
import ParallaxSlider from './component/ParallaxSlider';
import TopCollection from '../../../components/common/Collections/Collection2';
import { withApollo } from '../../../helpers/apollo/apollo';
import LogoBlock from '../../../components/common/logo-block';
import NewProduct from "../../../components/common/Collections/TabCollection3";
import ModalComponent from "../../../components/common/Modal";
import { Product4 } from "../../../services/script";
import Helmet from 'react-helmet';
import favicon from '../../../public/assets/images/favicon/1.png';


const Tools = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#ff4c3b');
    })
    return (
        <Fragment>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
            </Helmet>
            <div className="tools-bg">
                <ModalComponent />
                <HeaderSix logoName={'logo.png'} direction="right" />
                <Banner />
                <Service layoutClass="banner-padding absolute-banner pb-0 tools-service" />
                <AboutSection />
                <Category />
                <TopCollection spanClass={true} type="tools" title="Popular products" productSlider={Product4} designClass="section-b-space tools-grey ratio_square" noSlider="true" />
                <ParallaxSlider />
                <NewProduct spanClass={true} type="tools" title="Top Collections" subtitle="trend" designClass="tools-grey ratio_square" cartClass="cart-info cart-wrap" noSlider="true" />
                <div className="tools-brand section-b-space">
                    <LogoBlock />
                </div>
                <FooterOne newLatter={false} logoName={'layout4/footerlogo.png'} layoutClass="dark-subfooter" footerClass="sticky-footer  blur-up lazyloaded" />
            </div>
        </Fragment>
    );
}

export default withApollo(Tools);