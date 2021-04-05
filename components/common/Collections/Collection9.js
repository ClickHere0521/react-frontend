import React, { Fragment, useContext } from 'react';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import { Media, Container, Col, Row } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
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
                stock
                new
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

const ProductSlider = ({ type }) => {

    const curContext = useContext(CurrencyContext);
    const currency = curContext.state;
    const router = useRouter();
    
    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: type,
            indexFrom: 0,
            limit: 10
        }
    });


    const clickProductDetail = (product) => {
        const titleProps = product.title.split(' ').join('');
        router.push(`/product-details/${product.id}` + '-' + `${titleProps}`);
    }

    return (
        <Fragment>
            <section className={`${type!=='fashion' &&  type !=='kids' ?'section-b-space':''}`}>
                <Container>
                    <Row className="multiple-slider">
                        <Col lg="3" sm="6">
                            <div className="theme-card">
                                <h5 className="title-border">new products</h5>
                                    <Slider className="offer-slider slide-1">
                                        <div>
                                            {data && data.products.items.slice(0, 3).map((product, index) =>
                                                <div className="media" key={index}>
                                                    <a onClick={() => clickProductDetail(product)}><Media className="img-fluid blur-up lazyload" src={product.images[0].src} alt="" /></a>
                                                    <div className="media-body align-self-center">
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                        <a onClick={() => clickProductDetail(product)}>
                                                            <h6>{product.title}</h6>
                                                        </a>
                                                        <h4>{currency.symbol}{product.price - (product.price * product.discount / 100)}
                                                            <del><span className="money">{currency.symbol}{product.price}</span></del>
                                                        </h4>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            {data && data.products.items.slice(4, 7).map((product, index) =>
                                                <div className="media" key={index}>
                                                    <a onClick={() => clickProductDetail(product)}>
                                                        <Media className="img-fluid blur-up lazyload" src={product.images[0].src} alt="" /></a>
                                                    <div className="media-body align-self-center">
                                                        <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                        <a onClick={() => clickProductDetail(product)}>
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
                        <Col lg="3" sm="6">
                            <div className="theme-card">
                                <h5 className="title-border">feature product</h5>
                                    <Slider className="offer-slider slide-1">
                                        <div>
                                            {data && data.products.items.slice(7, 10).map((product, index) =>
                                                <div className="media" key={index}>
                                                    <a onClick={() => clickProductDetail(product)}><Media className="img-fluid blur-up lazyload" src={product.images[0].src} alt="" /></a>
                                                    <div className="media-body align-self-center">
                                                        <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                        <a onClick={() => clickProductDetail(product)}>
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
                                            {data && data.products.items.slice(4, 7).map((product, index) =>
                                                <div className="media" key={index}>
                                                    <a onClick={() => clickProductDetail(product)}><Media className="img-fluid blur-up lazyload" src={product.images[0].src} alt="" /></a>
                                                    <div className="media-body align-self-center">
                                                        <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                        <a onClick={() => clickProductDetail(product)}>
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
                        <Col lg="3" sm="6">
                            <div className="theme-card">
                                <h5 className="title-border">best seller</h5>
                                    <Slider className="offer-slider slide-1">
                                        <div>
                                            {data && data.products.items.slice(0, 3).map((product, index) =>
                                                <div className="media" key={index}>
                                                    <a onClick={() => clickProductDetail(product)}><Media className="img-fluid blur-up lazyload" src={product.images[0].src} alt="" /></a>
                                                    <div className="media-body align-self-center">
                                                        <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                        <a onClick={() => clickProductDetail(product)}>
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
                                            {data && data.products.items.slice(4, 7).map((product, index) =>
                                                <div className="media" key={index}>
                                                    <a onClick={() => clickProductDetail(product)}><Media className="img-fluid blur-up lazyload" src={product.images[0].src} alt="" /></a>
                                                    <div className="media-body align-self-center">
                                                        <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                        <a onClick={() => clickProductDetail(product)}>
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
                        <Col lg="3" sm="6">
                            <div className="theme-card">
                                <h5 className="title-border">on sell</h5>
                               
                                    <Slider className="offer-slider slide-1">
                                        <div>
                                            {data && data.products.items.slice(0, 3).map((product, index) =>
                                                <div className="media" key={index}>
                                                    <a onClick={() => clickProductDetail(product)}><Media className="img-fluid blur-up lazyload" src={product.images[0].src} alt="" /></a>
                                                    <div className="media-body align-self-center">
                                                        <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                        <a onClick={() => clickProductDetail(product)}>
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
                                            {data && data.products.items.slice(4, 7).map((product, index) =>
                                                <div className="media" key={index}>
                                                    <a onClick={() => clickProductDetail(product)}><Media className="img-fluid blur-up lazyload" src={product.images[0].src} alt="" /></a>
                                                    <div className="media-body align-self-center">
                                                        <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                        <a onClick={() => clickProductDetail(product)}>
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
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}

export default ProductSlider;
