import React from 'react';
import bannerOne from '../../../../public/assets/images/flower/sub-banner1.jpg';
import bannerTwo from '../../../../public/assets/images/flower/sub-banner2.jpg';

const CollectionBanner = () => {
    return (
        <section className="banner-padding pb-0">
            <div className="container">
                <div className="row partition2">
                    <div className="col-md-4">
                        <a href="#">
                            <div className="collection-banner p-left text-center">
                                <div className="img-part">
                                    <img src={bannerTwo} className="img-fluid blur-up lazyload"
                                        alt="" />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-8">
                        <a href="#">
                            <div className="collection-banner p-right text-right">
                                <div className="img-part">
                                    <img src={bannerOne} className="img-fluid blur-up lazyload"
                                        alt="" />
                                </div>
                                <div className="contain-banner">
                                    <div>
                                        <h4>save 30%</h4>
                                        <h2>hot deal</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CollectionBanner;