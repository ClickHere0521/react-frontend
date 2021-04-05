import React, {useState, useContext, useEffect } from 'react';
import InputRange from 'react-input-range';
import FilterContext from '../../../helpers/filter/FilterContext';
import { useRouter } from 'next/router';


const Price = () => {

    const context = useContext(FilterContext);
    const price = context.selectedPrice;
    const router = useRouter();
    const setSelectedPrice = context.setSelectedPrice;
    const [url, setUrl] = useState();
    useEffect(() => {
        const pathname = window.location.pathname;
        setUrl(pathname)
    }, []);

    return (
        <div className="collection-collapse-block border-0 open">
            <h3 className="collapse-block-title">price</h3>
            <div className="collection-collapse-block-content">
                <div className="wrapper mt-3">
                    <div className="range-slider">
                        <InputRange
                            maxValue={500}
                            minValue={0}
                            value={price}
                            onChange={(price) => {
                                setSelectedPrice(price), router.push(`${url}?category=${context.state}&brand=${context.selectedBrands}&color=${context.selectedColor}&size=${context.selectedSize}&minPrice=${context.selectedPrice.min}&maxPrice=${context.selectedPrice.max}`)}}
                            onChangeComplete={(price) => {
                                context.setSelectedPrice(price), router.push(`${url}?category=${context.state}&brand=${context.selectedBrands}&color=${context.selectedColor}&size=${context.selectedSize}&minPrice=${context.selectedPrice.min}&maxPrice=${context.selectedPrice.max}`)}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price;