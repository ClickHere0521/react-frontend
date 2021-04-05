import React from 'react';
import { Table, Media } from 'reactstrap';
import facebook from '../../public/assets/images/email-temp/facebook.png';
import youtube from '../../public/assets/images/email-temp/youtube.png';
import twitter from '../../public/assets/images/email-temp/twitter.png';
import gplus from '../../public/assets/images/email-temp/gplus.png';
import linkdin from '../../public/assets/images/email-temp/linkedin.png';
import pinterest from '../../public/assets/images/email-temp/pinterest.png'
import pro2 from '../../public/assets/images/email-temp/pro-2.jpg';
import pro3 from '../../public/assets/images/email-temp/pro-3.jpg';
import pro1 from '../../public/assets/images/email-temp/pro-1.jpg';
import space from '../../public/assets/images/email-temp/space.jpg';
import delivery2 from '../../public/assets/images/email-temp/delivery-2.png';

const OrderSuccess2 = () => (
    <>
        <Table style={{padding: "0 30px", marginBottom: "0", backgroundColor: "#fff",  boxShadow: "0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353)", width: "100%"}} borderless className="email-template-table" cellPadding="0" cellSpacing="0">
            <tbody>
                <tr>
                    <td>
                        <Table align="left" border="0" cellPadding="0" cellSpacing="0" style={{ textAlign: "left" }} width="100%">
                            <tbody>
                                <tr>
                                    <td style={{ textAlign: "center" }}>
                                        <Media src={delivery2} alt="" style={{ margin: "0 auto 30px" }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p style={{ fontSize: "14px" }}><b>Hi John Doe,</b></p>
                                        <p style={{ fontSize: "14px" }}>Order Is Successfully Processsed And Your Order Is On The Way,</p>
                                        <p style={{ fontSize: "14px" }}>Transaction ID : 267676GHERT105467,</p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <Table cellPadding="0" cellSpacing="0" border="0" align="left" style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}>
                            <tbody>
                                <tr>
                                    <td style={{ backgroundColor: "#fafafa", border: "1px solid #ddd", padding: "15px", letterSpacing: "0.3px", width: "50%" }}>
                                        <h5 style={{ fontSize: "16px", fontWeight: "600", color: "#000000", lineHeight: "16px", paddingBottom: "13px", borderBottom: "1px solid #e6e8eb", letterSpacing: "-0.65px", marginTop: "0", marginBottom: "13px" }}>Your Shipping Address</h5>
                                        <p style={{ textAlign: "left", fontWeight: "normal", fontSize: "14px", color: "#000000", lineHeight: "21px", marginTop: "0" }}>268 Cambridge Lane New Albany,<br /> IN 47150268 Cambridge Lane <br />New Albany, IN 47150</p>
                                    </td>
                                    <td><Media src={space} alt=" " height="25" width="30" /></td>
                                    <td style={{ backgroundColor: "#fafafa", border: "1px solid #ddd", padding: "15px", letterSpacing: "0.3px", width: "50%" }}>
                                        <h5 style={{ fontSize: "16px", fontWeight: "600", color: "#000000", lineHeight: "16px", paddingBottom: "13px", borderBottom: "1px solid #e6e8eb", letterSpacing: "-0.65px", marginTop: "0", marginBottom: "13px" }}>Your Billing Address:</h5>
                                        <p style={{ textAlign: "left", fontWeight: "normal", fontSize: "14px", color: "#000000", lineHeight: "21px", marginTop: "0" }}>268 Cambridge Lane New Albany,<br /> IN 47150268 Cambridge Lane <br />New Albany, IN 47150</p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table bordered className="order-detail" border="0" cellPadding="0" cellSpacing="0" align="left" style={{ width: "100%", marginBottom: "50px" }}>
                            <thead>
                                <tr className="email-tr">
                                    <th>PRODUCT</th>
                                    <th style={{ paddingLeft: "15px" }}>DESCRIPTION</th>
                                    <th>QUANTITY</th>
                                    <th>PRICE </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="email-tr">
                                    <td>
                                        <Media src={pro1} alt="" width="80" />
                                    </td>
                                    <td valign="top" style={{ paddingLeft: "15px" }}>
                                        <h5 style={{ marginTop: "15px" }}>Three seater Wood Style sofa for Leavingroom </h5>
                                    </td>
                                    <td valign="top" style={{ paddingLeft: "15px" }}>
                                        <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px", marginBottom: "0px" }}>Size : <span> L</span> </h5>
                                        <h5 style={{ fontSize: "14px", color: "#444", marginTop: "10px" }}>QTY : <span>1</span></h5>
                                    </td>
                                    <td valign="top" style={{ paddingLeft: "15px" }}>
                                        <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px" }}><b>$500</b></h5>
                                    </td>
                                </tr>
                                <tr className="email-tr">
                                    <td>
                                        <Media src={pro2} alt="" width="80" />
                                    </td>
                                    <td valign="top" style={{ paddingLeft: "15px" }}>
                                        <h5 style={{ marginTop: "15px" }}>Three seater Wood Style sofa for Leavingroom </h5>
                                    </td>
                                    <td valign="top" style={{ paddingLeft: "15px" }}>
                                        <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px", marginBottom: "0px" }}>Size : <span> L</span> </h5>
                                        <h5 style={{ fontSize: "14px", color: "#444", marginTop: "10px" }}>QTY : <span>1</span></h5>
                                    </td>
                                    <td valign="top" style={{ paddingLeft: "15px" }}>
                                        <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px" }}><b>$500</b></h5>
                                    </td>
                                </tr>
                                <tr className="email-tr">
                                    <td>
                                        <Media src={pro3} alt="" width="80" />
                                    </td>
                                    <td valign="top" style={{ paddingLeft: "15px" }}>
                                        <h5 style={{ marginTop: "15px" }}>Three seater Wood Style sofa for Leavingroom </h5>
                                    </td>
                                    <td valign="top" style={{ paddingLeft: "15px" }}>
                                        <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px", marginBottom: "0px" }}>Size : <span> L</span> </h5>
                                        <h5 style={{ fontSize: "14px", color: "#444", marginTop: "10px" }}>QTY : <span>1</span></h5>
                                    </td>
                                    <td valign="top" style={{ paddingLeft: "15px" }}>
                                        <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px" }}><b>$500</b></h5>
                                    </td>
                                </tr>
                                <tr className="email-tr">
                                    <td>
                                        <Media src={pro2} alt="" width="80" />
                                    </td>
                                    <td valign="top" style={{ paddingLeft: "15px" }}>
                                        <h5 style={{ marginTop: "15px" }}>Three seater Wood Style sofa for Leavingroom </h5>
                                    </td>
                                    <td valign="top" style={{ paddingLeft: "15px" }}>
                                        <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px", marginBottom: "0px" }}>Size : <span> L</span> </h5>
                                        <h5 style={{ fontSize: "14px", color: "#444", marginTop: "10px" }}>QTY : <span>1</span></h5>
                                    </td>
                                    <td valign="top" style={{ paddingLeft: "15px" }}>
                                        <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px" }}><b>$500</b></h5>
                                    </td>
                                </tr>
                                <tr className="pad-left-right-space">
                                    <td className="m-t-5" colSpan={2} align="left">
                                        <p style={{ fontSize: "14px" }}>Subtotal : </p>
                                    </td>
                                    <td className="m-t-5" colSpan={2} align="right">
                                        <b>$2000</b>
                                    </td>
                                </tr>
                                <tr className="pad-left-right-space">
                                    <td colSpan={2} align="left">
                                        <p style={{ fontSize: "14px" }}>TAX :</p>
                                    </td>
                                    <td colSpan={2} align="right">
                                        <b>$5</b>
                                    </td>
                                </tr>
                                <tr className="pad-left-right-space">
                                    <td colSpan={2} align="left">
                                        <p style={{ fontSize: "14px" }}>VAT :</p>
                                    </td>
                                    <td colSpan={2} align="right">
                                        <b>$5</b>
                                    </td>
                                </tr>
                                <tr className="pad-left-right-space">
                                    <td colSpan={2} align="left">
                                        <p style={{ fontSize: "14px" }}>SHIPPING Charge :</p>
                                    </td>
                                    <td colSpan={2} align="right">
                                        <b>$2</b>
                                    </td>
                                </tr>
                                <tr className="pad-left-right-space">
                                    <td colSpan={2} align="left">
                                        <p style={{ fontSize: "14px" }}>Discount :</p>
                                    </td>
                                    <td colSpan={2} align="right">
                                        <b> $1000</b>
                                    </td>
                                </tr>
                                <tr className="pad-left-right-space ">
                                    <td className="m-b-5" colSpan={2} align="left">
                                        <p style={{ fontSize: "14px" }}>Total :</p>
                                    </td>
                                    <td className="m-b-5" colSpan={2} align="right">
                                        <b>$2600</b>
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
                margin: 0 auto;
                width: 650px;
                font-family: 'Open Sans', sans-serif;
                background-color: #e2e2e2;
                display: block;
            }
    
            ul {
                margin: 0;
                padding: 0;
            }
    
            li {
                display: inline-block;
                text-decoration: unset;
            }
    
            a {
                text-decoration: none;
            }
    
            p {
                margin: 15px 0;
                color: #000;
            }
    
            h5 {
                color: #444;
                text-align: left;
                font-weight: 400;
            }
    
            .text-center {
                text-align: center
            }
    
            .main-bg-light {
                background-color: #fafafa;
            }
    
            .title {
                color: #444444;
                font-size: 22px;
                font-weight: bold;
                margin-top: 10px;
                margin-bottom: 10px;
                padding-bottom: 0;
                text-transform: uppercase;
                display: inline-block;
                line-height: 1;
            }
    
            table {
                margin-top: 30px
            }
    
            table.top-0 {
                margin-top: 0;
            }
    
            table.order-detail {
                border: 1px solid #ddd;
                border-collapse: collapse;
            }
    
            table.order-detail tr:nth-child(even) {
                border-top: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
            }
    
            table.order-detail tr:nth-child(odd) {
                border-bottom: 1px solid #ddd;
            }
    
            .pad-left-right-space {
                border: unset !important;
            }
    
            .pad-left-right-space td {
                padding: 5px 15px;
            }
    
            .pad-left-right-space td p {
                margin: 0;
            }
    
            .pad-left-right-space td b {
                font-size: 15px;
                font-family: 'Roboto', sans-serif;
            }
    
            .order-detail th {
                font-size: 16px;
                padding: 15px;
                text-align: center;
                background: #fafafa;
            }
    
            .footer-social-icon tr td img {
                margin-left: 5px;
                margin-right: 5px;
            }
        `}
        </style>
    </>
)

export default OrderSuccess2;