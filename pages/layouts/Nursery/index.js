import React, {  useEffect } from "react";
import { withApollo } from '../../../helpers/apollo/apollo';
import HeaderEight from '../../../components/headers/header-eight';
import Banner from './components/Banner';
import TopCollection from '../../../components/common/Collections/Collection1';
import SpecialProducts from '../../../components/common/Collections/TabCollection4';
import Instagram from '../../../components/common/instagram/instagram1';
import Blog from '../../../components/common/Blog/blog1';
import FooterSix from '../../../components/footers/footer-six';
import { Product4 } from '../../../services/script';
import ModalComponent from '../../../components/common/Modal';
import Helmet from 'react-helmet';
import favicon from '../../../public/assets/images/favicon/11.png'

const Nursery = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-deafult', '#81ba00');
},[])
  return (
    <div className="layout-20">
    <div className="bg-white">
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
      </Helmet>
      <ModalComponent />
      <HeaderEight  logoName="logo/7.png" />
      <Banner />
      <TopCollection titleClass="title4" inner="title-inner4" line={true} type="nursery" title="trending products" productDetail="text-center" productSlider={Product4} designClass="section-b-space ratio_square" noSlider="true" cartClass="cart-box" />
      <SpecialProducts bgClass="tab-bg tab-grey-bg" type="nursery" productSlider={Product4} designClass="section-b-space ratio_square" noSlider="true" cartClass="cart-box" />
      <Blog type="nursery"  title="title4" inner="title-inner4"  />
      <Instagram type="nursery"/>
      <FooterSix layoutClass="darker-subfooter" />
    </div>
    </div>
  )
}

export default withApollo(Nursery);