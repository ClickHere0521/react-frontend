import React from "react";
import CommonLayout from '../../components/shop/common-layout';
import TopCollection from '../../components/common/Collections/Collection3';
import Collection from '../../components/common/Collections/Collection1';
import CollectionTwo from '../../components/common/Collections/Collection2';
import CollectionTen from '../../components/common/Collections/Collection13';
import { withApollo } from '../../helpers/apollo/apollo'
import { Product4 } from "../../services/script";

const ProducxBox = () => {
    return (
        <CommonLayout parent="home" title="Elements" subTitle="product-box">
            <TopCollection innerClass="title2" inner="title-inner2" type="fashion" title="Product style 1" productSlider={Product4} designClass="section-b-space ratio_asos" noSlider="true" cartClass="cart-info cart-wrap" />
            <TopCollection innerClass="title2" inner="title-inner2" type="bags" title="Product style 2" productSlider={Product4} designClass="bag-product ratio_square light-layout section-b-space" cartClass="cart-detail" noSlider="true" />
            <TopCollection innerClass="title2" inner="title-inner2" type="shoes" title="Product style 3" productSlider={Product4} designClass="ratio_asos section-b-space" noSlider="true" cartClass="cart-info" />
            <TopCollection innerClass="title2" inner="title-inner2" type="videoslider" title="Product style 4" productSlider={Product4} designClass="ratio_asos metro-section portfolio-section light-layout section-b-space" noSlider="false" cartClass="cart-info cart-wrap" />
            <TopCollection innerClass="title2" inner="title-inner2" type="watch" title="Product style 5" productSlider={Product4} designClass="ratio_square section-b-space" noSlider="true" cartClass="cart-box" />
            <CollectionTwo type="tools" title="Product style 6" spanClass={true} productSlider={Product4} designClass="ratio_square tools-grey light-layout section-b-space" noSlider="true" cartClass="cart-info cart-wrap" />
            <CollectionTen type="game" title="Product style 7" productSlider={Product4} designClass="ratio_asos game-product section-b-space" noSlider="true" cartClass="cart-info cart-wrap" />
            <Collection type="gym" title="Product style 8" productSlider={Product4} designClass="ratio_square gym-product light-layout section-b-space" noSlider="true" cartClass="cart-info cart-wrap" />
            <TopCollection innerClass="title2" inner="title-inner2" type="videoslider" title="Product style 9" productSlider={Product4} designClass="ratio_asos absolute-product section-b-space" noSlider="false" cartClass="cart-info cart-wrap" />
            <Collection titleClass="title2" innerTitle="title-inner2" type="jewellery" title="Product style 10" productSlider={Product4} designClass="ratio_square j-box light-layout section-b-space" noSlider="true" cartClass="cart-info cart-wrap" />
            <Collection titleClass="title2" innerTitle="title-inner2" type="pets" title="Product style 11" productSlider={Product4} designClass="ratio_square j-box pets-box section-b-space" noSlider="true" cartClass="cart-info cart-wrap" />
        </CommonLayout>
    )
}

export default withApollo(ProducxBox);