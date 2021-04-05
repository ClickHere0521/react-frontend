import React, { useEffect } from 'react';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import TopBar from "./common/topbar-dark";
import cart from '../../public/assets/images/icon/cart.png';
import CartContainer from '../containers/CartContainer';
import LogoImage from "./common/logo";
import { Container, Col, Row, Form, FormGroup, Input, Button, Media } from 'reactstrap';
import Currency from './common/currency';
import settings from '../../public/assets/images/icon/setting.png';

const HeaderFour = ({logoName ,topClass, fluid, hfluid}) => {

	const isLoading = false;

    /*=====================
         Pre loader
		 ==========================*/

	useEffect(() => {
		setTimeout(function () {
			document.querySelectorAll(".loader-wrapper").style = "display: none";
		}, 2000);
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

	return (
		<div>
			<header >
				<div className="mobile-fix-option"></div>
				{/*Top Header Component*/}
				<TopBar fluid={fluid} topClass={topClass} />

				<Container fluid={hfluid}>
					<Row>
						<Col>
							<div className="main-menu">
								<div className="menu-left">
									<div className="navbar">
										<a href="!#" onClick={openNav}>
											<div className="bar-style"> 
												<i className="fa fa-bars sidebar-bar" aria-hidden="true"></i>
											</div>
										</a>
										{/*SideBar Navigation Component*/}
										<SideBar />
									</div>
									<div className="brand-logo">
										<LogoImage logo={logoName} />
									</div>
								</div>
								<div className="menu-right pull-right">
									{/*Top Navigation Bar Component*/}
									<NavBar />

									<div>
										<div className="icon-nav">
											<ul>
												<li className="onhover-div mobile-search">
													<div><Media src={`/assets/images/icon/search.png`} onClick={openSearch} className="img-fluid" alt="" />
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

export default HeaderFour;