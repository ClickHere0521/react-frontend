import React, { useEffect } from "react";
import FooterOne from '../../../components/footers/footer-one';
import HeaderOne from '../../../components/headers/header-one';
import { withApollo } from '../../../helpers/apollo/apollo';
import Banner from './components/Banner';
import CollectionBanner from './components/CollectionBanner';
import TopCollection from '../../../components/common/Collections/Collection3';
import ParallaxBanner from './components/ParallaxBanner';
import LogoBlock from '../../../components/common/logo-block';
import Instagram from '../../../components/common/instagram/instagram1';
import ProductSlider from '../../../components/common/Collections/Collection9';
import { Product5 } from '../../../services/script';
import Paragraph from '../../../components/common/Paragraph';
import ModalComponent from '../../../components/common/Modal';
import Helmet from 'react-helmet';
import favicon from '../../../public/assets/images/favicon/10.png';

const Kids = () => {
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
      <HeaderOne logoName={'logo/6.png'} topClass="top-header" />
      <Banner />
      <CollectionBanner />
      <Paragraph title="title1 section-t-space" inner="title-inner1" hrClass={false} />
      <TopCollection type="kids" noTitle="null" designClass="section-b-space p-t-0 ratio_asos" productSlider={Product5} noSlider="true" cartClass="cart-info cart-wrap" />
      <ParallaxBanner />
      <ProductSlider type="kids" />
      <Instagram type="kids" />
      <div className="section-b-space">
        <LogoBlock />
      </div>
      <FooterOne logoName={'logo/6.png'} />
    </>
  )
}

export default withApollo(Kids);