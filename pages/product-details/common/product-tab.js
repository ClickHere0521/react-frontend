import React,{useState} from 'react';
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';


const ProductTab = () => {

    const [activeTab, setActiveTab] = useState('1');

    return (
        <section className="tab-product m-0">
            <Container>
                <Row>
                    <Col sm="12" lg="12">
                        <Row className="product-page-main m-0">
                            <Nav tabs className="nav-material">
                                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                    <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                        Description
                                        </NavLink>
                                </NavItem>
                                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                    <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                        Details
                                        </NavLink>
                                </NavItem>
                                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                    <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                        Vedio
                                        </NavLink>
                                </NavItem>
                                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                    <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                                        Write Review
                                        </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab} className="nav-material">
                                <TabPane tabId="1">
                                    <p className="mb-0 pb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                </TabPane>
                                <TabPane tabId="2">
                                    <p className="mb-0 pb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                </TabPane>
                                <TabPane tabId="3">
                                    <p className="mb-0 pb-0"> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                </TabPane>
                                <TabPane tabId="4">
                                    <p className="mb-0 pb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                </TabPane>
                            </TabContent>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProductTab;