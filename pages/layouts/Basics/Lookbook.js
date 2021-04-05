import React, { useEffect } from 'react';
import HeaderOne from '../../../components/headers/header-one';
import LookbookSection from './component/Lookbook'
import FooterOne from '../../../components/footers/footer-one';

const Lookbook = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#ff4c3b');
    })
    return (
        <>
            <HeaderOne topClass="top-header" logoName="logo.png" />
            <LookbookSection />
            <FooterOne layout="dark-subfooter" />
        </>
    )
}

export default Lookbook;