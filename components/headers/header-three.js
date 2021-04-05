import React, { useEffect , useState } from 'react';
import NavBar from "./common/navbar";
import CartContainer from '../containers/CartContainer';
import Currency from './common/currency';
import TopBarDark from "./common/topbar-dark";
import LogoImage from "./common/logo";
import { Media, Container, Row, Col, Form, Input, Button, FormGroup } from 'reactstrap';
import search from '../../public/assets/images/icon/search.png';
import settings from '../../public/assets/images/icon/setting.png';
import cart from '../../public/assets/images/icon/cart.png';

const HeaderThree = (props) => {

    const [isLoading, setIsLoading] = useState(false);


    /*=====================
         Pre loader
         ==========================*/

    useEffect(() => {
        setTimeout(function () {
            document.querySelectorAll(".loader-wrapper").style = "display: none";
        }, 2000);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
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

    // eslint-disable-next-line
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
            <header id="sticky" className="sticky header-2 header-6">
                <div className="mobile-fix-option"></div>
                {/*Top Header Component*/}
                <TopBarDark topClass="top-header d-sm-block" />

                <Container>
                    <Row>
                        <Col>
                            <div className="main-menu border-section border-top-0">
                                <div className="brand-logo layout2-logo">
                                    <LogoImage logo={props.logoName} />
                                </div>
                                <div>
                                    <form className="form_search" role="textbox">
                                     {/* eslint-disable-next-line */}
                                        <Input id="query search-autocomplete" type="search"
                                            placeholder="Find the best for your pet..."
                                            className="nav-search nav-search-field" aria-expanded="true" />
                                        <button type="submit" name="nav-submit-button" className="btn-search">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                                <div className="menu-right pull-right">
                                    <div>
                                        <div className="icon-nav">
                                            <ul>
                                                <li className="onhover-div mobile-search">
                                                    <div><Media src={search} onClick={openSearch} className="img-fluid" alt="" />
                                                        <i className="fa fa-search" onClick={openSearch}></i></div>
                                                </li>
                                                <Currency icon={settings} />
                                                {/*Header Cart Component */}
                                                <CartContainer icon={cart} />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="main-nav-center">
                                <NavBar />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>

            <div id="search-overlay" className="search-overlay">
                <div>
                    <span className="closebtn" onClick={closeSearch} title="Close Overlay">×</span>
                    <div className="overlay-content">
                        <Container>
                            <Row>
                                <Col>
                                    <Form>
                                        <FormGroup>
                                            <Input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search a Product" />
                                        </FormGroup>
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

export default HeaderThree;