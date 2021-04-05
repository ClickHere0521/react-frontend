import React, { useState, useRef, useContext ,useEffect} from 'react';
import ProductTab from '../common/product-tab';
import Service from '../common/service'
import NewProduct from '../../shop/common/newProduct';
import Slider from 'react-slick';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ImageZoom from '../common/image-zoom';
import DetailsWithPrice from '../common/detail-price';
import Filter from '../common/filter';
import { Row, Col, Container ,Media } from 'reactstrap';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
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
            variants{
              id
              sku
              size
              color
              image_id
            }
            images{
              alt
              src
            }
        }
    }
`;

const RightSidebarPage = () => {
    const context = useContext(CartContext);
    const addToCart = context.addToCart;
    const curContext = useContext(CurrencyContext);
    const symbol = curContext.state.symbol;
    const [state, setState] = useState({ nav1: null, nav2: null });
    const slider1 = useRef();
    const slider2 = useRef();
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

    const filterClick = () => {
        document.getElementById("filter").style.left = "-15px";
    }

    const changeColorVar = (img_id) => {
        slider2.current.slickGoTo(img_id)
    }

    useEffect(() => {
        setState({
            nav1: slider1.current,
            nav2: slider2.current
        });
    }, [data]);
    const { nav1, nav2 } = state;

    const addToCartUnsafe = (product) => {
        toast.success("Item Added to Compare");
        dispatch({ type: 'ADD_TO_COMPARE', payload: product })
    }

    return (
        <section className="">
            <div className="collection-wrapper">
                <Container>
                    <Row>
                        <Col lg="9" sm="12" xs="12">
                            <div className="container-fluid">
                                <Row>
                                    <Col xl="12">
                                        <div className="filter-main-btn mb-2">
                                            <span onClick={filterClick} className="filter-btn" >
                                                <i className="fa fa-filter" aria-hidden="true"></i> filter</span>
                                        </div>
                                    </Col>
                                </Row>
                                {(!data || !data.product || data.product.length === 0 || loading) ?
                                    'loading'
                                    :
                                    <Row>
                                        <Col lg="6" className="product-thumbnail">
                                            <Slider {...products} asNavFor={nav2} ref={slider => (slider1.current = slider)} className="product-slick">
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
                                        </Col>
                                        <Col lg="6" className="rtl-text" >
                                            <DetailsWithPrice symbol={symbol} changeColorVar={changeColorVar} item={data.product} navOne={state.nav1} addToCartClicked={addToCart} BuynowClicked={addToCartUnsafe} />
                                        </Col>
                                    </Row>
                                }

                            </div>
                            <ProductTab />
                        </Col>
                        <Col sm="3" className="collection-filter">
                            <Filter />
                            <Service />
                            {/* <!-- side-bar single product slider start --> */}
                            <NewProduct />
                            {/* <!-- side-bar single product slider end --> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default RightSidebarPage;