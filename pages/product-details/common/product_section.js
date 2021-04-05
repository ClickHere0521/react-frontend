import React, { useContext,useState } from 'react';
import { Container, Row, Col, Media,Modal,ModalBody } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
import CartContext from '../../../helpers/cart';
import {WishlistContext} from '../../../helpers/wishlist/WishlistContext';
import { CompareContext } from '../../../helpers/Compare/CompareContext';
import { useRouter } from 'next/router'

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


const ProductSection = () => {
    
    const router = useRouter();
    const curContext = useContext(CurrencyContext);
    const wishlistContext = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const symbol = curContext.state.symbol;
    const currency = curContext.state;
    const cartCtx = useContext(CartContext);
    const addToCart = cartCtx.addToCart;
    const quantity = cartCtx.quantity;
    const plusQty = cartCtx.plusQty;
    const minusQty = cartCtx.minusQty;
    const setQuantity = cartCtx.setQuantity;
    const [selectedProduct,setSelectedProduct] = useState()
    const [image, setImage] = useState('');
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const uniqueTags = [];

    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    const clickProductDetail = (product) => {
        const titleProps = product.title.split(' ').join('');
        router.push(`/product-details/${product.id}` + '-' + `${titleProps}`);
    }

    const getSelectedProduct = (item) => {
        setSelectedProduct(item)
        toggle()
    } 

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: "fashion",
            indexFrom:0,
            limit:8
        }
    });

    return (
        <section className="section-b-space ratio_asos">
            <Container>
                <Row>
                    <Col className="product-related">
                        <h2>related products</h2>
                    </Col>
                </Row>
                <Row className="search-product">
                    {(!data || !data.products || data.products.items.length === 0 || loading) ?
                        'loading'
                        :
                        <>
                            {data && data.products.items.slice(0, 6).map((product, index) =>
                                <Col xl="2" md="4" sm="6" key={index}>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href={null}>
                                                    <Media onClick={() => clickProductDetail(product)} src={product.images[0].src}
                                                        className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="back">
                                                <a href={null}><Media src={product.images[1].src}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart" title="Add to cart" onClick={() => addToCart(product,quantity)}>
                                                    <i className="fa fa-shopping-cart"></i></button>
                                                <a href="#"  onClick={() => wishlistContext.addToWish(product)}
                                                    title="Add to Wishlist"><i className="fa fa-heart" aria-hidden="true">
                                                    </i>
                                                </a>
                                                <a href="#" onClick={() => getSelectedProduct(product)} data-toggle="modal" data-target="#quick-view" title="Quick View">
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </a>
                                                <a href="#" onClick={() => compareContext.addToCompare(product)}  title="Compare">
                                                    <i className="fa fa-refresh" aria-hidden="true"></i>
                                                </a>

                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                            <a href={null}>
                                                <h6>{product.title}</h6>
                                            </a>
                                            <h4>{symbol}{product.price}</h4>
                                            <ul className="color-variant">
                                                <li className="bg-light0"></li>
                                                <li className="bg-light1"></li>
                                                <li className="bg-light2"></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            )
                            }
                        </>
                    }

                </Row>
                {selectedProduct ?
                <Modal isOpen={modal} toggle={toggle} className="modal-lg quickview-modal" centered>
                    <ModalBody>
                        <Row>
                            <Col lg="6" xs="12">
                                <div className="quick-view-img">
                                    <Media  src={`${selectedProduct.variants ?
                                        image ? image : selectedProduct.images[0].src
                                        : selectedProduct.images[0].src
                                        }`} alt="" className="img-fluid" />
                                </div>
                            </Col>
                            <Col lg="6" className="rtl-text">
                                <div className="product-right">
                                    <h2> {selectedProduct.title} </h2>
                                    <h3>{currency.symbol}{(selectedProduct.price * currency.value).toFixed(2)}</h3>
                                    {selectedProduct.variants ?
                                        <ul className="color-variant">
                                            {uniqueTags ?
                                                <ul className="color-variant">
                                                    {
                                                        selectedProduct.type === 'jewellery' || selectedProduct.type === 'nursery' || selectedProduct.type === 'beauty' || selectedProduct.type === 'electronics' || selectedProduct.type === 'goggles' || selectedProduct.type === 'watch' || selectedProduct.type === 'pets' ?
                                                            ''
                                                            :
                                                            <>
                                                                {uniqueTags ?
                                                                    <ul className="color-variant">
                                                                        {uniqueTags.map((vari, i) => {
                                                                            return (
                                                                                <li className={vari.color} key={i} title={vari.color} onClick={() => variantChangeByColor(vari.image_id, selectedProduct.images)}></li>)
                                                                        })}
                                                                    </ul> : ''}
                                                            </>
                                                    }
                                                </ul> : ''}
                                        </ul> : ''}
                                    <div className="border-product">
                                        <h6 className="product-title">product details</h6>
                                        <p>{selectedProduct.description}</p>
                                    </div>
                                    <div className="product-description border-product">
                                        {selectedProduct.size ?
                                            <div className="size-box">
                                                <ul>
                                                    {selectedProduct.size.map((size, i) => {
                                                        return <li key={i}><a href={null}>{size}</a></li>
                                                    })}
                                                </ul>
                                            </div> : ''}
                                        <h6 className="product-title">quantity</h6>
                                        <div className="qty-box">
                                            <div className="input-group">
                                                <span className="input-group-prepend">
                                                    <button type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">
                                                        <i className="fa fa-angle-left"></i>
                                                    </button>
                                                </span>
                                                <input type="text" name="quantity" value={quantity} onChange={changeQty} className="form-control input-number" />
                                                <span className="input-group-prepend">
                                                    <button type="button" className="btn quantity-right-plus" onClick={() => plusQty(selectedProduct)} data-type="plus" data-field="">
                                                        <i className="fa fa-angle-right"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-buttons">
                                        <button className="btn btn-solid" onClick={() => addToCart(selectedProduct,quantity)} >add to cart</button>
                                        <button className="btn btn-solid" onClick={() => clickProductDetail(selectedProduct)} >View detail</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
                :""}


            </Container>
        </section>
    )
}

export default ProductSection;