import React, { useEffect } from 'react';
import {withApollo} from '../../../helpers/apollo/apollo'
import HeaderTwo from '../../../components/headers/header-two';
import FooterOne from '../../../components/footers/footer-one';
import Banner from './components/Banner';
import Collections from './components/Collection';
import SpecialProducts from '../../../components/common/Collections/TabCollection2';
import Parallax from './components/Parallax';
import Blog from '../../../components/common/Blog/blog1';
import { Product4 } from '../../../services/script';
import ModalComponent from '../../../components/common/Modal';
import Helmet from 'react-helmet';
import favicon from '../../../public/assets/images/favicon/5.png';

const Furniture = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-deafult', '#d4b196');
  })
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
      </Helmet>
      <ModalComponent />
      <HeaderTwo logoName={'logo/1.png'} topClass="top-header top-header-dark2" />
      <Banner />
      <Collections />
      <SpecialProducts type={'furniture'} designClass="section-b-space p-t-0 ratio_asos" productSlider={Product4} noSlider="true" cartClass="cart-info cart-wrap" />
      <Parallax />
     
        <Blog type="furniture" sectionClass="blog blog-2 section-b-space ratio3_2" title="title1" inner="title-inner1" />
      
      <FooterOne logoName={'logo/1.png'} />
    </>
  )
}

export default withApollo(Furniture);