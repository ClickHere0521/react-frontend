import React from 'react';
import { Table, Media } from 'reactstrap';
import logo from '../../public/assets/images/email-temp/logo.png';
import slider from '../../public/assets/images/email-temp/e-2-slider.jpg';
import banner from '../../public/assets/images/email-temp/banner.jpg';
import banner2 from '../../public/assets/images/email-temp/banner-2.jpg';
import ten from '../../public/assets/images/email-temp/10.jpg'
import eleven from '../../public/assets/images/email-temp/11.jpg';
import twale from '../../public/assets/images/email-temp/12.jpg';
import facebook from '../../public/assets/images/email-temp/facebook.png';
import youtube from '../../public/assets/images/email-temp/youtube.png';
import twitter from '../../public/assets/images/email-temp/twitter.png';
import gplus from '../../public/assets/images/email-temp/gplus.png';
import linkdin from '../../public/assets/images/email-temp/linkedin.png';
import pinterest from '../../public/assets/images/email-temp/pinterest.png'


const EmailTemplate2 = () => (
    <>
        <Table borderless className="email-template-table" cellPadding="0" cellSpacing="0">
            <tbody>
                <tr>
                    <td style= {{padding: "0"}}>
                    <Table style= {{marginBottom: "0"}} className="headerTable" cellPadding="0" cellSpacing="0">
                            <tbody>
                                <tr className="header">
                                    <td>
                                        <Media src={logo} className="main-logo" />
                                    </td>
                                    <td className="menu">
                                        <ul style= {{padding: "20px"}}>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#">Whishlist</a></li>
                                            <li><a href="#">my cart</a></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table className="slider" align="center" border="0" cellPadding="0" cellSpacing="0" width="100%">
                            <tbody>
                                <tr>
                                    <th style={{ backgroundColor: "#11bfff", padding: "30px", width: "60%" }}>
                                        <Table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td style={{ color: "#ffffff", fontSize: "16px", lineHeight: "20px", textTransform: "uppercase", textAlign: "left", paddingBottom: "5px" }}>New Color</td>
                                                </tr>
                                                <tr>
                                                    <td className="h2-white left pb20" style={{ color: "#ffffff", fontFamily: "'Roboto', sans-serif", fontSize: "52px", lineHeight: "58px", textTransform: "uppercase", fontWeight: "bold", textAlign: "left", paddingBottom: "20px" }}>new <br />season</td>
                                                </tr>
                                                <tr>
                                                    <td><p style={{ fontSize: "13px", lineHeight: "18px", color: "#ffffff", textAlign: "left" }}>We are committed to your satisfaction with every order.</p></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Table>
                                            <tbody>
                                                <tr style= {{textAlign: "left"}}>
                                                    <td className="text-button white-button" style={{ fontSize: "14px", display: "inline-block", lineHeight: "18px", textAlign: "center", textTransform: "uppercase", padding: "10px", background: "#ffffff", color: "#f54084", fontWeight: "bold" }}>
                                                        <a href="#" target="_blan" style={{ color: "#4e54cb", textDecoration: "none" }}>
                                                            <span style={{ color: "#f1415e", textDecoration: "none" }}>
                                                                shop now
                                                        </span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </th>
                                    <th align="center" style= {{padding: "0"}}>
                                        <Media src={slider} alt="" style={{ marginBottom: "0" }} />
                                    </th>
                                </tr>
                            </tbody>
                        </Table>

                        <Table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ marginTop: "30px" }}>
                            <thead>
                                <tr>
                                    <td colSpan= "5">
                                        <h4 className="title" style={{ width: "100%", textAlign: "center", marginTop: "0", marginBottom: "10px" }}>trending product</h4>
                                        <p style={{ margin: "0" }}>GET EVEN 25% OFF DISCOUNT</p>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="product-box hover">
                                            <div className="product border-theme br-0">
                                                <Media src="/assets/images/email-temp/13.jpg" alt="product" style={{ width: "100%" }} />
                                            </div>
                                            <div className="product-info">
                                                <a href="#">
                                                    <h6>When an unknown.</h6>
                                                </a>
                                                <h4>$45.00</h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="product-box hover">
                                            <div className="product border-theme br-0">
                                                <Media src="/assets/images/email-temp/14.jpg" alt="product" style={{ width: "100%" }} />
                                            </div>
                                            <div className="product-info">
                                                <a href="#">
                                                    <h6>When an unknown.</h6>
                                                </a>
                                                <h4>$45.00</h4>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table border="0" cellPadding="0" cellSpacing="0" align="center" style={{ marginTop: "0" }}>
                            <tbody>
                                <tr className="add-with-banner">
                                    <td>
                                        <a href="#"><Media src={banner} alt="product" style={{ width: "100%" }} /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table border="0" cellPadding="0" cellSpacing="0" align="center" style={{ marginTop: "0" }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <Media src={banner2} alt="" style={{ width: "100%" }} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ marginTop: "0" }}>
                            <tbody>
                                <tr>
                                    <td align="center">
                                        <Table align="center" border="0" className="display-width-inner" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: "450px", marginBottom: "0", verticalAlign: "middle" }}>
                                            <tbody>
                                                <tr>
                                                    <td align="center" style={{ width: "40%" , padding: "0"}}>
                                                        <Media src={ten} alt="" style={{ width: "225px", marginBottom: "0" }} />
                                                    </td>
                                                    <td align="center" style={{ backgroundColor: "#fafafa", width: "60%", padding: "0" }}>
                                                        <h3 style={{ margin: "0", fontSize: "18px", color: "black", fontWeight: "600", marginTop: "4px" }}>Product One</h3>
                                                        <div style={{ color: "#E01931", fontWeight: "normal", fontSize: "16px", lineHeight: "22px", letterSpacing: "1px", margin: "2px" }}>
                                                            <span style={{ color: "#666666", fontWeight: "normal", fontSize: "15px", lineHeight: "25px", letterSpacing: "1px" }}
                                                                className="txt-price1" data-color="Price1" data-size="Price1" data-min="10" data-max="35">
                                                                $25.00</span><span className="txt-price2">&nbsp;&nbsp;&nbsp;</span>$20.90
                                                        </div>
                                                        <div style={{ padding: "15px 0px", textTransform: "uppercase", fontSize: "11px", letterSpacing: "1px" }}>
                                                            <a href="#" style={{ color: "#ffffff", textDecoration: "none", background: "#000", padding: "8px 12px" }}>SHOP NOW</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Table align="center" border="0" className="display-width-inner" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: "450px", marginBottom: "0" }}>
                                            <tbody>
                                                <tr>
                                                    <td align="center" style={{ backgroundColor: "#fafafa", width: "60%", padding: "0" }}>
                                                        <h3 style={{ margin: "0", fontSize: "18px", color: "black", fontWeight: "600", marginTop: "4px" }}>Product One</h3>
                                                        <div style={{ color: "#E01931", fontWeight: "normal", fontSize: "16px", lineHeight: "22px", letterSpacing: "1px", margin: "2px" }}>
                                                            <span style={{ color: "#666666", fontSize: "15px", lineHeight: "25px", letterSpacing: "1px" }} className="txt-price1"
                                                                data-color="Price1" data-size="Price1" data-min="10" data-ax="35">
                                                                $25.00</span><span className="txt-price2">&nbsp;&nbsp;&nbsp;</span>$20.90
                                                    </div>
                                                        <div style={{ padding: "15px 0px", textTransform: "uppercase", fontSize: "11px", letterSpacing: "1px" }}>
                                                            <a href="#" style={{ color: "#ffffff", textDecoration: "none", background: "#000", padding: "8px 12px" }}>SHOP NOW</a>
                                                        </div>
                                                    </td>
                                                    <td align="center" style={{ width: "40%", padding: "0" }}>
                                                        <Media src={eleven} alt="" style={{ width: "225px", marginBottom: "0" }} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                        <Table align="center" border="0" className="display-width-inner" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: "450px", marginBottom: "0" }}>
                                            <tbody>
                                                <tr>
                                                    <td align="center" style={{ width: "40%", padding: "0"  }}>
                                                        <Media src={twale} alt="" style={{ width: "225px", marginBottom: "0" }} />
                                                    </td>
                                                    <td align="center" style={{ backgroundColor: "#fafafa", width: "60%", padding: "0"  }}>
                                                        <h3 style={{ margin: "0", fontSize: "18px", color: "black", fontWeight: "600", marginTop: "4px" }}>Product One</h3>
                                                        <div style={{ color: "#E01931", fontSize: "16px", lineHeight: "22px", letterSpacing: "1px", margin: "2px" }}>
                                                            <span style={{ color: "#666666", fontSize: "15px", lineHeight: "25px", letterSpacing: "1px" }} className="txt-price1" data-color="Price1" data-size="Price1" data-min="10" data-max="35">$25.00</span><span className="txt-price2">&nbsp;&nbsp;&nbsp;</span>$20.90
                                    </div>
                                                        <div style={{ padding: "15px 0px", textTransform: "uppercase", fontSize: "11px", letterSpacing: "1px" }}>
                                                            <a href="#" style={{ color: "#ffffff", textDecoration: "none", background: "#000", padding: "8px 12px" }}>SHOP NOW</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table className="main-bg-light text-center top-0" style={{marginBottom: "0"}} align="center" borderless cellPadding="0" cellSpacing="0" width="100%">
                <tbody>
                    <tr>
                        <td style={{ padding: "30px", textAlign: "center" }}>
                            <div>
                                <h4 className="title" style={{ margin: "0", textAlign: "center" }}>Follow us</h4>
                            </div>
                            <Table border="0" cellPadding="0" cellSpacing="0" className="footer-social-icon text-center" align="center" style={{ marginTop: "20px" }}>
                                <tbody>
                                    <tr style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                                        <td style= {{margin: "0"}}>
                                            <a href="#"><img src={facebook} alt="" /></a>
                                        </td>
                                        <td style= {{margin: "0"}}>
                                            <a href="#"><img src={youtube} alt="" /></a>
                                        </td>
                                        <td style= {{margin: "0"}}>
                                            <a href="#"><img src={twitter} alt="" /></a>
                                        </td>
                                        <td style= {{margin: "0"}}>
                                            <a href="#"><img src={gplus} alt="" /></a>
                                        </td>
                                        <td style= {{margin: "0"}}>
                                            <a href="#"><img src={linkdin} alt="" /></a>
                                        </td>
                                        <td style= {{margin: "0"}}>
                                            <a href="#"><img src={pinterest} alt="" /></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div style={{ borderTop: "1px solid #ddd", margin: "20px auto 0" }}></div>
                            <Table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ margin: "20px auto 0" }} >
                                <tbody>
                                    <tr>
                                        <td style= {{padding: "0"}}>
                                            <a href="#" style={{ fontSize: "13px", paddingBottom: "0" }}>Want to change how you receive these emails?</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingBottom: "0" }}>
                                            <p style={{ fontSize: "13px", margin: "0" }}>2020 - 21 Copy Right by Themeforest powerd by Pixel Strap</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#" style={{ fontSize: "13px", margin: "0", textDecoration: "underline" }}>Unsubscribe</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                </tbody>
            </Table>
                    </td>
                </tr>
            </tbody>
        </Table>
        <style global jsx>{`
            body {
                text-align: center;
                margin: 20px auto;
                width: 650px;
                font-family: 'Open Sans', sans-serif;
                background-color: #e2e2e2;
                display: block;
            }
            .headerTable{
                text-align:center;
            }
            .email-template-table {
                background-color: #ffffff;
                box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353);
                border:0;
                align:center;
                width:100%;
            }

            .main-logo {
                width: 180px;
                padding: 10px 20px;
            }

            .menu {
                width:100%;
                align:right;
                display:inline;
                text-decoration: unset;
            }
            .menu a{
                text-transform: capitalize;
                font-size: 16px;
                margin-right: 15px;
                text-decoration: none;
            }
            .menu li a{
                color:#444
            }
            .title {
                text-align:center;
                color: #444444;
                font-size: 22px;
                font-weight: bold;
                margin-bottom: 0;
                padding-bottom: 0;
                text-transform: capitalize;
                display: inline-block;
                line-height: 1;
            }
            .header li{
                align:left;
                vertical-align: top;
            }

            .table th, .table td {
                vertical-align: middle;
            }

        `}
        </style>
    </>
)

export default EmailTemplate2;