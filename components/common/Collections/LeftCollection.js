import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Slider from 'react-slick';
import { Media } from 'reactstrap';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';

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
                stock
                new
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


const LeftCollection = ({type ,border,product}) => {
    
    const curContext =  useContext(CurrencyContext);
    const currency = curContext.state;
    

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: type,
            indexFrom: 0,
            limit: 8
        }
    });
    return (
        <div className={`theme-card ${border} `}>
            <h5 className="title-border">new product</h5>
            <Slider className="offer-slider slide-1">
                <div>
                    {data && data.products.items.slice(0, product).map((product, index) =>
                        <div className="media" key={index}>
                            <a href={product.images[0].src}>
                                <Media alt="" className="img-fluid blur-up lazyload" src={product.images[0].src} /></a>
                            <div className="media-body align-self-center">
                                <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                <a href={product.images[0].src}>
                                    <h6>{product.title}</h6>
                                </a>
                                <h4>{currency.symbol}{(product.price * currency.value).toFixed(2)}</h4>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    {data && data.products.items.slice(3, 6).map((product, index) =>
                        <div className="media" key={index}>
                            <a href={product.images[0].src}>
                                <Media alt="" className="img-fluid blur-up lazyload" src={product.images[0].src} /></a>
                            <div className="media-body align-self-center">
                                <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                <a href={product.images[0].src}>
                                    <h6>{product.title}</h6>
                                </a>
                                <h4>{currency.symbol}{(product.price * currency.value).toFixed(2)}</h4>
                            </div>
                        </div>
                    )}
                </div>
            </Slider>
        </div>
    )
}

export default LeftCollection;