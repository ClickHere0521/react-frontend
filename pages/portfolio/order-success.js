import React from 'react';
import { Table, Media } from 'reactstrap';
import delivery from '../../public/assets/images/email-temp/delivery.png';
import success from '../../public/assets/images/email-temp/success.png';
import orderSuccess from '../../public/assets/images/email-temp/order-success.png';
import thirteen from '../../public/assets/images/email-temp/13.jpg';
import fourteen from '../../public/assets/images/email-temp/14.jpg';
import space from '../../public/assets/images/email-temp/space.jpg';
import facebook from '../../public/assets/images/email-temp/facebook.png';
import youtube from '../../public/assets/images/email-temp/youtube.png';
import twitter from '../../public/assets/images/email-temp/twitter.png';
import gplus from '../../public/assets/images/email-temp/gplus.png';
import linkdin from '../../public/assets/images/email-temp/linkedin.png';
import pinterest from '../../public/assets/images/email-temp/pinterest.png'

const OrderSuccess = () => {
    return (
        <>
            <Table style={{ marginBottom: "0", }} borderless className="email-template-table" cellPadding="0" cellSpacing="0">
                <tbody>
                    <tr>
                        <td>
                            <Table align="center" border="0" cellPadding="0" cellSpacing="0" >
                                <tbody>
                                    <tr>
                                        <td>
                                            <Media className="email-media" src={delivery} alt="" style={{ marginBottom: "0" }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Media className="email-media" src={success} alt="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2 className="title">thank you</h2>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Payment Is Successfully Processsed And Your Order Is On The Way</p>
                                            <p>Transaction ID:267676GHERT105467</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style={{ borderTop: "1px solid #777", height: "1px" }}></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Media className="email-media" src={orderSuccess} alt=""  />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table border="0" cellPadding="0" cellSpacing="0" >
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: "left" }}>
                                            <h2 className="title">YOUR ORDER DETAILS</h2>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table className="order-detail" border="0" cellPadding="0" cellSpacing="0" align="left">
                                <tbody>
                                    <tr className="email-tr">
                                        <th>PRODUCT</th>
                                        <th style={{ paddingLeft: "15px" }}>DESCRIPTION</th>
                                        <th>QUANTITY</th>
                                        <th>PRICE </th>
                                    </tr>
                                    <tr className="email-tr">
                                        <td>
                                            <Media style={{ margin: "0 auto" }} src={thirteen} alt="" width="70" />
                                        </td>
                                        <td valign="top" style={{ paddingLeft: "15px" }}>
                                            <h5 style={{ marginTop: "15px", textAlign: "left" }}>Three seater Wood Style sofa for Leavingroom </h5>
                                        </td>
                                        <td valign="top" style={{ paddingLeft: "0" }}>
                                            <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px", marginBottom: "0px" }}>
                                                Size : <span> L</span> </h5>
                                            <h5 style={{ fontSize: "14px", color: "#444", marginTop: "0" }}>
                                                QTY : <span>1</span></h5>
                                        </td>
                                        <td valign="top" style={{ paddingLeft: "15px" }}>
                                            <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px" }}>
                                                <b>$500</b></h5>
                                        </td>
                                    </tr>
                                    <tr className="email-tr">
                                        <td>
                                            <Media style={{ margin: "0 auto" }} src={fourteen} alt="" width="70" />
                                        </td>
                                        <td valign="top" style={{ paddingLeft: "15px" }}>
                                            <h5 style={{ marginTop: "15px", textAlign: "left" }}>Three seater Wood Style sofa for Leavingroom </h5>
                                        </td>
                                        <td valign="top" style={{ paddingLeft: "0" }}>
                                            <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px", marginBottom: "0px" }}>Size : <span> L</span> </h5>
                                            <h5 style={{ fontSize: "14px", color: "#444", marginTop: "0" }}>QTY : <span>1</span></h5>
                                        </td>
                                        <td valign="top" style={{ paddingLeft: "15px" }}>
                                            <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px" }}><b>$500</b></h5>
                                        </td>
                                    </tr>
                                    <tr className="email-tr">
                                        <td colSpan="2" style={{ lineHeight: "49px", fontSize: "13px", color: "#000000", paddingLeft: "20px", textAlign: "left", borderRight: "unset" }}>Products:</td>
                                        <td colSpan="3" className="price" style={{ lineHeight: "49px", textAlign: "right", paddingRight: "28px", fontSize: "13px", color: "#000000", borderLeft: "unset" }}><b>$2600.00</b></td>
                                    </tr>
                                    <tr className="email-tr">
                                        <td colSpan="2" style={{ lineHeight: "49px", fontSize: "13px", color: "#000000", paddingLeft: "20px", textAlign: "left", borderRight: "unset" }}>Discount :</td>
                                        <td colSpan="3" className="price" style={{ lineHeight: "49px", textAlign: "right", paddingRight: "28px", fontSize: "13px", color: "#000000", borderLeft: "unset" }}><b>$10</b></td>
                                    </tr>
                                    <tr className="email-tr">
                                        <td colSpan="2" style={{ lineHeight: "49px", fontFamily: "Arial", fontSize: "13px", color: "#000000", paddingLeft: "20px", textAlign: "left", borderRight: "unset" }}>Gift Wripping: </td>
                                        <td colSpan="3" className="price" style={{ lineHeight: "49px", textAlign: "right", paddingRight: "28px", fontSize: "13px", color: "#000000", borderLeft: "unset" }}><b>$2600</b></td>
                                    </tr>
                                    <tr className="email-tr">
                                        <td colSpan="2" style={{ lineHeight: "49px", fontSize: "13px", color: "#000000", paddingLeft: "20px", textAlign: "left", borderRight: "unset" }}>Shipping :</td>
                                        <td colSpan="3" className="price" style={{ lineHeight: "49px", textAlign: "right", paddingRight: "28px", fontSize: "13px", color: "#000000", borderLeft: "unset" }}><b>$30</b></td>
                                    </tr>
                                    <tr className="email-tr">
                                        <td colSpan="2" style={{ lineHeight: "49px", fontSize: "13px", color: "#000000", paddingLeft: "20px", textAlign: "left", borderRight: "unset" }}>TOTAL PAID :</td>
                                        <td colSpan="3" className="price" style={{ lineHeight: "49px", textAlign: "right", paddingRight: "28px", fontSize: "13px", color: "#000000", textAlignLast: "right", borderLeft: "unset" }}><b>$2600</b></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Table cellPadding="0" cellSpacing="0" border="0" align="left" style={{ width: "100%", marginTop: "0", marginBottom: "30px" }}>
                                <tbody>
                                    <tr>
                                        <td style={{ fontSize: "13px", color: "#444444", letterSpacing: "0.2px", width: "50%" }}>
                                            <h5 style={{ fontSize: "16px", color: "#000", lineHeight: "16px", paddingBottom: "13px", borderBottom: "1px solid #e6e8eb", letterSpacing: "-0.65px", marginTop: "0", marginBottom: "13px", textAlign: "left" }}>DILIVERY ADDRESS</h5>
                                            <p style={{ textAlign: "left", fontWeight: "normal", fontSize: "14px", color: "#000000", lineHeight: "21px", marginTop: "0" }}>268 Cambridge Lane New Albany, IN 47150268 Cambridge Lane <br />New Albany, IN 47150</p>
                                        </td>
                                        <td className="user-info">
                                            <Media src={space} alt=" " height="25" width="57" />
                                        </td>
                                        <td className="user-info" style={{ fontSize: "13px", color: "#444444", letterSpacing: "0.2px", width: "50%" }}>
                                            <h5 style={{ fontSize: "16px", color: "#000", lineHeight: "16px", paddingBottom: "13px", borderBottom: "1px solid #e6e8eb", letterSpacing: "-0.65px", marginTop: "0", marginBottom: "13px", textAlign: "left"  }}>SHIPPING ADDRESS</h5>
                                            <p style={{ textAlign: "left", fontWeight: "normal", fontSize: "14px", color: "#000000", lineHeight: "21px", marginTop: "0" }}>
                                                268 Cambridge Lane New Albany, IN 47150268 Cambridge Lane <br />New Albany, IN 47150
                                                                </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Table className="main-bg-light text-center top-0" align="center" borderless cellPadding="0" cellSpacing="0" width="100%">
                <tbody>
                    <tr>
                        <td style={{ padding: "30px" }}>
                            <div>
                                <h4 className="title" style={{ margin: "0", textAlign: "center" }}>Follow us</h4>
                            </div>
                            <Table border="0" cellPadding="0" cellSpacing="0" className="footer-social-icon text-center" align="center" style={{ marginTop: "20px" }}>
                                <tbody>
                                    <tr style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                                        <td>
                                            <a href="#"><img src={facebook} alt="" /></a>
                                        </td>
                                        <td>
                                            <a href="#"><img src={youtube} alt="" /></a>
                                        </td>
                                        <td>
                                            <a href="#"><img src={twitter} alt="" /></a>
                                        </td>
                                        <td>
                                            <a href="#"><img src={gplus} alt="" /></a>
                                        </td>
                                        <td>
                                            <a href="#"><img src={linkdin} alt="" /></a>
                                        </td>
                                        <td>
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

            <style global jsx>{`
            body {
                text-align: center;
                margin: 30px auto;
                width: 650px;
                font-family: 'Open Sans', sans-serif;
                background-color: #e2e2e2;
                display: block;
            }
            .email-template-table {
                padding: 0 30px;
                background-color: #ffffff;
                box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353);
                width: 100%;
            }
            .email-tr {
                border-top: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
            }
            .email-media{
                margin-top:30px;
                display:inline;
            }
            .title {
                color: #444444;
                font-size: 22px;
                font-weight: bold;
                padding-bottom: 0;
                text-transform: uppercase;
                display: inline-block;
                line-height: 1;
            }

                
        table.order-detail,
        .order-detail th,
        .order-detail td {
            border: 1px solid #ddd;
            border-collapse: collapse;
            padding: 0;
        }

        .order-detail th {
            font-size: 16px;
            padding: 15px;
            text-align: center;
        }
        `}
            </style>
        </>
    );
};

export default OrderSuccess;