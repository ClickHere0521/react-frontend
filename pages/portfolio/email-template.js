import React from 'react';
import { Table, Media } from 'reactstrap';
import Link from 'next/link';
import logo from '../../public/assets/images/email-temp/logo.png';
import temp1 from '../../public/assets/images/email-temp/1.jpg';
import pro1 from '../../public/assets/images/email-temp/pro-1.jpg';
import pro2 from '../../public/assets/images/email-temp/pro-2.jpg';
import pro3 from '../../public/assets/images/email-temp/pro-3.jpg';
import cosmetic from '../../public/assets/images/email-temp/cosmetic.jpg';
import temp6 from '../../public/assets/images/email-temp/6.png';
import temp5 from '../../public/assets/images/email-temp/5.png';
import facebook from '../../public/assets/images/email-temp/facebook.png';
import youtube from '../../public/assets/images/email-temp/youtube.png';
import twitter from '../../public/assets/images/email-temp/twitter.png';
import gplus from '../../public/assets/images/email-temp/gplus.png';
import linkdin from '../../public/assets/images/email-temp/linkedin.png';
import pinterest from '../../public/assets/images/email-temp/pinterest.png'

const EmailTemplate = () => (
    <>
        <Table borderless className="email-template-table" cellPadding="0" cellSpacing="0">
            <tbody>
                <tr>
                    <td>
                        <Table style= {{marginBottom: "0"}} className="headerTable" cellPadding="0" cellSpacing="0">
                            <tbody>
                                <tr className="header">
                                    <td>
                                        <Media src={logo} className="main-logo" />
                                    </td>
                                    <td className="menu">
                                        <ul style= {{padding: "20px"}}>
                                            <li>
                                                <Link href="/">
                                                    <a href="#">Home</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a href="#">Contact</a>
                                                </Link>
                                            </li>
                                            <li><a href="#">Whishlist</a></li>
                                            <li><a href="#">my cart</a></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%">
                            <tbody>
                                <tr>
                                    <td><Media src={temp1} alt="" style={{ width: "100%" }} /></td>
                                </tr>
                            </tbody>
                        </Table>
                        <h4 style={{ textAlign: "center", margin: "10px", color: "#000", fontWeight: "700" }}>Additional 50% Off</h4>
                        <h5 style={{ textAlign: "center", margin: "0 10px 0 10px", color: "#777" }}>On clothes for kids,women & Mens Wear</h5>
                        <Table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ marginTop: "20px" }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="product-box hover">
                                            <div className="product border-theme br-0">
                                                <Media src={pro1} alt="product" style={{ width: "170px" }} />
                                            </div>
                                            <div className="product-info">
                                                <a href="#" tabIndex="0" style={{ textAlign: "center" }}>
                                                    <h6 style={{ textAlign: "center" }}>When an unknown.</h6>
                                                </a>
                                                <h4 style={{ textAlign: "center" }}>$45.00</h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="product-box hover">
                                            <div className="product border-theme br-0">
                                                <Media src={pro2} alt="product" style={{ width: "170px" }} className="img-fluid blur-up lazyload" />
                                            </div>
                                            <div className="product-info">
                                                <a href="#" tabIndex="0" style={{ textAlign: "center" }}>
                                                    <h6 style={{ textAlign: "center" }}>When an unknown.</h6>
                                                </a>
                                                <h4 style={{ textAlign: "center" }}>$45.00</h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="product-box hover">
                                            <div className="product border-theme br-0">
                                                <Media src={pro3} alt="product" style={{ width: "170px" }} className="img-fluid blur-up lazyload" />
                                            </div>
                                            <div className="product-info">
                                                <a href="#" tabIndex="0" style={{ textAlign: "center" }}>
                                                    <h6 style={{ textAlign: "center" }}>When an unknown.</h6>
                                                </a>
                                                <h4 style={{ textAlign: "center" }}>$45.00</h4>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table className="main-bg-light" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ marginTop: "40px" }}>
                        </Table>
                        <Table border="0" cellPadding="0" cellSpacing="0" width="100%">
                            <tbody>
                                <tr style={{ textAlign: "center" }}>
                                    <td>
                                        <a href="#"><Media src={cosmetic} style={{ width: "100%" }} /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ marginTop: "30px" }}>
                            <tbody>
                                <tr align="center" className="add-with-banner">
                                    <td>
                                        <a href="#"><Media src={temp6} /></a>
                                    </td>
                                    <td>
                                        <a href="#"><Media src={temp5} /></a>
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
                                        <td style= {{margin: "0 7px"}}>
                                            <a href="#"><img src={facebook} alt="" /></a>
                                        </td>
                                        <td style= {{margin: "0 7px"}}>
                                            <a href="#"><img src={youtube} alt="" /></a>
                                        </td>
                                        <td style= {{margin: "0 7px"}}>
                                            <a href="#"><img src={twitter} alt="" /></a>
                                        </td>
                                        <td style= {{margin: "0 7px"}}>
                                            <a href="#"><img src={gplus} alt="" /></a>
                                        </td>
                                        <td style= {{margin: "0 7px"}}>
                                            <a href="#"><img src={linkdin} alt="" /></a>
                                        </td>
                                        <td style= {{margin: "0 7px"}}>
                                            <a href="#"><img src={pinterest} alt="" /></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div style={{ borderTop: "1px solid #ddd", margin: "20px auto 0" }}></div>
                            <Table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ margin: "20px auto 0" }} >
                                <tbody>
                                    <tr>
                                        <td>
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
            .table td{
                padding:0;
                text-align:center;
                vertical-align:middle;
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
            .product-box .product {
                /*border:1px solid #ddd;*/
                text-align: center;
                position: relative;
                margin: 0 15px;
            }

            .product-info {
                margin-top: 15px;
            }
    
            .product-info h6 {
                line-height: 1;
                margin-bottom: 0;
                padding-bottom: 5px;
                font-size: 14px;
                font-family: "Open Sans", sans-serif;
                color: #777;
                margin-top: 0;
            }
    
            .product-info h4 {
                font-size: 16px;
                color: #444;
                font-weight: 700;
                margin-bottom: 0;
                margin-top: 5px;
                padding-bottom: 5px;
                line-height: 1;
            }

            .main-bg-light {
                background-color: #fafafa;
            }

        `}
        </style>
    </>
)

export default EmailTemplate;