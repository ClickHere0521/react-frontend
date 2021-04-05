import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Media, Container, Row } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import PostLoader from '../../../components/common/PostLoader';
import Lightbox from 'react-image-lightbox';


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

const images = [

    require("../../../public/assets/images/pets/pro/9.jpg"),
    require("../../../public/assets/images/pets/pro/2.jpg"),
    require("../../../public/assets/images/pets/pro/12.jpg"),
    require("../../../public/assets/images/pets/pro/13.jpg"),
    require("../../../public/assets/images/pets/pro/10.jpg"),
    require("../../../public/assets/images/pets/pro/11.jpg"),
    require("../../../public/assets/images/pets/pro/14.jpg"),
    require("../../../public/assets/images/pets/pro/8.jpg")
]

const fashionImages =  [
    require("../../../public/assets/images/pro3/39.jpg"),
    require("../../../public/assets/images/pro3/3.jpg"),
    require("../../../public/assets/images/pro3/1.jpg"),
    require("../../../public/assets/images/pro3/8.jpg"),
    require("../../../public/assets/images/pro3/9.jpg"),
    require("../../../public/assets/images/pro3/11.jpg"),
    require("../../../public/assets/images/pro3/13.jpg"),
    require("../../../public/assets/images/pro3/14.jpg")
] 

const bagImages = [
     require("../../../public/assets/images/pro1/1.jpg"),
     require("../../../public/assets/images/pro1/4.jpg"),
     require("../../../public/assets/images/pro1/10.jpg"),
     require("../../../public/assets/images/pro1/2.jpg"),
     require("../../../public/assets/images/pro1/16.jpg"),
     require("../../../public/assets/images/pro1/7.jpg"),
     require("../../../public/assets/images/pro1/4.jpg"),
     require("../../../public/assets/images/pro1/12.jpg")
]

const shoesImages =  [
    require("../../../public/assets/images/pro/1.jpg"),
    require("../../../public/assets/images/pro/16.jpg"),
    require("../../../public/assets/images/pro/23.jpg"),
    require("../../../public/assets/images/pro/26.jpg"),
    require("../../../public/assets/images/pro/6.jpg"),
    require("../../../public/assets/images/pro/33.jpg"),
    require("../../../public/assets/images/pro/37.jpg"),
    require("../../../public/assets/images/pro/13.jpg")
]
const watchImages = [
    require("../../../public/assets/images/pro2/2.jpg"),
    require("../../../public/assets/images/pro2/3.jpg"),
    require("../../../public/assets/images/pro2/6.jpg"),
    require("../../../public/assets/images/pro2/15.jpg"),
    require("../../../public/assets/images/pro2/8.jpg"),
    require("../../../public/assets/images/pro2/9.jpg"),
    require("../../../public/assets/images/pro2/13.jpg"),
    require("../../../public/assets/images/pro2/4.jpg")
]

