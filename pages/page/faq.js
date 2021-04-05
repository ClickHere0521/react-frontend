import React, { useState } from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { Collapse, Card, CardHeader, Container, Row, Col, Button } from 'reactstrap';


const faqData = [
    {
        qus: "How can I downgrade to an earlier version of Dummy Content?",
        ans: "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures"
    },
    {
        qus: "How can I upgrade from Shopify 2.5 to shopify 3?",
        ans: "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures"
    },
    {
        qus: "Under what license are Regular Labs extensions released?",
        ans: "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures"
    },
    {
        qus: "What is the Regular Labs Library?",
        ans: "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures"
    },
    {
        qus: "Can I turn on/off some blocks on the page?",
        ans: "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures"
    },
    {
        qus: "What is included in the theme package?",
        ans: "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures"
    },
]

const FaqList = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Card>
            <CardHeader id="headingOne">
                <h5 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" onClick={toggle} data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How can I downgrade to an earlier version of Dummy Content?
                </button>
                </h5>
            </CardHeader>
            <Collapse isOpen={isOpen} id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                    <p>it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures</p>
                </div>
            </Collapse>
        </Card>
    )
}

const FaqPage = () => {
    return (
        <>
            <CommonLayout parent="home" title="faq">
                <section className="faq-section section-b-space">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <div className="accordion theme-accordion" id="accordionExample">
                                    {faqData.map((faq, i) =>
                                        <FaqList faq={faq} key={i} />
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </CommonLayout>
        </>
    )
}

export default FaqPage;