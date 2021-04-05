import React, { Fragment ,useEffect,useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SideMenu from './common/sidemenu';
import IconTopbar from './common/Icon-topbar';
import LogoImage from './common/logo';

const HeaderEleven = ({logoName}) => {

    const [isLoading, setIsLoading] = useState(false);
	// eslint-disable-next-line
	const [open, setOpen] = useState(false);

    useEffect(() => {
		setTimeout(function () {
			document.querySelectorAll(".loader-wrapper").style = 'display:none';
		}, 2000);

		setOpen(true)

	}, []);



    const closeNav = () => {
		var openmyslide = document.getElementById("mySidenav");
		if (openmyslide) {
			openmyslide.classList.remove('open-side')
		}
	}
	


    return (
        <Fragment>
            <header className="left-header">
                <div className="mobile-fix-option"></div>
                <IconTopbar />
                <div className="metro">
                    <Container>
                        <Row>
                            <Col>
                                <div className="main-menu">
                                    <div className="menu-left">
                                        <div id="mySidenav" className="sidenav">
                                            <a href={null} className="sidebar-overlay" onClick={closeNav}></a>
                                            <nav>
                                                <div >
                                                    <div className="sidebar-back text-left" onClick={closeNav} >
                                                        <i className="fa fa-angle-left pr-2"aria-hidden="true"></i> Back
                                            </div>
                                                </div>
                                                <div className="brand-logo">
                                                    <LogoImage logo={logoName} />
                                                </div>
                                                <div className="left-sidebar_center">
                                                    <SideMenu />
                                                </div>
                                                <div className="leftside_social">
                                                    <div>
                                                        <div className="footer-social">
                                                            <ul>
                                                                <li>
                                                                    <a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://plus.google.com" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://twitter.com" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://rss.com" target="_blank"><i className="fa fa-rss" aria-hidden="true"></i></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="call_us">
                                                            <h5>Call Us: <span>123-456-7898</span></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
        </Fragment>
    )
}

export default HeaderEleven;