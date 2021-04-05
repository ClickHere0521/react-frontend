import React, { useContext } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Slider from 'react-slick';
import { Product4 } from '../../../services/script';
import ProductItem from '../product-box/ProductBox6';
import CartContext from '../../../helpers/cart';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import banner1 from '../../../public/assets/images/offer-banner1.jpg';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';

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
                sale
                stock
                discount
                picture
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

const ProductSlider = ({ type }) => {

    const curContext = useContext(CurrencyContext);
    const currency = curContext.state;
    const context = useContext(CartContext)
    const contextWishlist = useContext(WishlistContext);

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: type,
            indexFrom: 0,
            limit: 17
        }
    });

    return (
        <section className="tools_product bg-title section-b-space ">
            <Container>
                <Row className="multiple-slider">
                    <Col xl="4" lg="4" md="12">
                        <div className="theme-card">
                            <h5 className="title-border">Under $20 | Free delivery</h5>
                                <Slider className="offer-slider slide-1">
                                    <div>
                                        {data && data.products.items.slice(5, 9).map((product, index) =>
                                            <div className="media" key={index}>
                                                <a href={null}><Media className="img-fluid blur-up lazyload"
                                                    src={product.images[0].src} alt="" /></a>
                                                <div className="media-body align-self-center">
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <a href={null}>
                                                        <h6>{product.title}</h6>
                                                    </a>
                                                    <h4>{currency.symbol}{((product.price - (product.price * product.discount / 100))*currency.value).toFixed(2)}
                                                        <del><span className="money">{currency.symbol}{(product.price * currency.value).toFixed(2) }</span></del>
                                                    </h4>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        {data && data.products.items.slice(9, 12).map((product, index) =>
                                            <div className="media" key={index}>
                                                <a href={null}>
                                                    <Media className="img-fluid blur-up lazyload"
                                                        src={product.images[0].src} alt="" />
                                                </a>
                                                <div className="media-body align-self-center">
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <a href={null}>
                                                        <h6>{product.title}</h6>
                                                    </a>
                                                    <h4>{currency.symbol}{((product.price - (product.price * product.discount / 100))*currency.value).toFixed(2)}
                                                        <del><span className="money">{currency.symbol}{(product.price * currency.value).toFixed(2) }</span></del>
                                                    </h4>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Slider>
                        </div>
                    </Col>
                    <Col xl="8" lg="8" md="12">
                        <Tabs className="theme-tab">
                            <div className="bg-title-part">
                                <h5 className="title-border">RECOMMENDATIONS FOR YOU</h5>
                                <TabList className="tabs tab-title">
                                    <Tab className="current">
                                        New Products
                                    </Tab>
                                    <Tab className="">
                                        Featured Products
                                    </Tab>
                                </TabList>
                            </div>
                            <div className="tab-content-cls ratio_asos">
                                <TabPanel className="tab-content active default">
                                        <Slider {...Product4} className="product-4 game-product product-m no-arrow slick-initialized slick-slider">
                                            {data && data.products.items.slice(0, 8).map((product, index) =>
                                                <div key={index}>
                                                    <ProductItem product={product}
                                                        onAddToCompareClicked={() => addToCompare(product)}
                                                        addWishlist={() => contextWishlist.addToWish(product)}
                                                        addCart={() => context.addToCart(product)} key={index} />
                                                </div>
                                            )
                                            }
                                        </Slider>
                                </TabPanel>
                                <TabPanel className="tab-content active default">
                                        <Slider {...Product4} className="product-4 game-product product-m no-arrow">
                                            {data && data.products.items.slice(4, 12).map((product, index) =>
                                                <div key={index}>
                                                    <ProductItem product={product}
                                                        onAddToCompareClicked={() => addToCompare(product)}
                                                        addWishlist={() => contextWishlist.addToWish(product)}
                                                        addCart={() => context.addToCart(product)} key={index} />
                                                </div>
                                            )}
                                        </Slider>
                                </TabPanel>
                            </div>
                        </Tabs>
                        <div className="banner-tools">
                            <Media src={banner1} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProductSlider;