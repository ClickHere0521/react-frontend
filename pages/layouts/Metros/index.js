import React, { Fragment, useEffect } from "react";
import HeaderTen from '../../../components/headers/Header-ten';
import HomeSlider from "./components/Home-slider";
import Products from "../../../components/common/Collections/Collection12";
import ServiceLayout from '../../../components/common/Service/service1';
import Blog from '../../../components/common/Blog/blog1';
import { withApollo } from '../../../helpers/apollo/apollo';
import Instagram from '../../../components/common/instagram/instagram1';
import LogoBlock from "../../../components/common/logo-block";
import FooterEight from "../../../components/footers/Footer-eight";
import Helmet from 'react-helmet';
import favicon from '../../../public/assets/images/favicon/18.png';
import ModalComponent from "../../../components/common/Modal";


const Metros = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#000000');
    })
    return (
        <Fragment>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
            </Helmet>
            <ModalComponent />
            <HeaderTen logoName={'logo/16.png'} headerClass='header-metro' />
            <HomeSlider />
            <Products type="metro" col="metro" />
            <ServiceLayout sectionClass="pt-0" />
            <Blog type="fashion" title="title1" inner="title-inner1" />
            <Instagram type="fashion" />
            <div className="section-b-space">
                <LogoBlock />
            </div>
            <FooterEight logoName={'logo/f5.png'} />
        </Fragment>
    );
}

export default withApollo(Metros);