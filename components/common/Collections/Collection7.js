import React, { Fragment, useContext } from 'react';
import { Media, Row, Col, Container } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ProductItem from '../product-box/productBox2'
import CartContext from '../../../helpers/cart/index';
import Slider from 'react-slick';
import { CompareContext } from '../../../helpers/Compare/CompareContext';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import {CurrencyContext } from '../../../helpers/Currency/CurrencyContext';

const GET_PRODUCTS = gql`
    query  products($type:_CategoryType!,$indexFrom:Int! ,$limit:Int!) {
        products (type: $type,indexFrom:$indexFrom ,limit:$limit){
            items {
                id
                title
                description
                type
                brand
                category 
                price
                new
                stock
                sale
                discount
                variants{
                    id
                    sku
                    size
                    color
                    image_id
                }
                images{
                    image_id
                    id
                    alt
                    src
                }
            }
        }
    }
`;

const ProductBox = ({ type, cartClass }) => {
    const context = useContext(CartContext);
    const wishlistContext = useContext(WishlistContext);
    const contextCompare = useContext(CompareContext);
    const curContext = useContext(CurrencyContext);
    const currency = curContext.state;
    const quantity = context.quantity;
    
    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: type,
            indexFrom:0,
            limit:8
        }
    });

    return (
        <Fragment>
            <section className="section-b-space">
                <div className="full-box">
                    <Container>
                        <div className="title4">
                            <h2 className="title-inner4">Pocket Friendly Watch For men and women</h2>
                            <div className="line"><span></span></div>
                        </div>
                        <Row>
                            <Col md="4">
                                <div className="theme-card center-align">
                                    <div className="offer-slider">
                                        
                                            <div className="sec-1">
                                                {data && data.products.items.slice(0, 2).map((product, i) =>
                                                    <div className="product-box2" key={i}>
                                                        <div className="media">
                                                            <a href={null}>
                                                                <Media className="img-fluid blur-up lazyload" src={product.images[0].src} alt="" /></a>
                                                            <div className="media-body align-self-center">
                                                                <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                                <a href={null}>
                                                                    <h6>{product.title}</h6>
                                                                </a>
                                                                <h4>{currency.symbol}{(product.price * currency.value).toFixed(2)}</h4>
                                                                <ul className="color-variant">
                                                                    <li className="bg-light0"></li>
                                                                    <li className="bg-light1"></li>
                                                                    <li className="bg-light2"></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4" className="center-slider">
                                <div>
                                        <Slider className="offer-slider">
                                            {data && data.products.items.slice(0, 2).map((product, i) =>
                                                <div key={i}>
                                                    <ProductItem product={product} 
                                                        addCart={() => context.addToCart(product,quantity)}
                                                        addWishlist={() => wishlistContext.addToWish(product)}
                                                        addToCompare={() => contextCompare.addToCompare(product)}
                                                        cartClass={cartClass} />
                                                </div>
                                            )}
                                        </Slider>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="theme-card center-align">
                                    <div className="offer-slider">
                                        <div className="sec-1">
                                            {
                                                data && data.products.items.slice(0, 2).map((product, i) =>
                                                    <div className="product-box2" key={i}>
                                                        <div className="media">
                                                            <a href={null}>
                                                                <Media className="img-fluid blur-up lazyload" src={product.images[0].src} alt="" /></a>
                                                            <div className="media-body align-self-center">
                                                                <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                                <a href={null}>
                                                                    <h6>{product.title}</h6>
                                                                </a>
                                                                <h4>{currency.symbol}{(product.price * currency.value).toFixed(2)}</h4>
                                                                <ul className="color-variant">
                                                                    <li className="bg-light0"></li>
                                                                    <li className="bg-light1"></li>
                                                                    <li className="bg-light2"></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </Fragment>
    )
}

export default ProductBox;