const GridTwoPage = ({ colClass, limit }) => {

    const l = parseInt(limit);
    const [activeTab, setActiveTab] = useState('pets');
    const initilindex = { index: 0, isOpen: false }
    const [photoIndex, setPhotoIndex] = useState(initilindex)

    const onMovePrev = () => {
        const prev = (photoIndex.index + images.length - 1) % images.length
        setPhotoIndex({ ...photoIndex, index: prev })
    }
    const onMoveNext = () => {
        const next = (photoIndex.index + 1) % images.length
        setPhotoIndex({ ...photoIndex, index: next })
    }


    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: activeTab,
            indexFrom: 0,
            limit: parseInt(l)
        }
    });

    return (
        <section className="portfolio-section grid-portfolio ratio2_3 portfolio-padding">
            <Container>
                <Tabs>
                    <TabList align="center" id="form1">
                        <Tab className={`filter-button project_button ${activeTab == 'pets' ? 'active' : ''}`} onClick={() => setActiveTab('pets')} data-filter="all">All</Tab>
                        <Tab className={`filter-button project_button ${activeTab == 'fashion' ? 'active' : ''}`} onClick={() => setActiveTab('fashion')} data-filter="fashion">Fashion</Tab>
                        <Tab className={`filter-button project_button ${activeTab == 'bags' ? 'active' : ''}`} onClick={() => setActiveTab('bags')} data-filter="bags">Bags</Tab>
                        <Tab className={`filter-button project_button ${activeTab == 'shoes' ? 'active' : ''}`} onClick={() => setActiveTab('shoes')} data-filter="shoes">Shoes</Tab>
                        <Tab className={`filter-button project_button ${activeTab == 'watch' ? 'active' : ''}`} onClick={() => setActiveTab('watch')} data-filter="watch">Watch</Tab>
                    </TabList>
                    <Row className="row zoom-gallery">
                        <TabPanel>
                            {(!data || !data.products || data.products.items.length === 0 || loading) ?
                                <PostLoader />
                                :
                                <>
                                    {data && data.products.items.map((product, index) => 
                                        <div className={`isotopeSelector filter fashion ${colClass}`} key={index}>
                                            <div className="overlay">
                                                <div className="border-portfolio">
                                                    <a>
                                                        <div className="overlay-background"
                                                         onClick={() =>
                                                                setPhotoIndex({ ...photoIndex, index: index, isOpen: true })
                                                            }
                                                        >
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </div>
                                                        <Media src={product.images[0].src}
                                                            className="img-fluid blur-up lazyload bg-img" 
                                                           />
                                                            
                                                            
                                                    </a>
                                                    {photoIndex.isOpen && (
                                                        <Lightbox
                                                            mainSrc={images[photoIndex.index]}
                                                            nextSrc={images[(photoIndex.index + 1) % images.length]}
                                                            prevSrc={images[(photoIndex.index + images.length - 1) % images.length]}
                                                            imageTitle={photoIndex.index + 1 + "/" + images.length}
                                                            onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                                                            onMovePrevRequest={() => setPhotoIndex({ ...photoIndex, index: (photoIndex.index + images.length - 1) % images.length })}
                                                            onMoveNextRequest={() => setPhotoIndex({ ...photoIndex, index: (photoIndex.index + 1) % images.length })}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        
                                    )}
                                </>
                            }

                        </TabPanel>
                        <TabPanel>
                            {(!data || !data.products || data.products.items.length === 0 || loading) ?
                                <PostLoader />

                                :
                                <>
                                    {data && data.products.items.slice(0, l).map((product, index) =>
                                        <div className={`isotopeSelector filter fashion ${colClass}`} key={index}>
                                            <div className="overlay">
                                                <div className="border-portfolio">
                                                    <a>
                                                        <div className="overlay-background"
                                                          onClick={() =>
                                                            setPhotoIndex({ ...photoIndex, index: index, isOpen: true })
                                                        }
                                                         >
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </div>
                                                        <Media src={product.images[0].src}
                                                            className="img-fluid blur-up lazyload bg-img" />
                                                    </a>

                                                    {photoIndex.isOpen && (
                                                        <Lightbox
                                                            mainSrc={fashionImages[photoIndex.index]}
                                                            nextSrc={fashionImages[(photoIndex.index + 1) % fashionImages.length]}
                                                            prevSrc={fashionImages[(photoIndex.index + fashionImages.length - 1) % fashionImages.length]}
                                                            imageTitle={photoIndex.index + 1 + "/" + fashionImages.length}
                                                            onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                                                            onMovePrevRequest={() => setPhotoIndex({ ...photoIndex, index: (photoIndex.index + fashionImages.length - 1) % fashionImages.length })}
                                                            onMoveNextRequest={() => setPhotoIndex({ ...photoIndex, index: (photoIndex.index + 1) % fashionImages.length })}
                                                        />
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    )
                                    }
                                </>
                            }

                        </TabPanel>
                        <TabPanel>
                            {(!data || !data.products || data.products.items.length === 0 || loading) ?
                                <PostLoader />

                                :
                                <>
                                    {data && data.products.items.slice(0, l).map((product, index) =>
                                        <div className={`isotopeSelector filter fashion ${colClass}`} key={index}>
                                            <div className="overlay">
                                                <div className="border-portfolio">
                                                    <a>
                                                        <div className="overlay-background"
                                                        onClick={() =>
                                                            setPhotoIndex({ ...photoIndex, index: index, isOpen: true })
                                                        }
                                                        >
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </div>
                                                        <Media src={product.images[0].src}
                                                            className="img-fluid blur-up lazyload bg-img" />
                                                    </a>

                                                    {photoIndex.isOpen && (
                                                        <Lightbox
                                                            mainSrc={bagImages[photoIndex.index]}
                                                            nextSrc={bagImages[(photoIndex.index + 1) % bagImages.length]}
                                                            prevSrc={bagImages[(photoIndex.index + bagImages.length - 1) % bagImages.length]}
                                                            imageTitle={photoIndex.index + 1 + "/" + bagImages.length}
                                                            onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                                                            onMovePrevRequest={() => setPhotoIndex({ ...photoIndex, index: (photoIndex.index + bagImages.length - 1) % bagImages.length })}
                                                            onMoveNextRequest={() => setPhotoIndex({ ...photoIndex, index: (photoIndex.index + 1) % bagImages.length })}
                                                        />
                                                    )}
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    }
                                </>
                            }

                        </TabPanel>
                        <TabPanel>
                            {(!data || !data.products || data.products.items.length === 0 || loading) ?
                                <PostLoader />

                                :
                                <>
                                    {data && data.products.items.slice(0, l).map((product, index) =>
                                        <div className={`isotopeSelector filter fashion ${colClass}`} key={index}> 
                                            <div className="overlay">
                                                <div className="border-portfolio">
                                                    <a>
                                                        <div className="overlay-background"
                                                        onClick={() =>
                                                            setPhotoIndex({ ...photoIndex, index: index, isOpen: true })
                                                        }
                                                        >
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </div>
                                                        <Media src={product.images[0].src}
                                                            className="img-fluid blur-up lazyload bg-img" />
                                                    </a>

                                                    {photoIndex.isOpen && (
                                                        <Lightbox
                                                            mainSrc={shoesImages[photoIndex.index]}
                                                            nextSrc={shoesImages[(photoIndex.index + 1) % shoesImages.length]}
                                                            prevSrc={shoesImages[(photoIndex.index + shoesImages.length - 1) % shoesImages.length]}
                                                            imageTitle={photoIndex.index + 1 + "/" + shoesImages.length}
                                                            onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                                                            onMovePrevRequest={() => setPhotoIndex({ ...photoIndex, index: (photoIndex.index + shoesImages.length - 1) % shoesImages.length })}
                                                            onMoveNextRequest={() => setPhotoIndex({ ...photoIndex, index: (photoIndex.index + 1) % shoesImages.length })}
                                                        />
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    )
                                    }
                                </>
                            }

                        </TabPanel>
                        <TabPanel>
                            {(!data || !data.products || data.products.items.length === 0 || loading) ?
                                <PostLoader />

                                :
                                <>
                                    {data && data.products.items.slice(0, l).map((product, index) =>
                                        <div className={`isotopeSelector filter fashion ${colClass}`} key={index}>
                                            <div className="overlay">
                                                <div className="border-portfolio">
                                                    <a>
                                                        <div className="overlay-background"
                                                        onClick={() =>
                                                            setPhotoIndex({ ...photoIndex, index: index, isOpen: true })
                                                        }
                                                        >
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </div>
                                                        <Media src={product.images[0].src}
                                                            className="img-fluid blur-up lazyload bg-img" />
                                                    </a>

                                                    {photoIndex.isOpen && (
                                                        <Lightbox
                                                            mainSrc={watchImages[photoIndex.index]}
                                                            nextSrc={watchImages[(photoIndex.index + 1) % watchImages.length]}
                                                            prevSrc={watchImages[(photoIndex.index + watchImages.length - 1) % watchImages.length]}
                                                            imageTitle={photoIndex.index + 1 + "/" + watchImages.length}
                                                            onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                                                            onMovePrevRequest={() => setPhotoIndex({ ...photoIndex, index: (photoIndex.index + watchImages.length - 1) % watchImages.length })}
                                                            onMoveNextRequest={() => setPhotoIndex({ ...photoIndex, index: (photoIndex.index + 1) % watchImages.length })}
                                                        />
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    )
                                    }
                                </>
                            }

                        </TabPanel>
                    </Row>
                </Tabs>
            </Container>
        </section>
    )
}

export default GridTwoPage;