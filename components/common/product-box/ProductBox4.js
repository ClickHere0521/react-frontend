import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Media, Modal, ModalHeader, ModalBody, Input, Row, Col } from 'reactstrap';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
import CartContext from '../../../helpers/cart';

const ProductBox4 = ({ product, addToCompare, addCart, addWishlist }) => {
    // eslint-disable-next-line
    const router = useRouter();
    const cartContext = useContext(CartContext);
    const plusQty = cartContext.plusQty;
    const minusQty = cartContext.minusQty;
    const quantity = cartContext.quantity;
    const setQuantity = cartContext.setQuantity;
    const qty = 1
    const [image, setImage] = useState('');
    const [modalCompare, setModalCompare] = useState(false);
    const [modal, setModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setModal(!modal);
    const toggleCompare = () => setModalCompare(!modalCompare);

    const curContext = useContext(CurrencyContext);
    const currency = curContext.state;
    const uniqueTags = [];

    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    const clickProductDetail = () => {
        const titleProps = product.title.split(' ').join('');
        router.push(`/product-details/${product.id}` + '-' + `${titleProps}`);
    }

    const addQty = (pro, quantity) => {
        if (isOpen) {
            setIsOpen(!isOpen)
        } else {
            setIsOpen(!isOpen)
        }
        addCart(pro, quantity);

    }

    const plusProduct = (product, quantity) => {
        const qty = quantity + 1;
        plusQty(product)
        addCart(product, qty);
    }

    const minusProduct = (quantity) => {
        if (quantity === 1) {
            setIsOpen(!isOpen)
        }
        setQuantity(quantity)
        minusQty();
    }

    let RatingStars = []
    for (var i = 0; i < product.rating; i++) {
        RatingStars.push(<i className="fa fa-star" key={i}></i>)
    }

    return (
        <>
            <div className="product-box product-wrap">
                <div className="img-wrapper">
                    <div className="lable-block">
                        {(product.new === 'true') ? <span className="lable3">new</span> : ''}
                        {(product.sale === 'true') ? <span className="lable4">on sale</span> : ''}
                    </div>
                    <div className="front" onClick={clickProductDetail}>
                        <Media src={`${image ?
                            image : product.images[0].src
                            }`}
                            className="img-fluid"
                            alt="" />
                    </div>
                    <div className="cart-info cart-wrap">
                        <a href={null} onClick={addWishlist} title="Add to Wishlist">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <a href={null} data-toggle="modal" data-target="#quick-view" title="Quick View" onClick={toggle} ><i
                            className="fa fa-search" aria-hidden="true"></i></a>

                        <a href={null} title="Compare" onClick={toggleCompare}><i className="fa fa-refresh"
                            aria-hidden="true"></i></a>
                    </div>
                    <div className="addtocart_btn">
                        <button className="add-button add_cart" title="Add to cart" onClick={() => addQty(product, quantity)}>
                            add to cart
                                    </button>
                        <div className={`qty-box cart_qty ${isOpen ? 'open' : ''}`}>
                            <div className="input-group">
                                <span className="input-group-prepend">
                                    <button type="button" className="btn quantity-left-minus" onClick={() => minusProduct(quantity)} data-type="minus" data-field="">
                                        <i className="fa fa-angle-left"></i>
                                    </button>
                                </span>
                                <input type="text" name="quantity" value={quantity} onChange={() => setQuantity(quantity)} className="form-control input-number" />
                                <span className="input-group-prepend">
                                    <button type="button" className="btn quantity-right-plus" onClick={() => plusProduct(product, quantity)} data-type="plus" data-field="">
                                        <i className="fa fa-angle-right"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-detail text-center">
                    <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                        className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                    </div>
                    <a onClick={clickProductDetail}>
                        <h6>Slim Fit Cotton Shirt</h6>
                    </a>
                    <h4>{currency.symbol}{((product.price - (product.price * product.discount / 100))*currency.value).toFixed(2)}
                        <del><span className="money">{currency.symbol}{(product.price * currency.value).toFixed(2) }</span></del>
                    </h4>
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} className="modal-lg quickview-modal" centered>
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                    <Row>
                        <Col lg="6" xs="12">
                            <div className="quick-view-img">
                                <Media src={`${product.variants ?
                                    image ? image : product.images[0].src
                                    : product.images[0].src
                                    }`} alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg="6" className="rtl-text">
                            <div className="product-right">
                                <h2> {product.title} </h2>
                                <h3>{currency.symbol}{(product.price * currency.value).toFixed(2) }</h3>
                                {product.variants ?
                                    <ul className="color-variant">
                                        {uniqueTags ?
                                            <ul className="color-variant">
                                                {uniqueTags.map((vari, i) => {
                                                    return (
                                                        <li className={vari.color} key={i} title={vari.color} onClick={() => variantChangeByColor(vari.image_id, product.images)}></li>)
                                                })}
                                            </ul> : ''}
                                    </ul> : ''}
                                <div className="border-product">
                                    <h6 className="product-title">product details</h6>
                                    <p>{product.description}</p>
                                </div>
                                <div className="product-description border-product">
                                    {product.size ?
                                        <div className="size-box">
                                            <ul>
                                                {product.size.map((size, i) => {
                                                    return <li key={i}><a href="#!">{size}</a></li>
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
                                            <Input type="text" name="quantity" value={quantity} onChange={() =>changeQty()} className="form-control input-number" />
                                            <span className="input-group-prepend">
                                                <button type="button" className="btn quantity-right-plus" onClick={() => plusQty(product)} data-type="plus" data-field="">
                                                    <i className="fa fa-angle-right"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-buttons">
                                    <button className="btn btn-solid" onClick={() => addCart(product, quantity)} >add to cart</button>
                                    <button className="btn btn-solid" onClick={clickProductDetail} >View detail</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
            <Modal isOpen={modalCompare} toggle={toggleCompare} centered>
                <ModalHeader toggle={toggleCompare}>Quick View</ModalHeader>
                <ModalBody>
                    <Row className="compare-modal">
                        <Col lg="12">
                            <div className="media">
                                <Media src={`${product.variants ?
                                    image ? image : product.images[0].src
                                    : product.images[0].src
                                    }`} alt="" className="img-fluid" />
                                <div className="media-body align-self-center text-center">
                                    <h5><i className="fa fa-check"></i>Item <span>{product.title}</span>
                                        <span>successfully added to your Compare list</span>
                                    </h5>
                                    <div className="buttons d-flex justify-content-center">
                                        <Link href="/page/compare">
                                            <a href={null} className="btn-sm btn-solid" onClick={addToCompare}>
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
        </>
    )
}

export default ProductBox4;