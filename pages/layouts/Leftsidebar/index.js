import React, { Fragment, useEffect } from "react";
import HeaderEleven from '../../../components/headers/Header-eleven';
import HomeSlider from "./components/HomeSlider";
import Products from "../../../components/common/Collections/Collection12";
import { withApollo } from '../../../helpers/apollo/apollo';
import Service from '../../../components/common/Service/service1';
import Blog from '../../../components/common/Blog/blog1';
import Instgram from '../../../components/common/instagram/insragram3';
import LogoBlock from '../../../components/common/logo-block';
import FooterOne from '../../../components/footers/footer-one';
import ModalComponent from "../../../components/common/Modal";

const Leftsidebar = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#ff4c3b');
      })
    return (
        <Fragment>
            <ModalComponent />
            <HeaderEleven logoName="logo.png" />
            <div className="left-sidebar_space">
                <HomeSlider />
                <Products type="metro" col="metro" />
                <Service sectionClass={"service border-section small-section "}  />
                <Blog type="fashion" title="title1" inner="title-inner1" />
                <Instgram type="fashion" />
                <div className="section-b-space">
                    <LogoBlock />
                </div>
                <FooterOne logoName="logo.png" />
                </div>
        </Fragment>
    );
}

export default withApollo(Leftsidebar);