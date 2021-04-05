import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ProductItem from '../product-box/ProductBox1';
import { Row, Col, Container } from 'reactstrap';
import CartContext from '../../../helpers/cart';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
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

const TopCollection = ({ type, title, subtitle, designClass, noSlider, cartClass }) => {
    const context = useContext(CartContext)
    const contextWishlist = useContext(WishlistContext);
    const contextCompare = useContext(CompareContext);
    const quatity = context.quatity;

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: type,
            indexFrom: 0,
            limit: 8
        }
    });


    return (
        <>
            <div className="title1 title-gradient  section-t-space">
                {subtitle ? <h4>{subtitle}</h4> : ''}
                <h2 className="title-inner1">{title}</h2>
            </div>
            <section className={designClass}>
                {noSlider ?
                    <Container>
                        <Row>
                            {data && data.products.items.slice(0, 8).map((product, index) =>
                                <Col xl="3" xs="6" key={index} >
                                    <ProductItem product={product}
                                        addCompare={() => contextCompare.addToCompare(product)}
                                        addWishlist={() => contextWishlist.addToWish(product)}
                                        addCart={() => context.addToCart(product,quatity)} key={index} cartClass={cartClass} />
                                </Col>
                            )
                            }
                        </Row>
                    </Container>
                    :
                    <>
                        <div className="title1 title-gradient  section-t-space">
                            {subtitle ? <h4>{subtitle}</h4> : ''}
                            <h2 className="title-inner1">{title}</h2>
                        </div>
                        <Container>
                            <Row className="partition-cls">
                                {data && data.products.items.slice(0, 8).map((product, index) =>
                                    <Col xl="3" xs="6" key={index}>
                                        <div>
                                            <ProductItem product={product}
                                                addCompare={() => contextCompare.addToCompare(product)}
                                                addWishlist={() => contextWishlist.addToWish(product)}
                                                addCart={() => context.addToCart(product,quatity)} key={index} />
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