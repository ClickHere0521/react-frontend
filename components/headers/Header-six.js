import React, { useState, useEffect } from 'react';
import Currency from './common/currency';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import Cart from '../containers/Cart';
import CartContainer from '../containers/CartContainer';
import TopBar from "./common/topbar";
import { Media, Container, Row, Col ,Form,Input,Button} from 'reactstrap';
import LogoImage from './common/logo';
import cart from '../../public/assets/images/jewellery/icon/cart.png';
import search from '../../public/assets/images/jewellery/icon/search.png';
import settings from '../../public/assets/images/icon/setting.png';

const HeaderSix = ({ logoName ,direction }) => {

    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line
    const [open, setOpen] = useState(false);

    /*=====================
         Pre loader
         ==========================*/
    useEffect(() => {
        setTimeout(function () {
            document.querySelectorAll(".loader-wrapper").style = 'display:none';
        }, 2000);

        setOpen(true)

    }, []);

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

    // eslint-disable-next-line
    const load = () => {
        setIsLoading(true)
        fetch().then(() => {
            // deal with data fetched
            setIsLoading(false)
        })
    };

    return (
        <div>
            <header className="header-tools" >
                <div className="mobile-fix-option"></div>
                <TopBar />
                <div className="logo-menu-part">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <div className="main-menu">
                                    <div className="menu-left">
                                        <div className="navbar">
                                            <a href={null} onClick={openNav}>
                                                <div className="bar-style"> <i className="fa fa-bars sidebar-bar" aria-hidden="true"></i></div>
                                            </a>
                                            {/*SideBar Navigation Component*/}
                                            <SideBar />
                                        </div>
                                        <div className="brand-logo">
                                            <LogoImage logo={logoName} />
                                        </div>
                                    </div>
                                    <div className="menu-right pull-right">
                                        <NavBar />
                                        <div>
                                        <div className="icon-nav">
                                            <ul>
                                                <li className="onhover-div mobile-search">
                                                    <div>
                                                        <Media src={search} onClick={openSearch} className="img-fluid" alt="" />
                                                        <i className="fa fa-search"></i>
                                                    </div>
                                                </li>
                                                <Currency icon={settings} />
                                                
                                                {
													direction === undefined ?
													<CartContainer icon={cart} />
													:
													<Cart icon={cart} layout={direction} />	
												}

                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
            <div id="search-overlay" className="search-overlay">
                <div>
                    <span className="closebtn" onClick={closeSearch} title="Close Overlay">×</span>
                    <div className="overlay-content">
                        <Container>
                            <Row>
                                <Col>
                                    <Form>
                                        <div className="form-group">
                                            <Input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search a Product" />
                                        </div>
                                        <Button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeaderSix;