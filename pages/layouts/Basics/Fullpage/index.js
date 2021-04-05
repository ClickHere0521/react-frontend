import React, { Fragment, useEffect } from 'react';
import HeaderTwale from '../../../../components/headers/Header-twale';
import CopyRight from '../../../../components/footers/common/copyright';
import HomeSlider from './HomeSlider';

const Parallax = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#866e6c');
    })
    return (
        <Fragment>
            <HeaderTwale logoName="logo/2.png" />
                <HomeSlider />
            <CopyRight  />
        </Fragment>
    )
}

export default Parallax;                                                                                                                                                                                                                                                                                                                                                                                                                                     