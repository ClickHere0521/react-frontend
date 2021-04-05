import React, { Fragment, useEffect } from 'react';
import HeaderOne from '../../../components/headers/header-one';
import FooterOne from '../../../components/footers/footer-one';

const Instagram = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#ff4c3b');
    })
    return (
        <Fragment>
            <HeaderOne topClass="top-header" logoName="logo.png" />
            <section className="pt-0">
                <script src='https://snapppt.com/widgets/widget_loader/d933682c-2c8d-4412-9672-f71aca512c72/grid.js' defer
                    className='snapppt-widget'></script>
            </section>
            <FooterOne layout="dark-subfooter" />
        </Fragment>
    )
}

export default Instagram;