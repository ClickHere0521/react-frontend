import React, { useEffect, useState } from 'react';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import TopBarDark from "./common/topbar-dark";
import LogoImage from "./common/logo";
import { Media, Container, Row, Col } from 'reactstrap';
import CartContainer from '../containers/CartContainer';
import search from '../../public/assets/images/icon/layout4/search.png';
import settings from '../../public/assets/images/icon/layout4/setting.png'
import cart from '../../public/assets/images/icon/cart.png';
import Currency from './common/currency';

const HeaderEight = ({logoName}) => {
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line
    const [open, setOpen] = useState(false);

    useEffect(() => {

        setTimeout(function () {
            document.querySelectorAll(".loader-wrapper").style = 'display:none';
        }, 2000);
        setOpen(true)

    }, []);

    const handleScroll = () => {
        let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number >= 300) {
            if (window.innerWidth < 576) {
                document.getElementById("sticky").classList.remove('fixed');
            } else
                document.getElementById("sticky").classList.add('fixed');
        } else {
            document.getElementById("sticky").classList.remove('fixed');
        }
    }

    const openNav = () => {
        var openmyslide = document.getElementById("mySidenav");
        if (openmyslide) {
            openmyslide.classList.add('open-side')
        }
    }
    const openSearch = () => {
        document.getElementById("search-overlay").style.display = "block";
    }

    const closeSearch = () => {
        document.getElementById("search-overlay").style.display = "none";
    }


    return (
        <header>
            <div className="mobile-fix-option"></div>
            <TopBarDark topClass="top-header top-header-dark3" />
            <Container className="layout3-menu">
                <Row>
                    <Col sm="12">
                        <div className="main-menu row">
                            <Col>
                                <div className="menu-left around-border">
                                    <div className="navbar">
                                        <a href={null} onClick={openNav}>
                                            <div className="bar-style"> <i className="fa fa-bars sidebar-bar" aria-hidden="true"></i></div>
                                        </a>
                                        <SideBar />
                                    </div>
                                    <div className="main-menu-right">
                                        <NavBar />
                                    </div>
                                </div>
                            </Col>
                            <div className="absolute-logo">
                                <div className="brand-logo">
                                    <LogoImage logo={logoName} />
                                </div>
                            </div>
                            <div>
                                <div className="menu-right pull-right">
                                    <div>
                                        <div className="icon-nav">
                                            <ul>
                                                <li className="onhover-div mobile-search">
                                                    <div>
                                                        <Media alt="" src={search} onClick={openSearch} className="img-fluid blur-up lazyload" /> <i className="fa fa-search" onClick={openSearch}></i></div>
                                                    <div id="search-overlay" className="search-overlay">
                                                        <div><span className="closebtn" onClick={closeSearch} title="Close Overlay">×</span>
                                                            <div className="overlay-content">
                                                                <Container>
                                                                    <Row>
                                                                        <Col xl="12">
                                                                            <form>
                                                                                <div className="form-group">
                                                                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search a Product" />
                                                                                </div>
                                                                                <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                                                            </form>
                                                                        </Col>
                                                                    </Row>
                                                                </Container>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <Currency icon={settings} />
                                                <CartContainer icon={cart} />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default HeaderEight;