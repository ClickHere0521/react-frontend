import React, { Fragment } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          <div>
            <div className="home home1 text-center">
              <Container>
                <Row>
                  <Col>
                    <div className="slider-contain">
                      <div>
                        <h4>welcome to fashion</h4>
                        <h1>men fashion</h1>
                        <Link href={`/left-sidebar/collection`}> 
                          <a className="btn btn-solid">shop now </a>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div>
            <div className="home home2 text-center">
              <Container>
                <Row>
                  <Col>
                    <div className="slider-contain">
                      <div>
                        <h4>welcome to fashion</h4>
                        <h1>women fashion</h1>
                        <Link href={`/left-sidebar/collection`}> 
                        <a className="btn btn-solid">shop now </a>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Slider>
      </section>
    </Fragment>
  )
}

export default Banner