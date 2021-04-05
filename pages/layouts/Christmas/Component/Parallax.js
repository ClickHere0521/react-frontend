import React from 'react';
import { Media } from 'reactstrap';
import santa from '../../../../public/assets/images/christmas/santa.png';
import parall from '../../../../public/assets/images/christmas/parall.png';

const ParallaxBanner = () => {
    return (
        <section className="p-0 overflow-cls">
            <div className="full-banner text-center p-center parallax-christmas">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="banner-contain christmas-contain">
                                <h3>New Collection Of Awesome Gift</h3>
                                <h2>End Of The Year <span>SALE</span></h2>
                                <h4>Get <span>50%</span> Extra Off</h4>
                                <a href={null} className="btn btn-solid" tabIndex="0">shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="santa-img">
                    <Media src={santa} className="img-fluid" alt="" />
                </div>
                <div className="decor">
                    <Media src={parall} className="img-fluid" alt="" />
                </div>
            </div>
        </section>
    )
}

export default ParallaxBanner;