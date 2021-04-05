import React, { useState, useContext } from 'react';
import { TabList, TabPanel, Tabs, Tab } from 'react-tabs';
import { Col, Container, Row } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ProductItem from '../product-box/ProductBox6';
import CartContext from '../../../helpers/cart/index'
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
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

const TabCollection = ({ type, cartClass }) => {

    const [activeTab, setActiveTab] = useState(type);
    const context = useContext(CartContext);
    const wishListContext = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const quantity = context.quantity;

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: activeTab,
            indexFrom: 0,
            limit: 19
        }
    });

    return (
        <>
            <div className="title1  section-t-space">
                <h4>special offer</h4>
                <h2 className="title-inner1">top collection</h2>
            </div>
            <section className="game-product ratio_asos pt-0">
                <Container>
                    <Row>
                        <Col lg="6" className="m-auto">
                            <div className="product-para">
                                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s,</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Tabs className="theme-tab">
                                <TabList className="tabs tab-title">
                                    <Tab className={activeTab == type ? 'active' : ''} onClick={() => setActiveTab(type)}>
                                        New Products
                                    </Tab>
                                    <Tab className={activeTab == 'game' ? 'active' : ''} onClick={() => setActiveTab('game')}>
                                        Featured Products
                                    </Tab>
                                    <Tab className={activeTab == 'game' ? 'active' : ''} onClick={() => setActiveTab('game')}>
                                        Best Sellers
                                    </Tab>
                                </TabList>
                                <div className="tab-content-cls">
                                    <TabPanel id="tab-4" className="tab-content active default">
                                        <Row className=" no-slider five-product">
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
                                                <>
                                                    {data && data.products.items.slice(0, 10).map((product, index) =>
                                                        <ProductItem product={product}
                                                            addToComapre={() => compareContext.addToCompare(product)}
                                                            addCart={() => context.addToCart(product,quantity)} key={index}
                                                            addWishlist={() => wishListContext.addToWish(product)}
                                                            cartclassName={cartClass} />
                                                    )}
                                                </>
                                            }
                                        </Row>
                                    </TabPanel>
                                    <TabPanel id="tab-5" className="tab-content">
                                        <Row className="no-slider five-product">
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
                                                <>
                                                    {data && data.products.items.slice(9, 19).map((product, index) =>
                                                        <ProductItem product={product}
                                                            addCart={() => context.addToCart(product,quantity)} key={index}
                                                            addWishlist={() => wishListContext.addToWish(product)}
                                                            cartclassName={cartClass} />
                                                    )
                                                    }
                                                </>
                                            }
                                        </Row>
                                    </TabPanel>
                                    <TabPanel id="tab-6" className="tab-content">
                                        <Row className=" no-slider five-product row">
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
                                                <>
                                                    {data && data.products.items.slice(0, 10).map((product, index) =>
                                                        <ProductItem product={product}
                                                            addCart={() => context.addToCart(product,quantity)} key={index}
                                                            addWishlist={() => wishListContext.addToWish(product)}
                                                            cartclassName={cartClass} />
                                                    )
                                                    }
                                                </>
                                            }
                                        </Row>
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