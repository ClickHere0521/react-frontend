import React, { Fragment } from 'react';
import Slider from 'react-slick';

const HomeSlider = () => {
    return (
        <Fragment>
            <section className="p-0 effect-cls">
                <Slider className="slide-1 home-slider">
                    <div>
                        <div className="home text-center p-center home41">
                            
                        </div>
                    </div>
                    <div>
                        <div className="home text-center p-center home42">
                            
                        </div>
                    </div>
                </Slider>
            </section>
        </Fragment>
    )
}

export default HomeSlider;