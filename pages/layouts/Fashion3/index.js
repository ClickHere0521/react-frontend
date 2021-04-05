import React, { useEffect } from 'react';
import ModalComponent from '../../../components/common/Modal';
import HeaderOne from '../../../components/headers/header-one';
import { withApollo } from '../../../helpers/apollo/apollo';
import FooterOne from '../../../components/footers/footer-one';
import HomeSlider from './Component/Home';
import TopCollection from '../../../components/common/Collections/Collection1';
import { Product4 } from '../../../services/script';
import Paragraph from '../../../components/common/Paragraph';
import { Container } from 'reactstrap';
import ParallaxBanner from './Component/Parallax';
import SpecialProducts from '../../../components/common/Collections/TabCollection1';

const Fashion3 = () => {

    useEffect(() => {
        document.body.classList.add('box-layout-body');
    }, []);
    return (
        <>
            <ModalComponent />
            <HeaderOne logoName={'logo.png'} topClass="top-header" />
            <HomeSlider />
            <div className="container box-layout bg-image">
                <section className="section-b-space ratio_asos">
                    <Container className="section-t-space">
                        <Paragraph title="title1" subtitle="special offer" inner="title-inner1" />
                        <TopCollection backImage={true} type="fashion" noTitle="null" productSlider={Product4} designClass="section-b-space p-t-0 ratio_asos" noSlider="true" cartClass="cart-info cart-wrap" />
                    </Container>
                </section>

                <ParallaxBanner />
                <SpecialProducts type="fashion" heading="exclusive products" backImage={true} productSlider={Product4} line={true} title="title1 section-t-space" inner="title-inner1" designClass="section-b-space p-t-0 ratio_asos" noSlider="true" cartClass="cart-info cart-wrap" />
            </div>
            <FooterOne logoName={'logo.png'} />
        </>
    )
}

export default withApollo(Fashion3);