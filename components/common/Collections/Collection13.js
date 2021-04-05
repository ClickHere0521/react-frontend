import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ProductItem from '../product-box/ProductBox6';
import CartContext from '../../../helpers/cart';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import PostLoader from '../PostLoader'
import Slider from 'react-slick';
import { Product6 } from '../../../services/script';
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

const CollectionTen = ({ type, cartClass, title }) => {
    const context = useContext(CartContext)
    const contextWishlist = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const quantity = context.quantity;

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: type,
            indexFrom: 0,
            limit: 8
        }
    });

    return (
        <>
            <section className="game-product p-t-0 ratio_asos">
                {title ?
                    <div className="title2">
                        <h2 className="title-inner2">{title}</h2>
                    </div>
                    : ''
                }

                <Container>
                    <Row>
                        <Col>
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
                            <Slider {...Product6} className="product-slider-5 product-m no-arrow">
                                

                                    {data && data.products.items.slice(0, 5).map((product, index) =>
                                        <ProductItem product={product}
                                            addToComapre={() => compareContext.addToCompare(product)}
                                            addCart={() => context.addToCart(product, quantity)} key={index}
                                            addWishlist={() => contextWishlist.addToWish(product)}
                                            cartclassName={cartClass} />
                                    )}
                                    </Slider>
                                    
                                }
                          
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CollectionTen;