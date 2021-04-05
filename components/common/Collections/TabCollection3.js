import React, { Fragment, useState, useContext } from "react";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ProductItem from '../product-box/ProductBox3';
import CartContext from '../../../helpers/cart/index'
import { Container, Media, Col, Row } from 'reactstrap';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import banner from '../../../public/assets/images/tools/banner.jpg';
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import { Product4 } from "../../../services/script";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import LeftCollection from "./LeftCollection";

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

const NewProduct = ({ type, designClass, cartClass, spanClass }) => {
    const [activeTab, setActiveTab] = useState(type);
    const context = useContext(CartContext);
    const compareContext = useContext(CompareContext);
    const curContext = useContext(CurrencyContext);
    const symbol = curContext.state.symbol;
    const wishListContext = useContext(WishlistContext)

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: activeTab,
            indexFrom: 0,
            limit: 8
        }
    });


    return (
        <Fragment>
            <section className="tools_product">
                <Container>
                    <Row className="multiple-slider">
                        <Col xl="3" lg="4" md="12" >
                            <LeftCollection type={type} product={4} />
                        </Col>
                        <Col xl="9" lg="8" md="12" className={designClass}>
                            <Container className="p-0">
                                <Tabs className="theme-tab">
                                    <TabList className="tabs tab-title">
                                        <Tab className={activeTab == type ? 'active' : ''} onClick={() => setActiveTab(type)}>New Products</Tab>
                                        <Tab className={activeTab == 'furniture' ? 'active' : ''} onClick={() => setActiveTab('furniture')}>Featured Products </Tab>
                                    </TabList>

                                    <TabPanel>
                                            <Slider {...Product4} className="product-4 product-m no-arrow">
                                                {data && data.products.items.slice(0, 8).map((product, i) =>
                                                    <ProductItem product={product}
                                                        spanClass={spanClass}
                                                        addToCompare={() => compareContext.addToCompare(product)}
                                                        addCart={() => context.addToCart(product)} key={i}
                                                        addWishlist={() => wishListContext.addToWish(product)}
                                                        cartClass={cartClass} />
                                                )}
                                            </Slider>
                                    </TabPanel>
                                    <TabPanel>

                                            <Slider {...Product4} className="product-4 product-m no-arrow">
                                                {data && data.products.items.slice(0, 8).map((product, i) =>
                                                    <ProductItem product={product}
                                                        spanClass={spanClass}
                                                        addCart={() => context.addToCart(product)} key={i}
                                                        addWishlist={() => wishListContext.addToWish(product)}
                                                        cartClass={cartClass} />
                                                )}
                                            </Slider>

                                    </TabPanel>
                                </Tabs>
                            </Container>
                            <div className="banner-tools">
                                <Media src={banner} alt="" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}

export default NewProduct;