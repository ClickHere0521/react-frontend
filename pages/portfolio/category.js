import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import ShoesCategory from '../layouts/Shoes/components/Category';
import ShoesCategoryTwo from '../layouts/Shoes/components/Category-two';
import BagsCategory from "../layouts/Bags/common/Category-2";
import WatchCategory from "../layouts/Watch/components/Category";
import ShoesCategoryThree from "../layouts/Shoes/components/Category-three";


const Category = () => {
    return (
        <CommonLayout parent="home" title="elements" subTitle="category">
            <ShoesCategory />
            <div className="section-b-space">
                <ShoesCategoryTwo />
            </div>
            <BagsCategory />
            <WatchCategory />
            <div className="section-b-space">
                <ShoesCategoryThree />
            </div>
        </CommonLayout>
    )
}

export default Category;