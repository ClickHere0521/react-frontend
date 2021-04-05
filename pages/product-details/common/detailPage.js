import React from 'react';
import visa from '../../../public/assets/images/icon/visa.png';
import mastercard from '../../../public/assets/images/icon/mastercard.png';
import paypal from '../../../public/assets/images/icon/paypal.png';
import express from '../../../public/assets/images/icon/american-express.png';
import discover from '../../../public/assets/images/icon/discover.png';
import { Media } from 'reactstrap';

const Detail = ({item}) => {
    return (
        <div className="product-right product-description-box">
            <h2>{item.title}</h2>
            <div className="border-product">
                <h6 className="product-title">product details</h6>
                <p>{item.description}</p>
            </div>
            <div className="single-product-tables border-product detail-section">
                <table>
                    <tbody>
                        <tr>
                            <td>Febric:</td>
                            <td>Chiffon</td>
                        </tr>
                        <tr>
                            <td>Color:</td>
                            <td>Red</td>
                        </tr>
                        <tr>
                            <td>Material:</td>
                            <td>Crepe printed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="border-product">
                <h6 className="product-title">share it</h6>
                <div className="product-icon">
                    <ul className="product-social">
                        <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://plus.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://rss.com" target="_blank"><i className="fa fa-rss"></i></a></li>
                    </ul>
                    <form className="d-inline-block">
                        <button className="wishlist-btn"><i className="fa fa-heart"></i><span
                            className="title-font">Add To WishList</span></button>
                    </form>
                </div>
            </div>
            <div className="border-product">
                <h6 className="product-title">100% SECURE PAYMENT</h6>
                <div className="payment-card-bottom">
                    <ul>
                        <li>
                            <a href="#"><Media src={visa} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><Media src={mastercard} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><Media src={paypal} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><Media src={express}
                                alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><Media src={discover} alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Detail;