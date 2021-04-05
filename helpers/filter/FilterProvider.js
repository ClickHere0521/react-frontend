import React, { useState } from 'react';
import FilterContext from './FilterContext';
import { useRouter } from 'next/router';

const FilterProvider = (props) => {

    const router = useRouter();
    const brand = router.query.brand; 
    const color = router.query.color; 
    const size = router.query.size;
    const category = router.query.category;
    const min = router.query.min;
    const max = router.query.max;
    let sizeParam = size ? size.split(","):null;
    let param = brand ? brand.split(","):[] 
    const [selectedCategory, setSelectedCategory] = useState(category?category:"fashion");
    const [selectedBrands, setSelectedBrands] = useState(param?param:[]);
    const [selectedColor, setSelectedColor] = useState(color?color:"");
    const [selectedSize, setSelectedSize] = useState(sizeParam?sizeParam:[]);
    const [selectedPrice, setSelectedPrice] = useState({ min:min?min:0, max: max?max:500 });
    const [isChecked, setIsChecked] = useState(true);
    const [filterChecked, setFilterChecked] = useState([{}]);
   
    const handleBrands = (brand, checked) => {
        var index = selectedBrands.indexOf(brand);

        if (index > -1) {
            setIsChecked(!isChecked);
            setFilterChecked([{ brand, checked }])
            setSelectedBrands(selectedBrands.filter((e) => (e !== brand)))

        } else {
            setIsChecked(!isChecked);
            setFilterChecked([{ brand, checked }])
            setSelectedBrands([...selectedBrands, brand])
        }

    }

    const handleSizes = (size, checked) => {

        var index = selectedSize.indexOf(size);
        if (index > -1) {
            setIsChecked(!isChecked);
            setFilterChecked([{ size, checked }])
            setSelectedSize(selectedSize.filter((e) => (e !== size)))
        } else {
            setIsChecked(!isChecked);
            setFilterChecked([{ size, checked }])
            setSelectedSize([...selectedSize, size])
        }
    }

    return (
        <FilterContext.Provider
            value={{
                ...props,
                state: selectedCategory, setFilterChecked, setSelectedColor, setSelectedCategory,setSelectedBrands , selectedBrands, selectedColor, selectedPrice, isChecked, filterChecked, selectedSize, setSelectedSize,setSelectedPrice,
                handleBrands: handleBrands,
                handleSizes: handleSizes
            }}>
            {props.children}
        </FilterContext.Provider>
    )


}

export default FilterProvider;