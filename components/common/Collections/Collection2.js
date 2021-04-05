import React, { useContext } from 'react';
import Slider from 'react-slick';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ProductItem from '../product-box/ProductBox3';
import { Row, Col, Container } from 'reactstrap';
import CartContext from '../../../helpers/cart';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import { CompareContext } from '../../../helpers/Compare/CompareContext';
import PostLoader from '../PostLoader';

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
const TopCollection = ({ type, title, subtitle, designClass, noSlider ,spanClass ,productSlider }) => {
    const context = useContext(CartContext)
    const contextWishlist = useContext(WishlistContext);
    const contextCompare = useContext(CompareContext);
    const quantity = context.quantity;

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: type,
            indexFrom:0,
            limit:8
        }
    });


    return (
        <>
            <section className={designClass}>
                {noSlider ?
                    <Container>
                        <Row>
                            <Col>
                                <div className="title3">
                                    {subtitle ? <h4>{subtitle}</h4> : ''}
                                    <h2 className="title-inner3">{title}</h2>
                                    <div className="line"></div>
                                </div>
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
                                    <Slider {...productSlider} className="product-5 product-m no-arrow">
                                        {data && data.products.items.slice(0, 8).map((product, index) =>
                                            <div key={index}>
                                                <ProductItem product={product} 
                                                    spanClass={spanClass}
                                                    addToCompare={() => contextCompare.addToCompare(product)}
                                                    addWishlist={() => contextWishlist.addToWish(product)}
                                                    addCart={() => context.addToCart(product,quantity)} />
                                            </div>
                                        )
                                        }
                                    </Slider>
                                }
                            </Col>
                        </Row>
                    </Container>
                    :
                    <>
                        <div className="title1 title-gradient  section-t-space">
                            {subtitle ? <h4>{subtitle}</h4> : ''}
                            <h2 className="title-inner1">{title}</h2>
                            <hr role="tournament6" />
                        </div>
                        <Container>
                            <Row>
                                <Col>
                                    <Slider {...productSlider} className="product-m no-arrow">
                                        {(!data || !data.products || !data.products.items || data.products.items.length === 0 || loading) ?
                                            <>
                                                <PostLoader />
                                                <PostLoader />
                                                <PostLoader />
                                            </>
                                            :
                                            data && data.products.items.slice(0, 8).map((product, index) =>
                                                <ProductItem product={product} 
                                                    spanClass={spanClass}
                                                    addToCompare={() => contextCompare.addToCompare(product)}
                                                    addWishlist={() => contextWishlist.addToWish(product)}
                                                    key={index}
                                                    addCart={() => context.addToCart(product,quantity)} />
                                            )
                                        }
                                    </Slider>
                                </Col>
                            </Row>
                        </Container>
                    </>
                }

            </section>
        </>
    )
}


export default TopCollection;