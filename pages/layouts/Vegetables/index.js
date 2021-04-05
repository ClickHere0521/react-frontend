import React, { useEffect } from "react";
import {withApollo} from '../../../helpers/apollo/apollo'
import HeaderTwo from '../../../components/headers/header-two';
import FooterOne from '../../../components/footers/footer-one';
import Banner from './components/Banner';
import Collections from './components/Collections';
import TopCollection from '../../../components/common/Collections/Collection4';
import Parallax from './components/Parallax';
import SpecialProducts from '../../../components/common/Collections/Collection5';
import Blog from '../../../components/common/Blog/blog1';
import { Product5 } from '../../../services/script';
import ModalComponent from '../../../components/common/Modal';

const Vegetables = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-deafult', '#ff4c3b');
})
  return (
    <>
    <ModalComponent />
     <HeaderTwo logoName={'logo.png'} topClass="top-header" />
     <Banner />
     <Collections />
     <TopCollection titleClass="title4" inner="title-inner4" line={true} type="vegetables" productSlider={Product5} title="trending products" designClass="section-b-space addtocart_count ratio_square" productSlider={Product5}  noSlider="true" cartClass="cart-info cart-wrap"/>
     <Parallax />
     <div className="section-b-space">
      <SpecialProducts type="vegetables" cartClass="cart-info cart-wrap" designClass="addtocart_count ratio_square" />
     </div>
    
      <Blog type="vegetables" sectionClass="blog blog-bg section-b-space ratio2_3" inner="title-inner4" title="title4" />
     
     <FooterOne logoName={'logo.png'} />
    </>
  )
}

export default withApollo(Vegetables);