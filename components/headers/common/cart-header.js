import React, { Fragment, useContext } from 'react';
import Link from 'next/link';
import CartContext from '../../../helpers/cart';
import { Media } from 'reactstrap';

const CartHeader = ({ item, symbol }) => {
    const context = useContext(CartContext);
    
    return (
        <Fragment>
            <li >
                <div className="media">
                    <Link href={'/product/' + item.id}>
                        <a>
                            <Media alt="" className="mr-3" src={`${item.images[0].src}`} />
                        </a>
                    </Link>
                    <div className="media-body">
                        <Link href={'/product/' + item.id}>
                            <a><h4>{item.name}</h4></a>
                        </Link>
                        
                        <h4><span>{item.qty} x {symbol} {(item.price - (item.price * item.discount / 100)).toFixed(2)}</span></h4>
                    </div>
                </div>
                <div className="close-circle">
                    <a href={null} onClick={() => context.removeFromCart(item)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
            </li>
        </Fragment>
    )
}




export default CartHeader;
