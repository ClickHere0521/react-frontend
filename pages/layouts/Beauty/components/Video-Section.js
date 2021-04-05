import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Media,Modal } from 'reactstrap';
import vedio from '../../../../public/assets/images/beauty/video_1.jpg';

const VideoSection = () => {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => {
        setOpen(!open)
    };

    const onCloseModal = () => {
        setOpen(false)
    };

    return (
        <Fragment>
            <section className="video-section pt-0">
                <div className="title1">
                    <h4>special offer</h4>
                    <h2 className="title-inner1">product tutorial</h2>
                </div>
                <Container>
                    <Row>
                        <Col md='8' className="offset-md-2">
                            <a href="#" onClick={onOpenModal}>
                                <div className="video-img">
                                    <Media src={vedio} alt="" className="img-fluid blur-up lazyload" />
                                    <div className="play-btn">
                                        <span><i className="fa fa-play" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                            </a>
                            <Modal
                                isOpen={open}
                                toggle={onOpenModal}
                                id="video"
                                className="video-modal" centered size="lg">
                                <iframe title="video" src="https://www.youtube.com/embed/FRIDLxM8Roc"
                                    allowFullScreen></iframe>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}

export default VideoSection;