import React, { Fragment } from 'react';
import LogoImage from './common/logo';
import TopBar from './common/topbar';
import NavBar from './common/navbar';
import search from '../../public/assets/images/icon/search.png';
import settings from '../../public/assets/images/icon/setting.png';
import { Media, Container, Row, Col ,Form , Button ,Input } from 'reactstrap';
import CartContainer from '../containers/CartContainer';
import cart from '../../public/assets/images/icon/Add-to-cart.png';
import Currency from './common/currency';

const HeaderNine = ({ logoName }) => {
    const openSearch = () => {
        document.getElementById("search-overlay").style.display = "block";
    }

    const closeSearch = () => {
        document.getElementById("search-overlay").style.display = "none";
    }

    return (
        <Fragment>
            <header className="header-gym">
                <div className="mobile-fix-option"></div>
                <TopBar />

                <Container>
                    <Row>
                        <Col sm="12">
                            <div className="main-menu">
                                <div className="menu-left">
                                    <div className="brand-logo">
                                        <LogoImage logo={logoName} />
                                    </div>
                                </div>
                                <div className="menu-right pull-right">
                                    <div>
                                        <NavBar />
                                    </div>
                                    <div>
                                        <div className="icon-nav">
                                            <ul>
                                                <li className="onhover-div mobile-search">
                                                    <div><Media src={search} onClick={openSearch} className="img-fluid" alt="" />
                                                        <i className="fa fa-search" onClick={openSearch}></i></div>
                                                </li>
                                                <Currency icon={settings} />
                                                <CartContainer icon={cart} />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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
        </Fragment>
    )
}

export default HeaderNine;