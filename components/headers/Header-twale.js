import React from 'react';
import SideBar from './common/sidebar';
import { Media, Container, Row, Col ,Form ,Button ,Input} from 'reactstrap';
import search from '../../public/assets/images/icon/search.png';
import settings from '../../public/assets/images/icon/setting.png';
import cart from '../../public/assets/images/icon/cart.png';
import Currency from './common/currency';
import CartContainer from '../containers/CartContainer';
import LogoImage from './common/logo';

const HeaderTwale = ({ logoName }) => {
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
        <>
            <header className="full-scroll-menu">
                <div className="mobile-fix-option"></div>
                <Container fluid={true}>
                    <Row>
                        <Col sm="12">
                            <div className="main-menu">
                                <div className="menu-left">
                                    <div className="navbar">
                                        <a href={null} onClick={openNav}>
                                            <div className="bar-style"> <i className="fa fa-bars sidebar-bar" aria-hidden="true"></i></div>
                                        </a>
                                        <SideBar />
                                    </div>
                                    <div className="brand-logo">
                                        <LogoImage logo={logoName} />
                                    </div>
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
        </>
    )
}

export default HeaderTwale;