import React, { useContext } from 'react';
import { Container, Row } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ProductItem from '../product-box/ProductBox11';
import CartContext from '../../../helpers/cart';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import PostLoader from '../PostLoader'
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
                picture
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

const CollectionTen = ({ type }) => {
    const context = useContext(CartContext)
    const contextWishlist = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const quantity = context.quantity;

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: type,
            indexFrom: 0,
            limit: 12
        }
    });

    return (
        <>
            <section className="section-b-space p-t-0 ratio_asos">
                <Container>
                    <Row className="game-product grid-products">

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
                                data && data.products.items.slice(0, 12).map((product, index) =>
                                        <ProductItem product={product} 
                                            addToCompare={() => compareContext.addToCompare(product)}
                                            key={index}
                                            addWishlist={() => contextWishlist.addToWish(product)}
                                            addCart={() => context.addToCart(product,quantity)} />
                                )
                        }

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CollectionTen;