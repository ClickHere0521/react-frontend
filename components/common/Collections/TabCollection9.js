import React, { useState, useContext } from 'react';
import { TabList, TabPanel, Tabs, Tab } from 'react-tabs';
import { Col, Container, Row } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Slider from 'react-slick';
import ProductItem from '../product-box/ProductBox3';
import CartContext from '../../../helpers/cart/index'
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import { CompareContext } from '../../../helpers/Compare/CompareContext';
import { Product3 } from '../../../services/script';
import PostLoader from '../PostLoader';
import Background from '../../../public/assets/images/parallax/23.jpg';

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

const TabCollection = ({ type, cartClass, spanClass }) => {
    const [activeTab, setActiveTab] = useState(type);
    const context = useContext(CartContext);
    const wishListContext = useContext(WishlistContext);
    const contextCompare = useContext(CompareContext);
    const quatity = context.quatity;

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: activeTab,
            indexFrom: 0,
            limit: 26
        }
    });



    return (
        <>
            <section className="full-banner parallax tools-parallax-product tab-left ratio_square tools-grey border-box bg-size blur-up lazyloaded" style={{ backgroundImage: "url(" + Background + ")" }}>
                <Container>
                    <Row>
                        <Col>
                            <Tabs className="theme-tab">
                                <div className="left-side">
                                    <div className="left-tab-title">
                                        <h4>our shop</h4>
                                        <h3>Buy Marijuana</h3>
                                    </div>
                                    <TabList className="tabs tab-title">
                                        <Tab className={activeTab == type ? 'active' : ''} onClick={() => setActiveTab(type)}>
                                            <a href={null}>Cannabis Oils</a>
                                        </Tab>
                                        <Tab className={activeTab == 'marijuana' ? 'active' : ''} onClick={() => setActiveTab('marijuana')}>
                                            <a href={null}>pre rolls</a>
                                        </Tab>
                                        <Tab className={activeTab == 'marijuana' ? 'active' : ''} onClick={() => setActiveTab('marijuana')}>
                                            <a href={null}>marijuana edibles</a>
                                        </Tab>
                                        <Tab className={activeTab == 'marijuana' ? 'active' : ''} onClick={() => setActiveTab('marijuana')}>
                                            <a href={null}>marijuana weeds</a>
                                        </Tab>
                                        <Tab className={activeTab == 'marijuana' ? 'active' : ''} onClick={() => setActiveTab('marijuana')}>
                                            <a href={null}>CBD oils</a>
                                        </Tab>
                                        <Tab className={activeTab == 'marijuana' ? 'active' : ''} onClick={() => setActiveTab('marijuana')}>
                                            <a href={null}>marijuana seeds</a>
                                        </Tab>
                                    </TabList>
                                </div>
                                <div className="tab-content-cls">
                                    <TabPanel id="tab-1" className="tab-content active default">
                                            <Slider {...Product3} className="product-3 product-m no-arrow">
                                                {data && data.products.items.slice(0, 5).map((product, index) =>
                                                    <ProductItem product={product}
                                                        spanClass={spanClass}
                                                        addCart={() => context.addToCart(product, quatity)} key={index}
                                                        addCompare={() => contextCompare.addToCompare(product)}
                                                        addWishlist={() => wishListContext.addToWish(product)}
                                                        cartclassName={cartClass} />
                                                )
                                                }
                                            </Slider>
                                    </TabPanel>
                                    <TabPanel id="tab-2" className="tab-content">
                                        {(!data || !data.products || !data.products.items || data.products.items.length === 0 || loading) ?
                                            <>
                                                <PostLoader />
                                                <PostLoader />
                                                <PostLoader />
                                            </>
                                            :
                                            <Slider {...Product3} className="product-3 product-m no-arrow">
                                                {data && data.products.items.slice(5, 10).map((product, index) =>
                                                    <ProductItem product={product}
                                                        spanClass={spanClass}
                                                        addCompare={() => contextCompare.addToCompare(product)}
                                                        addCart={() => context.addToCart(product, quatity)} key={index}
                                                        addWishlist={() => wishListContext.addToWish(product)}
                                                        cartclassName={cartClass} />
                                                )
                                                }
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
                                            <Slider {...Product3} className="product-3 product-m no-arrow">

                                                {data && data.products.items.slice(10, 15).map((product, index) =>
                                                    <ProductItem product={product}
                                                        spanClass={spanClass}
                                                        addCompare={() => contextCompare.addToCompare(product)}
                                                        addCart={() => context.addToCart(product, quatity)} key={index}
                                                        addWishlist={() => wishListContext.addToWish(product)}
                                                        cartclassName={cartClass} />
                                                )
                                                }

                                            </Slider>
                                        }
                                    </TabPanel>
                                    <TabPanel id="tab-4" className="tab-content ">
                                        {(!data || !data.products || !data.products.items || data.products.items.length === 0 || loading) ?
                                            <>
                                                <PostLoader />
                                                <PostLoader />
                                                <PostLoader />
                                            </>
                                            :
                                            <Slider {...Product3} className="product-3 product-m no-arrow">

                                                {data && data.products.items.slice(15, 20).map((product, index) =>
                                                    <ProductItem product={product}
                                                        spanClass={spanClass}
                                                        addCompare={() => contextCompare.addToCompare(product)}
                                                        addCart={() => context.addToCart(product, quatity)} key={index}
                                                        addWishlist={() => wishListContext.addToWish(product)}
                                                        cartclassName={cartClass} />
                                                )
                                                }

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
                                            <Slider {...Product3} className="product-3 product-m no-arrow">

                                                {data && data.products.items.slice(20, 25).map((product, index) =>
                                                    <ProductItem product={product}
                                                        spanClass={spanClass}
                                                        addCompare={() => contextCompare.addToCompare(product)}
                                                        addCart={() => context.addToCart(product, quatity)} key={index}
                                                        addWishlist={() => wishListContext.addToWish(product)}
                                                        cartclassName={cartClass} />
                                                )
                                                }

                                            </Slider>
                                        }
                                    </TabPanel>
                                    <TabPanel id="tab-6" className="tab-content">
                                        {(!data || !data.products || !data.products.items || data.products.items.length === 0 || loading) ?
                                            <>
                                                <PostLoader />
                                                <PostLoader />
                                                <PostLoader />
                                            </>
                                            :
                                            <Slider {...Product3} className="product-3 product-m no-arrow">
                                                {data && data.products.items.slice(0, 10).map((product, index) =>
                                                    <ProductItem product={product}
                                                        spanClass={spanClass}
                                                        addCompare={() => contextCompare.addToCompare(product)}
                                                        addCart={() => context.addToCart(product, quatity)} key={index}
                                                        addWishlist={() => wishListContext.addToWish(product)}
                                                        cartclassName={cartClass} />
                                                )
                                                }

                                            </Slider>
                                        }
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TabCollection;