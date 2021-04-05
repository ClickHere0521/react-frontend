import React,{useState} from 'react';
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';


const VerticalProductTab = () => {

    const [activeTab, setActiveTab] = useState('1');

    return (
        <section className="tab-product m-0 vertical-tab">
        <Container className="p-0">
            <Row className="tab-border">
                <Col xl="2" className="p-0">
                    <Nav className="nav nav-tabs nav-material flex-column nav-border" id="top-tab" role="tablist">
                        <NavItem className="nav-item">
                            <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>Description</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>Reviews
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>Product tags</NavLink>
                        </NavItem>
                    </Nav>
                </Col>
                <Col xl="10">
                    <TabContent activeTab={activeTab} className="nav-material" id="top-tabContent">
                        <TabPane tabId="1">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </TabPane>
                        <TabPane tabId="2">
                            <p>No reviews yet</p>
                        </TabPane>
                        <TabPane tabId="3" >
                            <p>black, block1, blue, cotton, purple, skirts, top, under-100, versace, woman</p>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default VerticalProductTab;