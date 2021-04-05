import React, { useContext, useState, useRef ,useEffect } from 'react';
import { Container, Row, Col, ModalBody, Modal, ModalHeader, Media, Input } from 'reactstrap';
import Link from 'next/link';
import Slider from 'react-slick';
import sizeChart from '../../../public/assets/images/size-chart.jpg';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext'
import CountdownComponent from '../../../components/common/widgets/countdownComponent';
import ImageZoom from '../common/image-zoom';
import CartContext from '../../../helpers/cart';


const GET_SINGLE_PRODUCTS = gql`
    query product ($id:Int!) {
        product (id:$id) {
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
            variants
            {
                id
                color
                image_id
                variant_id
                size
            }
            images
            {
                image_id
                src
            }
        }
    }
`;

const OutsideImagePage = () => {

    const context = useContext(CartContext);
    const addToCart = context.addToCart;
    const curContext = useContext(CurrencyContext);
    const symbol = curContext.state.symbol;
    const [state, setState] = useState({ nav1: null, nav2: null });
    const slider1 = useRef();
    const slider2 = useRef();
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [open, setOpen] = useState(false);
    const stock = context.stock;
    const plusQty = context.plusQty;
    const minusQty = context.minusQty;
    const quantity = context.quantity;
    const uniqueColor = [];
    const uniqueSize = [];

    const onCloseModal = () => {
        setOpen(false)
    };

    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value));
    }

    var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
        variables: {
            id: 1
        }
    });
    var products = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true
    };
    var productsnav = {
        slidesToShow: 3,
        swipeToSlide: true,
        arrows: false,
        dots: false,
        focusOnSelect: true
    };

    useEffect(() => {
        setState({
            nav1: slider1.current,
            nav2: slider2.current
        });
    }, [data]);

    const changeColorVar = (img_id) => {
        slider2.current.slickGoTo(img_id)
    }

    const { nav1, nav2 } = state;

    return (
        <section>
            <div className="collection-wrapper">
                <Container>
                    {(!data || !data.product || data.product.length === 0 || loading) ?
                        'loading'
                        :
                        <Row>
                            <Col lg="6" >
                                <Slider {...products} asNavFor={nav2} ref={slider => (slider1.current = slider)} className="product-right-slick">
                                    {data.product.variants ?
                                        data.product.images.map((vari, index) =>
                                            <div key={index}>
                                                <ImageZoom image={vari} />
                                            </div>
                                        ) :
                                        data.product.images.map((vari, index) =>
                                            <div key={index}>
                                                <ImageZoom image={vari} />
                                            </div>
                                        )}
                                </Slider>
                            </Col>
                            <Col lg="6" className="rtl-text">
                                <Row>
                                    <Col>
                                        <div className="product-right">
                                            <h2> {data.product.name} </h2>
                                            <h4>
                                                <del>{symbol}{data.product.price}</del>
                                                <span>{data.product.discount}% off</span></h4>
                                            <h3>{symbol}{data.product.price - (data.product.price * data.product.discount / 100)} </h3>
                                            {data.product.variants.map(vari => {
                                                var findItem = uniqueColor.find(x => x.color === vari.color);
                                                if (!findItem)
                                                    uniqueColor.push(vari);
                                                var findItemSize = uniqueSize.find(x => x === vari.size);
                                                if (!findItemSize)
                                                    uniqueSize.push(vari.size);
                                            })}
                                            {uniqueColor ?
                                                <ul className="color-variant">
                                                    {uniqueColor.map((vari, i) => {
                                                        return (
                                                            <li className={vari.color} key={i} title={vari.color} onClick={() => changeColorVar(i)}></li>)
                                                    })}
                                                </ul>
                                                : ''}
                                            <div className="product-description border-product">
                                                {data.product.variants ?
                                                    <div>
                                                        <h6 className="product-title size-text">select size
                                                            <span><a href={null} data-toggle="modal"
                                                                data-target="#sizemodal" onClick={toggle} >size chart</a></span></h6>
                                                        <Modal isOpen={modal} toggle={toggle} centered>
                                                            <ModalHeader toggle={toggle}>Sheer Straight Kurta
                                                            </ModalHeader>
                                                            <ModalBody>
                                                                <Media src={sizeChart} alt="size" className="img-fluid" />
                                                            </ModalBody>
                                                        </Modal>
                                                        <div className="size-box">
                                                            <ul>
                                                                {uniqueSize.map((data, i) => {
                                                                    return <li key={i}><a href={null}>{data}</a></li>
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </div> : ''}
                                                <span className="instock-cls">{stock}</span>
                                                <h6 className="product-title">quantity</h6>
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <span className="input-group-prepend">
                                                            <button type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">
                                                                <i className="fa fa-angle-left"></i>
                                                            </button>
                                                        </span>
                                                        <Input type="text" name="quantity" value={quantity} onChange={changeQty} className="form-control input-number" />
                                                        <span className="input-group-prepend">
                                                            <button type="button" className="btn quantity-right-plus" onClick={() => plusQty(data.product)} data-type="plus" data-field="">
                                                                <i className="fa fa-angle-right"></i>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-buttons" >
                                                <a href={null} className="btn btn-solid" onClick={() => addToCart(data.product, quantity)}>add to cart</a>
                                                <Link href={`/page/account/checkout`}  ><a className="btn btn-solid" onClick={() => BuynowClicked(item, quantity)}>buy now</a></Link>
                                            </div>
                                            <div className="border-product">
                                                <h6 className="product-title">product details</h6>
                                                <p>{data.product.shortDetails}</p>
                                            </div>
                                            <div className="border-product">
                                                <h6 className="product-title">share it</h6>
                                                <div className="product-icon">
                                                    <ul className="product-social">
                                                        <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a href="https://plus.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                                        <li><a href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                                        <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                                    </ul>

                                                </div>
                                            </div>
                                            <div className="border-product">
                                                <h6 className="product-title">Time Reminder</h6>
                                                <CountdownComponent />
                                            </div>
                                        </div>
                                        <Modal open={open} onClose={onCloseModal} center>
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <ModalHeader className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Sheer Straight Kurta</h5>
                                                    </ModalHeader>
                                                    <ModalBody className="modal-body">
                                                        <Media src={sizeChart} alt="" className="img-fluid" />
                                                    </ModalBody>
                                                </div>
                                            </div>
                                        </Modal>
                                        <Row className="imgae-outside-thumbnail mt-4">
                                            <Slider className="slider-nav"
                                                {...productsnav}
                                                asNavFor={nav1}
                                                ref={slider => (slider2.current = slider)}
                                            >
                                                {data.product.variants ?
                                                    data.product.images.map((vari, index) =>
                                                        <div key={index}>
                                                            <Media src={`${vari.src}`} key={index} alt={vari.alt} className="img-fluid" />
                                                        </div>
                                                    ) :
                                                    ''}
                                            </Slider>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    }
                </Container>
            </div>
        </section >
    )
}

export default OutsideImagePage;