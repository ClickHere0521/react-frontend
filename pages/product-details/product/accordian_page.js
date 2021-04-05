import React, { useContext, useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import Slider from 'react-slick';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import CartContext from '../../../helpers/cart';
import ImageZoom from '../common/image-zoom';
import DetailsWithPrice from '../common/detail-price';
import DetailBox from '../common/detail-box';
import AccordianExample from '../common/accordian_exple';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';

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
const AccordianPage = () => {

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

    useEffect(() => {
        setState({
            nav1: slider1.current,
            nav2: slider2.current
        });
    }, [data]);

    const addToCartUnsafe = (product) => {
        toast.success("Item Added to Compare");
        dispatch({ type: 'ADD_TO_COMPARE', payload: product })
    }

    const { nav1, nav2 } = state;

    return (
        <section>
            <div className="collection-wrapper">
                <Container>
                    {(!data || !data.product || data.product.length === 0 || loading) ?
                        'loading'
                        :
                        <Row className="leftImage">
                            <Col lg="4">
                                <Row>
                                    <Col>
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
                                </Row>

                                <Row>
                                    <Col xs="12">
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
                                </Row>
                            </Col>
                            <Col lg="4">
                                <AccordianExample />
                            </Col>
                            <Col lg="4">
                                <DetailBox symbol={symbol} item={data.product} />
                            </Col>
                        </Row>
                    }
                </Container>
            </div>
        </section>
    )
}

export default AccordianPage;