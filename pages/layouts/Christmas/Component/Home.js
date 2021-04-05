import React from 'react';
import Slider from 'react-slick';
import { Media } from 'reactstrap';
import HomeBanner1 from '../../../../public/assets/images/christmas/home-banner/1.jpg';
import HomeBanner2 from '../../../../public/assets/images/christmas/home-banner/2.jpg';
import HomeBanner3 from '../../../../public/assets/images/christmas/home-banner/3.jpg';

const Home = () => {
    return (
        <section className="p-0 snow-slider">
        <Slider className="slide-1 home-slider">
            <div>
                <Media src={HomeBanner1} className="img-fluid" alt="" />
                <div className="slider-details">
                    <div>
                        <h3>bring</h3>
                        <h2>christmas</h2>
                        <h1>sale</h1>
                        <h4>upto - 50%</h4>
                        <h4>OFF</h4>
                        <a href="#" className="btn btn-white" tabIndex="0">shop now</a>
                    </div>
                </div>
            </div>
            <div>
                <Media src={HomeBanner2} className="img-fluid" alt="" />
                <div className="slider-details">
                    <div>
                        <h3>bring</h3>
                        <h2>christmas</h2>
                        <h1>sale</h1>
                        <h4>upto - 50%</h4>
                        <h4>OFF</h4>
                        <a href="#" className="btn btn-white" tabIndex="0">shop now</a>
                    </div>
                </div>
            </div>
            <div>
                <Media src={HomeBanner3} className="img-fluid" alt="" />
                <div className="slider-details">
                    <div>
                        <h3>bring</h3>
                        <h2>christmas</h2>
                        <h1>sale</h1>
                        <h4>upto - 50%</h4>
                        <h4>OFF</h4>
                        <a href={null} className="btn btn-white" tabIndex="0">shop now</a>
                    </div>
                </div>
            </div>
        </Slider>
    </section>
    )
}
export default Home;