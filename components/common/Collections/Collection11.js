import React, { Fragment, useContext ,useState } from 'react';
import { Container, Row, Col, Media ,Modal ,ModalBody,ModalHeader } from 'reactstrap';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import CartContext from '../../../helpers/cart';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import { CompareContext } from '../../../helpers/Compare/CompareContext';
import PostLoader from '../PostLoader';
import { useRouter } from 'next/router';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';

const GET_PRODUCTS = gql`
    query  products($type:_CategoryType!,$indexFrom:Int! ,$limit:Int!) {
        products (type: $type,indexFrom:$indexFrom ,limit:$limit){
            items{
                id
                title
                description
                type
                brand
                category 
                price
                new
                sale
                discount
                stock
                variants{
                    id
                    color
                    image_id
                    variant_id
                    size
                }
                images{
                    image_id
                    src
                }
            }
        }
    }
`;

const ProductSection = ({ type }) => {

    const cartContext = useContext(CartContext);
    const wishlistContext = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const [modal, setModal] = useState(false);
    const [modalCompare, setModalCompare] = useState(false);
    const toggle = () => setModal(!modal);
    const toggleCompare = () => setModalCompare(!modalCompare)
    const curContext = useContext(CurrencyContext);
    const currency = curContext.state;
    const qty = cartContext.quantity;
    const router = useRouter();
    const [stock, setStock] = useState('InStock');
    const [quantity, setQuantity] = useState(1);

    const minusQty = () => {
        if (quantity > 1) {
            setStock('InStock')
            setQuantity(quantity - 1);
        }
    }

    const plusQty = (product) => {
        if (product.stock >= quantity) {
            setQuantity(quantity + 1);
        } else {
            setStock('Out of Stock !')
        }
    }

    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    const clickProductDetail = (product) => {
        const titleProps = product.title.split(' ').join('');
        router.push(`/product-details/${product.id}` + '-' + `${titleProps}`);
    }

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: type,
            indexFrom: 0,
            limit: 8
        }
    });

    return (
        <Fragment>
            <section className="section-b-space box-product">
                <div className="full-box">
                    <Container>
                        <div className="title4">
                            <h2 className="title-inner4">special products</h2>
                            <div className="line">
                                <span></span>
                            </div>
                        </div>
                        <Row>
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
                                data && data.products.items.slice(0, 4).map((product, index) =>
                                    <Col xl="3" md="6" sm="12" key={index}>
                                        <div className="theme-card">
                                            <div className="offer-slider">
                                                <div className="">
                                                    <div className="product-box2 product-box">
                                                        <div className="media img-wrapper">
                                                            <div className="front">
                                                                <a href={null}>
                                                                    <Media src={product.images[0].src}
                                                                        className="img-fluid blur-up lazyload" alt="" /></a>
                                                            </div>
                                                            <div className="back">
                                                                <a onClick={() => clickProductDetail(product)}><Media
                                                                    src={product.images[1].src}
                                                                    className="img-fluid blur-up lazyload" alt="" /></a>
                                                            </div>
                                                            <div className="media-body align-self-center">
                                                                <div className="rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <a onClick={() => clickProductDetail(product)}>
                                                                    <h6>{product.title}</h6>
                                                                </a>
                                                                <h4>{currency.symbol}{(product.price * currency.value).toFixed(2)}</h4>
                                                                <div className="cart-bottom">
                                                                    <button data-toggle="modal" data-target="#addtocart" onClick={() => cartContext.addToCart(product,qty)}
                                                                        title="Add to cart"><i className="fa fa-shopping-cart"></i></button>
                                                                    <a href={null} title="Add to Wishlist" onClick={() => wishlistContext.addToWish(product)}><i
                                                                        className="fa fa-heart" aria-hidden="true"></i></a>
                                                                    <a href={null} data-toggle="modal" data-target="#quick-view" onClick={toggle}
                                                                        title="Quick View"><i className="fa fa-plus-circle"
                                                                            aria-hidden="true"></i></a>
                                                                    <a href={null} title="Compare" onClick={toggleCompare}><i className="fa fa-refresh"
                                                                        aria-hidden="true"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-box2 product-box">
                                                        <div className="media img-wrapper">
                                                            <div className="front">
                                                                <a href={null}>
                                                                    <Media
                                                                        src={product.images[0].src}
                                                                        className="img-fluid blur-up lazyload" alt="" /></a>
                                                            </div>
                                                            <div className="back">
                                                                <a href={null}>
                                                                    <Media src={product.images[1].src}
                                                                        className="img-fluid blur-up lazyload" alt="" /></a>
                                                            </div>
                                                            <div className="media-body align-self-center">
                                                                <div className="rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                </div>
                                                                <a onClick={() => clickProductDetail(product)}>
                                                                    <h6>{product.title}</h6>
                                                                </a>
                                                                <h4>{currency.symbol}{(product.price * currency.value).toFixed(2)}</h4>
                                                                <div className="cart-bottom">
                                                                    <button data-toggle="modal" data-target="#addtocart"
                                                                        title="Add to cart" onClick={() => cartContext.addToCart(product, qty)}>
                                                                        <i className="fa fa-shopping-cart"></i></button>
                                                                    <a href={null} title="Add to Wishlist">
                                                                        <i className="fa fa-heart" aria-hidden="true" onClick={() => wishlistContext.addToWish(product)}></i></a>
                                                                    <a href={null} data-toggle="modal" data-target="#quick-view" onClick={toggle}
                                                                        title="Quick View"><i className="fa fa-plus-circle"
                                                                            aria-hidden="true"></i></a>
                                                                    <a href={null} title="Compare" onClick={toggleCompare}><i className="fa fa-refresh"
                                                                        aria-hidden="true"></i></a>
                                                                </div>
                                                                <Modal isOpen={modalCompare} toggle={toggleCompare} className="modal-content" centered>
                                                                    <ModalHeader toggle={toggleCompare}>Quick View</ModalHeader>
                                                                    <ModalBody>
                                                                        <Row className="compare-modal">
                                                                            <Col lg="12">
                                                                                <div className="media">
                                                                                    <Media src={`${product.variants ?
                                                                                        product.images[0].src
                                                                                        : product.images[0].src
                                                                                        }`} alt="" className="img-fluid" />
                                                                                    <div className="media-body align-self-center text-center">
                                                                                        <h5><i className="fa fa-check"></i>Item <span>{product.title}</span>
                                                                                            <span>successfully added to your Compare list</span>
                                                                                        </h5>
                                                                                        <div className="buttons d-flex justify-content-center">
                                                                                            <Link href="/page/compare">
                                                                                                <a href={null} className="btn-sm btn-solid" onClick={() => compareContext.addToCompare(product)}>
                                                                                                    View Compare list
                                                                                                </a>
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                    </ModalBody>
                                                                </Modal>
                                                                <Modal isOpen={modal} toggle={toggle} className="quikeview-modal" size="lg" centered>
                                                                    <ModalHeader toggle={toggle}>Quick View</ModalHeader>
                                                                    <ModalBody>
                                                                        <Row>
                                                                            <Col lg="6" xs="12">
                                                                                <div className="quick-view-img">
                                                                                    <Media src={`${product.variants ?
                                                                                        product.images[0].src
                                                                                        : product.images[0].src
                                                                                        }`} alt="" className="img-fluid" />
                                                                                </div>
                                                                            </Col>
                                                                            <Col lg="6" className="rtl-text">
                                                                                <div className="product-right">
                                                                                    <h2> {product.title} </h2>
                                                                                    <h3>{currency.symbol}{(product.price * currency.value).toFixed(2)}</h3>
                                                                                    {product.variants ?
                                                                                        <ul className="color-variant">
                                                                                            {product.variants.map((vari, i) =>
                                                                                                <li className={vari.color} key={i} title={vari.color} onClick={() => onClickHandle(vari.images)}></li>)
                                                                                            }
                                                                                        </ul> : ''}
                                                                                    <div className="border-product">
                                                                                        <h6 className="product-title">product details</h6>
                                                                                        <p>{product.shortDetails}</p>
                                                                                    </div>
                                                                                    <div className="product-description border-product">
                                                                                        {product.size ?
                                                                                            <div className="size-box">
                                                                                                <ul>
                                                                                                    {product.size.map((size, i) => {
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
                                                                                                    <button type="button" className="btn quantity-right-plus" onClick={() => plusQty(product)} data-type="plus" data-field="">
                                                                                                        <i className="fa fa-angle-right"></i>
                                                                                                    </button>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product-buttons">
                                                                                        <button className="btn btn-solid" onClick={() => cartContext.addToCart(product, quantity)} >add to cart</button>
                                                                                        <button className="btn btn-solid" onClick={clickProductDetail} >View detail</button>
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                    </ModalBody>
                                                                </Modal>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )}
                        </Row>
                    </Container>
                </div>
            </section>
        </Fragment>
    )
}

export default ProductSection;