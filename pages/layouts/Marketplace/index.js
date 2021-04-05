import React, { Fragment, useEffect } from "react";
import HeaderOne from '../../../components/headers/header-one'
import HomeSlider from "./components/Home-slider";
import Collections from "./components/Collections";
import Paragraph from "../../../components/common/Paragraph";
import ProductSection from '../../../components/common/Collections/Collection10';
import { withApollo } from '../../../helpers/apollo/apollo';
import Parallax from "./components/Parallax";
import ProductSlider from "../../../components/common/Collections/TabCollection7.js";
import ServiceLayout from '../../../components/common/Service/service1';
import Instagram from '../../../components/common/instagram/instagram1';
import FooterOne from '../../../components/footers/footer-one';
import ModalComponent from "../../../components/common/Modal";
import Helmet from 'react-helmet';
import favicon from '../../../public/assets/images/favicon/1.png';

const Marketplace = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#3e5067');
    })
        return (  
            <Fragment>
                 <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
                </Helmet>
                <ModalComponent />
                <HeaderOne logoName={'logo/18.png'} headerClass="marketplace" topClass="top-header" />
                <HomeSlider />
                <Collections />
                <Paragraph title="title1 section-t-space" inner="title-inner1" line={false} />
                <ProductSection type="marketplace" />
                <Parallax type="marketplace" />
                <ProductSlider type="marketplace" />
                <ServiceLayout sectionClass={"service border-section small-section"}  />
                <Instagram type="fashion" />
                <FooterOne logoName={'logo/18.png'} />
            </Fragment>
        );
}
 
export default withApollo(Marketplace);