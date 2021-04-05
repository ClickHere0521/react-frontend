import React, { Fragment,useContext,useState } from "react";
import { Container, Row, Col, Media,Modal ,ModalBody } from "reactstrap";
import gql from 'graphql-tag';
import CartContext from '../../../../helpers/cart';
import { WishlistContext } from '../../../../helpers/wishlist/WishlistContext';
import { CompareContext } from '../../../../helpers/Compare/CompareContext';
import { CurrencyContext } from '../../../../helpers/Currency/CurrencyContext';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
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


const MasonryProduct = ({type,cartClass}) => {

    const router = useRouter()
    const cartContext = useContext(CartContext);
    const wishlistContext = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const [productPopUp,setProductPopUp] = useState()
    const [modal, setModal] = useState(false);
    const [stock, setStock] = useState('InStock');
    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState('');
    const uniqueTags = [];
    const toggle = () => setModal(!modal);
    const curContext = useContext(CurrencyContext);
    const currency = curContext.state;
    const qty = cartContext.quantity;

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

    const singleProduct = (product) => {
        setProductPopUp(product)
        toggle()
    }

    const variantChangeByColor = (imgId, product_images) => {
        product_images.map((data) => {
            if (data.image_id == imgId) {
                setImage(data.src);
            }
        })
    }

    var { data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: type,
            indexFrom: 0,
            limit: 20
        }
    });

    const clickProductDetail = (product) => {
        const titleProps = product.title.split(' ').join('');
        router.push(`/product-details/${product.id}` + '-' + `${titleProps}`);
    }

    return (
        <Fragment>
            {data ? 
            <section className="section-b-space layout7-product">
                <Container>
                    <Row>
                        <Col md="6" sm="12" className="p-0">
                            <Row className="m-0">
                                {data && data.products.items.slice(0,2).map((product, i) =>
                                <Col sm="6" className="col-12 p-0" key={i}>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="#">
                                                    <Media src={product.images[0].src} className="img-fluid blur-up lazyload" alt="" onClick={() => clickProductDetail(product)} />
                                                </a>
                                            </div>
                                            <div className={cartClass}>
                                                <button onClick={() => cartContext.addToCart(product,qty)} title="Add to cart">
                                                    <i className="fa fa-shopping-cart" ></i>
                                                </button>
                                                <a href={null} title="Add to Wishlist" onClick={() => wishlistContext.addToWish(product)}>
                                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                                </a>
                                                <a href={null} data-toggle="modal" data-target="#quick-view" title="Quick View" onClick={() => singleProduct(product)}>
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </a>
                                                <a href={null} title="Compare" onClick={() => compareContext.addToCompare(product)}>
                                                    <i className="fa fa-refresh" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="details-product"><a href="#" onClick={() => clickProductDetail(product)}><h6>{product.title}</h6></a>
                                            <h4>${product.price} <del>$600.00</del></h4>
                                        </div>
                                    </div>
                                </Col>
                                
                                )}
                            </Row>
                            <Row className="m-0">
                                <Col className="col-12 p-0">
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="#">
                                                    <Media src={data.products.items[2].images[0].src} className="img-fluid blur-up lazyload" alt="" onClick={() => clickProductDetail(data.products.items[2])} /></a>
                                            </div>
                                            <div className={cartClass}>
                                                <button onClick={() => cartContext.addToCart(data.products.items[2],qty)} title="Add to cart">
                                                    <i className="fa fa-shopping-cart" ></i>
                                                </button> 
                                                <a href={null} title="Add to Wishlist" onClick={() => wishlistContext.addToWish(data.products.items[2])}>
                                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                                </a> 
                                                <a href={null} data-toggle="modal" data-target="#quick-view" title="Quick View" onClick={() => singleProduct(data.products.items[2])}>
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </a> 
                                                <a href={null} title="Compare" onClick={() => compareContext.addToCompare(data.products.items[2])}>
                                                    <i className="fa fa-refresh" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="details-product"><a href="#" onClick={() => clickProductDetail(data.products.items[2])}><h6>{data.products.items[2].title}</h6></a>
                                            <h4>${data.products.items[2].price}</h4></div>
                                    </div>
                                </Col>
                            </Row>
                           
                        </Col>
                        
                        <Col md="6" className="col-12 p-0">
                            <div className="product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <a href={null}><Media src={data.products.items[3].images[0].src} className="img-fluid blur-up lazyload" alt="" onClick={() => clickProductDetail(data.products.items[3])} /></a>
                                    </div>
                                    <div className={cartClass}>
                                        <button onClick={() => cartContext.addToCart(data.products.items[3],qty)} title="Add to cart">
                                            <i className="fa fa-shopping-cart" ></i>
                                        </button> 
                                        <a href={null} title="Add to Wishlist" onClick={() => wishlistContext.addToWish(data.products.items[3])}>
                                            <i className="fa fa-heart" aria-hidden="true"></i>
                                        </a> 
                                        <a href={null} data-toggle="modal" data-target="#quick-view" title="Quick View" onClick={() => singleProduct(data.products.items[3])}>
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </a> 
                                        <a href={null} title="Compare" onClick={() => compareContext.addToCompare(data.products.items[3])}>
                                            <i className="fa fa-refresh" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="details-product"><a href="#" onClick={() => clickProductDetail(data.products.items[3])}><h6>{data.products.items[3].title}</h6></a>
                                    <h4>${data.products.items[3].price}</h4></div>
                            </div>
                        </Col>
                    </Row>
                     <Row>
                        <Col md="6" className="col-12 p-0">
                            <div className="product-box">
                                <div className="img-wrapper">
                                    <div className="front">
                                        <a href={null}><Media src={data.products.items[4].images[0].src} className="img-fluid blur-up lazyload" alt="" onClick={() => clickProductDetail(data.products.items[4])} /></a>
                                    </div>
                                    <div className={cartClass}>
                                        <button onClick={() => cartContext.addToCart(data.products.items[4],qty)} title="Add to cart">
                                            <i className="fa fa-shopping-cart" ></i>
                                        </button> 
                                        <a href={null} title="Add to Wishlist" onClick={() => wishlistContext.addToWish(data.products.items[4])}>
                                            <i className="fa fa-heart" aria-hidden="true"></i>
                                        </a> 
                                        <a href={null} data-toggle="modal" data-target="#quick-view" title="Quick View" onClick={() => singleProduct(data.products.items[4])}>
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </a> 
                                        <a href={null} title="Compare" onClick={() => compareContext.addToCompare(data.products.items[4])}>
                                            <i className="fa fa-refresh" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="details-product"><a href="#" onClick={() => clickProductDetail(data.products.items[4])}><h6>{data.products.items[4].title}</h6></a>
                                    <h4>${data.products.items[4].price}</h4></div>
                            </div>
                        </Col>
                       <Col md="6" className="col-12 p-0">
                            <Row className="m-0">
                                {data && data.products.items.slice(5,9).map((product, i) =>
                                <Col sm="6" className="col-12 p-0" key={i}>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="#">
                                                    <Media src={product.images[0].src} className="img-fluid blur-up lazyload" alt="" onClick={() => clickProductDetail(product)} /></a>
                                            </div>
                                            <div className={cartClass}>
                                                <button onClick={() => cartContext.addToCart(product,qty)} title="Add to cart">
                                                    <i className="fa fa-shopping-cart" ></i>
                                                </button> 
                                                <a href={null} title="Add to Wishlist" onClick={() => wishlistContext.addToWish(product)}>
                                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                                </a> 
                                                <a href={null} data-toggle="modal" data-target="#quick-view" title="Quick View" onClick={() => singleProduct(product)}>
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </a> 
                                                <a href={null} title="Compare" onClick={() => compareContext.addToCompare(product)}>
                                                    <i className="fa fa-refresh" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="details-product"><a href="#" onClick={() => clickProductDetail(product)}><h6>{product.title}</h6></a>
                                            <h4>${product.price}</h4></div>
                                    </div>
                                </Col>
                                )}
                            </Row>
                        </Col>
                    </Row> 
                    <Modal isOpen={modal} toggle={toggle} className="modal-lg quickview-modal" centered>
                        <ModalBody>
                            {productPopUp?
                            <Row>
                                <Col lg="6" xs="12">
                                    <div className="quick-view-img">
                                        <Media src={`${productPopUp.variants ?
                                            image ? image : productPopUp.images[0].src
                                            : productPopUp.images[0].src
                                            }`} alt="" className="img-fluid" />
                                    </div>
                                </Col>
                                <Col lg="6" className="rtl-text">
                                    <div className="product-right">
                                        <h2> {productPopUp.title} </h2>
                                        <h3>{currency.symbol}{(productPopUp.price * currency.value).toFixed(2)}</h3>
                                        {productPopUp.variants ?
                                            <ul className="color-variant">
                                                {uniqueTags ?
                                                    <ul className="color-variant">
                                                        {
                                                            productPopUp.type === 'jewellery' || productPopUp.type === 'nursery' || productPopUp.type === 'beauty' || productPopUp.type === 'electronics' || productPopUp.type === 'goggles' || productPopUp.type === 'watch' || productPopUp.type === 'pets' ?
                                                                ''
                                                                :
                                                                <>
                                                                    {uniqueTags ?
                                                                        <ul className="color-variant">
                                                                            {uniqueTags.map((vari, i) => {
                                                                                return (
                                                                                    <li className={vari.color} key={i} title={vari.color} onClick={() => variantChangeByColor(vari.image_id, productPopUp.images)}></li>)
                                                                            })}
                                                                        </ul> : ''}
                                                                </>
                                                        }
                                                    </ul> : ''}
                                            </ul> : ''}
                                        <div className="border-product">
                                            <h6 className="product-title">product details</h6>
                                            <p>{productPopUp.description}</p>
                                        </div>
                                        <div className="product-description border-product">
                                            {productPopUp.size ?
                                                <div className="size-box">
                                                    <ul>
                                                        {productPopUp.size.map((size, i) => {
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
                                                        <button type="button" className="btn quantity-right-plus" onClick={() => plusQty(productPopUp)} data-type="plus" data-field="">
                                                            <i className="fa fa-angle-right"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-buttons">
                                            <button className="btn btn-solid" onClick={() => cartContext.addToCart(productPopUp,qty)} >add to cart</button>
                                            <button className="btn btn-solid" onClick={() => clickProductDetail(productPopUp)} >View detail</button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            :""}
                        </ModalBody>
                    </Modal>
                </Container>
            </section>
            :""}
        </Fragment>
    );
}

export default MasonryProduct;
