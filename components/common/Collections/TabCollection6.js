import React, { useState, useContext } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Col, Container, Row } from 'reactstrap';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Slider from 'react-slick';
import { Product4 } from '../../../services/script';
import CartContext from '../../../helpers/cart/index';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import ProductItem from '../product-box/ProductBox8';
import PostLoader from '../PostLoader';
import { CompareContext } from '../../../helpers/Compare/CompareContext';

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


const TabCollection = ({ type, cartClass, designClass }) => {

    const [activeTab, setActiveTab] = useState(type);
    const context = useContext(CartContext);
    const wishListContext = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const quantity = context.quantity;

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: activeTab,
            indexFrom: 0,
            limit: 32
        }
    });

    return (
        <section className={designClass}>
            <Container>
                <div className="title2">
                    <h4>new collection</h4>
                    <h2 className="title-inner2">trending products</h2>
                </div>
                <Row>
                    <Col>
                        <Tabs className="theme-tab">
                            <TabList className="tabs tab-title">
                                <Tab className={activeTab == type ? 'active' : ''} onClick={() => setActiveTab(type)}>new arrival</Tab>
                                <Tab className={activeTab == type ? 'active' : ''} onClick={() => setActiveTab(type)}>woman</Tab>
                                <Tab className={activeTab == type ? 'active' : ''} onClick={() => setActiveTab(type)}>man</Tab>
                                <Tab className={activeTab == 'kids' ? 'active' : ''} onClick={() => setActiveTab('kids')}>kids</Tab>
                                <Tab className={activeTab == 'bags' ? 'active' : ''} onClick={() => setActiveTab('bags')}>school-bag</Tab>
                            </TabList>
                            <div className="tab-content-cls">
                                <TabPanel id="tab-1" className="tab-content active default">
                                    {(!data || !data.products || !data.products.items || data.products.items.length === 0 || loading) ?
                                        <div className="row mx-0 margin-default">
                                            <div className="col-xl-3 col-lg-4 col-6">
                                                <PostLoader />
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-6">
                                                <PostLoader />
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-6">
                                                <PostLoader />
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-6">
                                                <PostLoader />
                                            </div>
                                        </div>
                                        :
                                        <Slider {...Product4} className="product-4 product-m no-arrow">
                                            {data && data.products.items.slice(0, 8).map((product, i) =>
                                                <ProductItem product={product}
                                                    addCart={() => context.addToCart(product, quantity)} key={i}
                                                    addWishlist={() => wishListContext.addToWish(product)}
                                                    addCompareList={() => compareContext.addToCompare(product)}
                                                    cartClass={cartClass} />
                                            )}
                                        </Slider>
                                    }
                                </TabPanel>
                                <TabPanel id="tab-2" className="tab-content">
                                    {(!data || !data.products || !data.products.items || data.products.items.length === 0 || loading) ?
                                        <>
                                            <PostLoader />
                                            <PostLoader />
                                            <PostLoader />
                                        </>
                                        :
                                        <Slider {...Product4} className="product-4 product-m no-arrow">
                                            {data && data.products.items.slice(8, 16).map((product, i) =>
                                                <ProductItem product={product}
                                                    addCart={() => context.addToCart(product, quantity)} key={i}
                                                    addWishlist={() => wishListContext.addToWish(product)}
                                                    addCompareList={() => compareContext.addToCompare(product)}
                                                    cartClass={cartClass} />
                                            )}
                                        </Slider>
                                    }
                                </TabPanel>
                                <TabPanel id="tab-3" className="tab-content">
                                    {(!data || !data.products || !data.products.items || data.products.items.length === 0 || loading) ?
                                        <>
                                            <PostLoader />
                                            <PostLoader />
                                            <PostLoader />
                                        </>
                                        :
                                        <Slider {...Product4} className="product-4 product-m no-arrow">
                                            {data && data.products.items.slice(16, 32).map((product, i) =>
                                                <ProductItem product={product}
                                                    addCart={() => context.addToCart(product, quantity)} key={i}
                                                    addWishlist={() => wishListContext.addToWish(product)}
                                                    addCompareList={() => compareContext.addToCompare(product)}
                                                    cartClass={cartClass} />
                                            )}
                                        </Slider>
                                    }
                                </TabPanel>
                                <TabPanel id="tab-4" className="tab-content">
                                    {(!data || !data.products || !data.products.items || data.products.items.length === 0 || loading) ?
                                        <>
                                            <PostLoader />
                                            <PostLoader />
                                            <PostLoader />
                                        </>
                                        :
                                        <Slider {...Product4} className="product-4 product-m no-arrow">
                                            {data && data.products.items.slice(0, 8).map((product, i) =>
                                                <ProductItem product={product}
                                                    addCart={() => context.addToCart(product, quantity)} key={i}
                                                    addWishlist={() => wishListContext.addToWish(product)}
                                                    addCompareList={() => compareContext.addToCompare(product)}
                                                    cartClass={cartClass} />
                                            )}
                                        </Slider>
                                    }
                                </TabPanel>
                                <TabPanel id="tab-5" className="tab-content">
                                    {(!data || !data.products || !data.products.items || data.products.items.length === 0 || loading) ?
                                        <>
                                            <PostLoader />
                                            <PostLoader />
                                            <PostLoader />
                                        </>
                                        :
                                        <Slider {...Product4} className="product-4 product-m no-arrow">
                                            {data && data.products.items.slice(0, 8).map((product, i) =>
                                                <ProductItem product={product}
                                                    addCart={() => context.addToCart(product, quantity)} key={i}
                                                    addWishlist={() => wishListContext.addToWish(product)}
                                                    addCompareList={() => compareContext.addToCompare(product)}
                                                    cartClass={cartClass} />
                                            )}
                                        </Slider>
                                    }
                                </TabPanel>
                            </div>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TabCollection;