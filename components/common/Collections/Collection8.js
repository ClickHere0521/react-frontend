import React, { useContext } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ProductItem from '../product-box/ProductBox8';
import LeftCollection from './LeftCollection';
import { CompareContext } from '../../../helpers/Compare/CompareContext';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import CartContext from '../../../helpers/cart';

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


const Collection = ({ type, cartClass, designClass }) => {
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
        <section className={designClass}>
            <Container>
                <Row className="partition3 partition_3">
                    <Col lg="4">
                        <LeftCollection type={type} border="card-border" product={3} />
                    </Col>
                    <Col lg="4" className="center-slider border-0">
                        <div>
                            <div className="title2">
                                <h4>on sale</h4>
                                <h2 className="title-inner2">season sale</h2>
                            </div>
                                <Slider className="offer-slider slide-1 center-image-width no-arrow">
                                    {data && data.products.items.slice(0, 2).map((product, i) =>
                                        <div key={i}>
                                            <ProductItem product={product}
                                                onAddToCompareClicked={() => contextCompare.addToCompare(product)}
                                                addWishlist={() => contextWishlist.addToWish(product)}
                                                addCart={() => context.addToCart(product,quantity)} cartClass={cartClass} />
                                        </div>
                                    )}
                                </Slider>
                        </div>
                    </Col>
                    <Col lg="4">
                        <LeftCollection type={type} border="card-border" product={3} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Collection;