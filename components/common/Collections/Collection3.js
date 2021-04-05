import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ProductItems from '../product-box/ProductBox1';
import { Row, Col, Container, Media } from 'reactstrap';
import CartContext from '../../../helpers/cart';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import PostLoader from '../PostLoader';
import { CompareContext } from '../../../helpers/Compare/CompareContext';
import search from '../../../public/assets/images/empty-search.jpg'


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

const TopCollection = ({ type, title, subtitle, designClass, noSlider, cartClass, productSlider, titleClass, noTitle, innerClass, inner, backImage }) => {

    const context = useContext(CartContext)
    const contextWishlist = useContext(WishlistContext);
    const comapreList = useContext(CompareContext);
    const quantity = context.quantity;
    const [delayProduct,setDelayProduct] = useState(true)

    var { loading, data } =  useQuery(GET_PRODUCTS, {
        variables: {
            type: type,
            indexFrom: 0,
            limit: 8
        }
    });
    
    useEffect(() => {
        if (data === undefined) {
            noSlider === false;
        } else {
            noSlider === true;
        }
        
        setTimeout(() => {
            setDelayProduct(false)  
        }, 5000);

    }, [delayProduct])
    return (
        <>
            <section className={designClass}>
                {noSlider ?
                    <Container>
                        <Row>
                            <Col>
                                {
                                    noTitle === "null" ?
                                        ""
                                        :
                                        <div className={innerClass}>
                                            {subtitle ? <h4>{subtitle}</h4> : ''}
                                            <h2 className={inner}>{title}</h2>
                                            {titleClass ?
                                                <hr role="tournament6" />
                                                :
                                                <div className="line"></div>
                                            }
                                        </div>
                                }

                                {(delayProduct) ?

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
                                
                                <Slider {...productSlider} className="product-m no-arrow">
                                    
                                        
                                        {data && data.products.items.map((product, i) =>
                                            <div key={i}>
                                                <ProductItems product={product}
                                                    title={title}
                                                    addWishlist={() => contextWishlist.addToWish(product)}
                                                    addCart={() => context.addToCart(product, quantity)}
                                                    addCompare={() => comapreList.addToCompare(product)}
                                                    cartClass={cartClass} backImage={backImage} />
                                            </div>
                                            )}

                                      
                                </Slider>
                                }
                            </Col>
                        </Row>
                    </Container>
                    :
                    <>
                        {title ? <div className="title1 title-gradient  section-t-space">
                            <h4>{subtitle}</h4>
                            <h2 className="title-inner1">{title}</h2>
                            <hr role="tournament6" />
                        </div> : ''}
                        <Container>
                            <Row className="margin-default">
                                {(!data || !data.products || !data.products.items || !data.products.items.length === 0 || !loading) ?
                                    
                                    
                                    <div className="row margin-default">
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
                                    data && data.products.items.slice(0, 8).map((product, index) =>
                                        <Col xl="3" sm="6" key={index}>
                                            <div>
                                                <ProductItems product={product} backImage={backImage}
                                                    addCompare={() => comapreList.addToCompare(product)}
                                                    addWishlist={() => contextWishlist.addToWish(product)}
                                                    title={title}
                                                    cartClass={cartClass}
                                                    addCart={() => context.addToCart(product, quantity)} key={index} />
                                            </div>
                                        </Col>
                                    )
                                    
                                }
                            </Row>
                        </Container>
                    </>
                }

            </section>
        </>
    )
}


export default TopCollection;