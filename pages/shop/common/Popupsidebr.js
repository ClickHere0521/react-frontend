import React, { useState, useContext, useEffect } from 'react';
import { Col, Row, Media, Button, Spinner } from 'reactstrap';
import Menu2 from '../../../public/assets/images/mega-menu/2.jpg';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import FilterContext from '../../../helpers/filter/FilterContext';
import ProductItem from '../../../components/common/product-box/ProductBox1';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
import { useRouter } from 'next/router';
import PostLoader from '../../../components/common/PostLoader';
import CartContext from '../../../helpers/cart';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import { CompareContext } from '../../../helpers/Compare/CompareContext';
import FilterPage from './filter';

const GET_PRODUCTS = gql`
    query  products($type:_CategoryType!,$indexFrom:Int! ,$limit:Int!,$color:String!,$brand:[String!]!,$sortBy:_SortBy!,$priceMax:Int!,$priceMin:Int!) {
        products (type: $type ,indexFrom:$indexFrom ,limit:$limit ,color:$color ,brand:$brand ,sortBy:$sortBy ,priceMax:$priceMax,priceMin:$priceMin){
            total
            hasMore
            items {
                id
                title
                description
                type
                brand
                category 
                price
                new
                sale
                stock
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


const Popupsidebar = ({ colClass, layoutList }) => {
    const cartContext = useContext(CartContext);
    const quantity = cartContext.quantity;
    const wishlistContext = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const router = useRouter();
    const [limit, setLimit] = useState(8)
    const [indexOf, setIndexOf] = useState(0)
    const curContext = useContext(CurrencyContext);
    const [grid, setGrid] = useState(colClass)
    const symbol = curContext.state.symbol;
    const filterContext = useContext(FilterContext);
    const filterChecked = filterContext.filterChecked
    const isChecked = filterContext.isChecked;
    const selectedBrands = filterContext.selectedBrands;
    const selectedColor = filterContext.selectedColor;
    const selectedPrice = filterContext.selectedPrice;
    const selectedCategory = filterContext.state;
    const selectedSize = filterContext.selectedSize
    const [sortBy, setSortBy] = useState('AscOrder');
    const [isLoading, setIsLoading] = useState(false);
    const [layout, setLayout] = useState(layoutList);
    const [openFilter, setOpenFilter] = useState(false);
    const [sidebarView,setSidebarView] = useState(false)

    var { loading, data, fetchMore } = useQuery(GET_PRODUCTS, {
        variables: {
            type: selectedCategory,
            priceMax: selectedPrice.max,
            priceMin: selectedPrice.min,
            color: selectedColor,
            brand: selectedBrands,
            sortBy: sortBy,
            indexFrom: 0,
            limit: limit
        }
    });

    const handlePagination = () => {
        setIsLoading(true);
        setTimeout(() =>
            fetchMore({
                variables: {
                    indexFrom: data.products.items.length
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    setIsLoading(false)
                    return {
                        products: {
                            __typename: prev.products.__typename,
                            total: prev.products.total,
                            items: [...prev.products.items, ...fetchMoreResult.products.items],
                            hasMore: fetchMoreResult.products.hasMore,
                        },
                    };
                }


            }), 1000)
    }

    const openNav = () => {
        if(sidebarView){
            setSidebarView(!sidebarView)
        } else {
            setSidebarView(!sidebarView)
        }  
    }

    const removeBrand = (val) => {
        const temp = [...selectedBrands];
        temp.splice(selectedBrands.indexOf(val), 1);
        filterContext.setSelectedBrands(temp)
    }

    const removeSize = (val) => {
        const temp = [...selectedSize];
        temp.splice(selectedSize.indexOf(val), 1);
        filterContext.setSelectedSize(temp);
    }

    const removeColor = () => {
        filterContext.setSelectedColor("")
    }

    useEffect(() => {
    }, [selectedBrands, selectedColor, selectedSize, selectedPrice]);


    return (
        <Col className="collection-content">
            <div className="page-main-content">
                <Row>
                    <Col sm="12">
                        <div className="top-banner-wrapper">
                            <a href={null}><Media src={Menu2} className="img-fluid" alt="" /></a>
                            <div className="top-banner-content small-section">
                                <h4>fashion</h4>
                                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                        <Row>
                            <Col xs="12">
                                <ul className="product-filter-tags">
                                    {
                                        selectedBrands.map((brand, i) =>
                                            <li key={i}>
                                                <a href={null} className="filter_tag">
                                                    {brand}
                                                    <i className="fa fa-close" onClick={() => removeBrand(brand)} ></i>
                                                </a>
                                            </li>
                                        )
                                    }
                                    {selectedColor ?
                                        <li>
                                            <a href={null} className="filter_tag">
                                                {selectedColor}
                                                <i className="fa fa-close" onClick={removeColor}></i>
                                            </a>
                                        </li>
                                        : ''
                                    }
                                    {
                                        selectedSize.map((size, i) =>
                                            <li key={i}>
                                                <a href={null} className="filter_tag">
                                                    {size}
                                                    <i className="fa fa-close" onClick={() => removeSize(size)}></i>
                                                </a>
                                            </li>
                                        )
                                    }
                                    {

                                        <li>
                                            <a href={null} className="filter_tag">
                                                price: {selectedPrice.min}- {selectedPrice.max}
                                            </a>
                                        </li>
                                    }
                                </ul>
                            </Col>
                        </Row>
                        <div className="collection-product-wrapper">
                            <div className="product-top-filter">
                                <Row>
                                    <Col>
                                        <div className="popup-filter">
                                            <div className="sidebar-popup" onClick={() => openNav(sidebarView)}> 
                                                <a className="popup-btn">filter products</a>
                                            </div>
                                            <div id="filterpopup" className={`open-popup ${sidebarView ? 'open' : ''}`}>
                                                <FilterPage  sidebarView={sidebarView} closeSidebar={() => openNav(sidebarView)} />
                                            </div>
                                            <div className="collection-view">
                                                <ul>
                                                    <li><i
                                                        className="fa fa-th grid-layout-view" onClick={() => { setLayout(''); setGrid('col-lg-3') }}></i>
                                                    </li>
                                                    <li><i
                                                        className="fa fa-list-ul list-layout-view" onClick={() => { setLayout('list-view'); setGrid('col-lg-12') }}></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="collection-grid-view" style={layout === 'list-view' ? { 'opacity': 0 } : { 'opacity': 1 }}>
                                                <ul>
                                                    <li>
                                                        <Media
                                                            src={`/assets/images/icon/2.png`}
                                                            alt=""
                                                            className="product-2-layout-view" onClick={() => setGrid('col-lg-6')} />
                                                    </li>
                                                    <li>
                                                        <Media
                                                            src={`/assets/images/icon/3.png`}
                                                            alt=""
                                                            className="product-3-layout-view" onClick={() => setGrid('col-lg-4')} />
                                                    </li>
                                                    <li>
                                                        <Media
                                                            src={`/assets/images/icon/4.png`}
                                                            alt=""
                                                            className="product-4-layout-view" onClick={() => setGrid('col-lg-3')} />
                                                    </li>
                                                    <li>
                                                        <Media
                                                            src={`/assets/images/icon/6.png`}
                                                            alt=""
                                                            className="product-6-layout-view" onClick={() => setGrid('col-lg-2')} />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-page-per-view">
                                                <select onChange={(e) => setLimit(parseInt(e.target.value))}>
                                                    <option value="10">10 Products Par Page</option>
                                                    <option value="15">15 Products Par Page</option>
                                                    <option value="20">20 Products Par Page</option>
                                                </select>
                                            </div>
                                            <div className="product-page-filter">
                                                <select onChange={(e) => setSortBy(e.target.value)}>
                                                    <option value="AscOrder">Sorting items</option>
                                                    <option value="HighToLow">High To Low</option>
                                                    <option value="LowToHigh">Low To High</option>
                                                    <option value="Newest">Newest</option>
                                                    <option value="AscOrder">Asc Order</option>
                                                    <option value="DescOrder">Desc Order</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={`product-wrapper-grid ${layout}`}>
                                <Row>
                                    {/* Product Box */}
                                    {(!data || !data.products || !data.products.items || data.products.items.length === 0 || loading) ?
                                        (data && data.products && data.products.items && data.products.items.length === 0) ?
                                            <Col xs="12">
                                                <div>
                                                    <div className="col-sm-12 empty-cart-cls text-center">
                                                        <img src={`/assets/images/empty-search.jpg`} className="img-fluid mb-4 mx-auto" alt="" />
                                                        <h3><strong>Your Cart is Empty</strong></h3>
                                                        <h4>Explore more shortlist some items.</h4>
                                                    </div>
                                                </div>
                                            </Col>
                                            :
                                            <div className="row mx-0 mt-3 margin-default">
                                            <div className="col-xl-3 col-lg-4 col-6">
                                                <PostLoader />
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-6">
                                                <PostLoader />
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-6">
                                                <PostLoader />
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-6">
                                                <PostLoader />
                                            </div>
                                        </div>
                                        : data && data.products.items.map((product, i) =>
                                            <div className={grid} key={i}>
                                                <div className="product">
                                                    <div>
                                                        <ProductItem des={true} product={product} symbol={symbol} 
                                                            addCompare={() => compareContext.addToCompare(product)}
                                                            addWishlist={() => wishlistContext.addToWish(product)}
                                                            cartClass="cart-info cart-wrap"
                                                            addCart={() => cartContext.addToCart(product, quantity)} />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                </Row>
                            </div>
                            <div className="section-t-space">
                                <div className="text-center">
                                    <Row>
                                        <Col xl="12" md="12" sm="12">
                                            {data && data.products && data.products.hasMore &&
                                                <Button onClick={() => handlePagination()}>
                                                    {isLoading &&
                                                        <Spinner animation="border" variant="light" />}
                                                    Load More
                                                </Button>}
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default Popupsidebar;