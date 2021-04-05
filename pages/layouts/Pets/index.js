import React, {  useEffect } from "react";
import MainBanner from './component/MainBanner'
import LogoBlock from '../../../components/common/logo-block';
import BannerSection from './component/BannerSection';
import ParallaxBanner from './component/ParallaxBanner';
import Blog from '../../../components/common/Blog/blog1';
import ThemeSettings from '../../../components/customizer/theme-settings';
import FooterTwo from '../../../components/footers/footer-two';
import HeaderThree from '../../../components/headers/header-three';
import TopCollection from '../../../components/common/Collections/Collection3';
import { withApollo } from '../../../helpers/apollo/apollo';
import { Product4 } from '../../../services/script';
import ModalComponent from '../../../components/common/Modal';
import Helmet from 'react-helmet';
import favicon from '../../../public/assets/images/favicon/15.png';

const Pets = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-deafult', '#ff9944');
})
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon} />
      </Helmet>
      <ModalComponent />
      <HeaderThree logoName={'logo/14.png'} />
      <MainBanner />
      <div className="section-b-space">
        <LogoBlock />
      </div>
      <BannerSection />
      <TopCollection inner="title-inner1" innerClass="title1 title5" titleClass={true} type="pets" title="top collection" subtitle="special offer" designClass="section-b-space j-box pets-box ratio_square" productSlider={Product4} noSlider="true" cartClass="cart-info cart-wrap" />
      <ParallaxBanner />
      <TopCollection inner="title-inner1" innerClass="title1 title5" titleClass={true} type="pets" title="save and extra" designClass="j-box pets-box ratio_square" productSlider={Product4} noSlider="true" cartClass="cart-info cart-wrap" />
      <Blog type="pets" sectionClass="section-b-space" title="title1 title5" inner="title-inner1" hrClass={true} />
      <ThemeSettings />
      <FooterTwo logoName={'logo/14.png'} layoutClass="black-subfooter" />
    </>
  )
}

export default withApollo(Pets);