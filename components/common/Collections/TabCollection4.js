import React, { useState, useContext } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Col, Container, Media, Row } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import PostLoader from '../PostLoader';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
import { useRouter } from 'next/router';
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


const TabCollection = ({ type ,bgClass }) => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(type);
    const curContext = useContext(CurrencyContext);
    const currency = curContext.state;
    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: activeTab,
            indexFrom: 0,
            limit: 8
        }
    });

    const clickProductDetail = (product) => {
        const titleProps = product.title.split(' ').join('');
        router.push(`/product-details/${product.id}` + '-' + `${titleProps}`);
    }


    return (
        <div className={bgClass}>
            <section className="p-0">
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <div className="title4">
                                <h2 className="title-inner4">trending products</h2>
                                <div className="line"><span></span></div>
                            </div>
                            <Tabs className="theme-tab">
                                <TabList className="tabs tab-title">
                                    <Tab className={activeTab == type ? 'active' : ''} onClick={() => setActiveTab(type)}>winter</Tab>
                                    <Tab className={activeTab == 'greens' ? 'active' : ''} onClick={() => setActiveTab(type)}>greens</Tab>
                                    <Tab className={activeTab == 'various' ? 'active' : ''} onClick={() => setActiveTab(type)}>various</Tab>
                                </TabList>
                                <div className="tab-content-cls">
                                    <TabPanel id="tab-7" className="tab-content active default">
                                        <Row className="product-tab">
                                                <>
                                                    {data && data.products.items.slice(0,8).map((item, i) =>
                                                        <div className="tab-box" key={i}>
                                                            <div className="product-box2">
                                                                <div className="media">
                                                                    <a onClick={() => clickProductDetail(item)}>
                                                                        <Media className="img-fluid blur-up lazyload"
                                                                            src={item.images[0].src} alt="" /></a>
                                                                    <div className="media-body align-self-center">
                                                                        <div className="rating"><i className="fa fa-star"></i> <i
                                                                            className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                                                className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                                        <a onClick={() => clickProductDetail(item)}>
                                                                            <h6>{item.title}</h6>
                                                                        </a>
                                                                        <h4>{currency.symbol}{(item.price * currency.value).toFixed(2)}</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                        </Row>
                                    </TabPanel>
                                    <TabPanel id="tab-8" className="tab-content">
                                        <Row className="product-tab">
                                        {(!data || !data.products || !data.products.items || data.products.items.length === 0 || loading) ?
                                                <>
                                                    <PostLoader />
                                                    <PostLoader />
                                                    <PostLoader />
                                                </>
                                                :
                                                <>
                                                    {data && data.products.items.slice(4,12).map((item, i) =>
                                                        <div className="tab-box" key={i}>
                                                            <div className="product-box2">
                                                                <div className="media">
                                                                    <a onClick={() => clickProductDetail(item)}>
                                                                        <Media className="img-fluid blur-up lazyload"
                                                                            src={item.images[0].src} alt="" /></a>
                                                                    <div className="media-body align-self-center">
                                                                        <div className="rating"><i className="fa fa-star"></i> <i
                                                                            className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                                                className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                                        <a onClick={() => clickProductDetail(item)}>
                                                                            <h6>{item.title}</h6>
                                                                        </a>
                                                                        <h4>{currency.symbol}{(item.price * currency.value).toFixed(2)}</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            }
                                        </Row>
                                    </TabPanel>
                                    <TabPanel id="tab-9" className="tab-content">
                                        <Row className="product-tab">
                                        {(!data || !data.products || !data.products.items || data.products.items.length === 0 || loading) ?
                                                <>
                                                    <PostLoader />
                                                    <PostLoader />
                                                    <PostLoader />
                                                </>
                                                :
                                                <>
                                                    {data && data.products.items.slice(2,10).map((item, i) =>
                                                        <div className="tab-box" key={i}>
                                                            <div className="product-box2">
                                                                <div className="media">
                                                                    <a onClick={() => clickProductDetail(item)}>
                                                                        <Media className="img-fluid blur-up lazyload"
                                                                            src={item.images[0].src} alt="" /></a>
                                                                    <div className="media-body align-self-center">
                                                                        <div className="rating"><i className="fa fa-star"></i> <i
                                                                            className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                                                className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                                        <a onClick={() => clickProductDetail(item)}>
                                                                            <h6>{item.title}</h6>
                                                                        </a>
                                                                        <h4>{currency.symbol}{(item.price * currency.value).toFixed(2)}</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
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
        </div>
    )
}

export default TabCollection