import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Container, Row, Col, Media, Card, CardBody, Input, NavItem, NavLink, TabContent, Nav, TabPane ,Modal,ModalBody ,ModalFooter,ModalHeader, Button, Label } from 'reactstrap';
import seventeen from '../../../../public/assets/images/logos/17.png';
import order from '../../../../public/assets/images/icon/dashboard/order.png';
import sale from '../../../../public/assets/images/icon/dashboard/sale.png';
import homework from '../../../../public/assets/images/icon/dashboard/homework.png';
import one from '../../../../public/assets/images/dashboard/product/1.jpg';
import nine from '../../../../public/assets/images/dashboard/product/9.jpg';
import thirtyfour from '../../../../public/assets/images/pro3/34.jpg';
import pro1 from '../../../../public/assets/images/pro3/1.jpg';
import pro27 from '../../../../public/assets/images/pro3/27.jpg';
import pro36 from '../../../../public/assets/images/pro3/36.jpg';
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), {ssr:false})

import { 
    apexPieChart,
    lineChart1
 } from "../../../../data/vendorData";
 
const Dashboard = () => {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState('1');
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <section className="dashboard-section section-b-space">
            <Container>
                <Row>
                    <Col lg="3">
                        <div className="dashboard-sidebar">
                            <div className="profile-top">
                                <div className="profile-image">
                                    <Media src={seventeen} alt="" className="img-fluid" />
                                </div>
                                <div className="profile-detail">
                                    <h5>Fashion Store</h5>
                                    <h6>750 followers | 10 review</h6>
                                    <h6>mark.enderess@mail.com</h6>
                                </div>
                            </div>
                            <div className="faq-tab">
                                <Nav tabs className="border-tab-primary">
                                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                        <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                            Dashboard
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                        <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                            Products
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                        <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                            Order
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                        <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                                            Profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                        <NavLink className={activeTab === '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
                                            Settings
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                        <NavLink className={activeTab === '6' ? 'active' : ''} onClick={toggle}>
                                            Logout
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                    </Col>
                    <Col lg="9">
                        <div className="faq-content">
                            <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <div className="counter-section">
                                    <Row>
                                        <Col md="4">
                                            <div className="counter-box">
                                                <Media src={order} className="img-fluid" />
                                                <div>
                                                    <h3>25</h3>
                                                    <h5>total products</h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="4">
                                            <div className="counter-box">
                                                <Media src={sale} className="img-fluid" />
                                                <div>
                                                    <h3>12500</h3>
                                                    <h5>total sales</h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md="4">
                                            <div className="counter-box">
                                                <Media src={homework} className="img-fluid" />
                                                <div>
                                                    <h3>50</h3>
                                                    <h5>order pending</h5>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <Row>
                                    <Col md="7">
                                        <Card>
                                            <CardBody>
                                                <div id="chart">
                                                <Chart options={lineChart1.options} series={lineChart1.series} height="170" type="area" />                  
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="5">
                                        <Card>
                                            <CardBody>
                                                <div id="chart-order">
                                                    <Chart options={apexPieChart.options} series={apexPieChart.series} type='donut' width={380} />
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6">
                                        <Card className="dashboard-table">
                                            <CardBody>
                                                <h3>trending products</h3>
                                                <table className="table mb-0 table-responsive-sm">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">image</th>
                                                            <th scope="col">product name</th>
                                                            <th scope="col">price</th>
                                                            <th scope="col">sales</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">
                                                                <Media
                                                                    src={one}
                                                                    className="blur-up lazyloaded" /></th>
                                                            <td>neck velvet dress</td>
                                                            <td>$205</td>
                                                            <td>1000</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><Media
                                                                src={nine}
                                                                className="blur-up lazyloaded" /></th>
                                                            <td>belted trench coat</td>
                                                            <td>$350</td>
                                                            <td>800</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><Media src={thirtyfour}
                                                                className="blur-up lazyloaded" /></th>
                                                            <td>man print tee</td>
                                                            <td>$150</td>
                                                            <td>750</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col lg="6">
                                        <Card className="dashboard-table">
                                            <CardBody>
                                                <h3>recent orders</h3>
                                                <table className="table mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">order id</th>
                                                            <th scope="col">product details</th>
                                                            <th scope="col">status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">#21515</th>
                                                            <td>neck velvet dress</td>
                                                            <td>confrimed</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">#78153</th>
                                                            <td>belted trench coat</td>
                                                            <td>shipped</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">#51512</th>
                                                            <td>man print tee</td>
                                                            <td>pending</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">#78153</th>
                                                            <td>belted trench coat</td>
                                                            <td>shipped</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">#51512</th>
                                                            <td>man print tee</td>
                                                            <td>pending</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm="12">
                                        <Card className="dashboard-table mt-0">
                                            <CardBody>
                                                <div className="top-sec">
                                                    <h3>all products</h3>
                                                    <a href="#" className="btn btn-sm btn-solid">add product</a>
                                                </div>
                                                <table className="table-responsive-md table mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">image</th>
                                                            <th scope="col">product name</th>
                                                            <th scope="col">category</th>
                                                            <th scope="col">price</th>
                                                            <th scope="col">stock</th>
                                                            <th scope="col">sales</th>
                                                            <th scope="col">edit/delete</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row"><Media
                                                                src={one}
                                                                className="blur-up lazyloaded" /></th>
                                                            <td>neck velvet dress</td>
                                                            <td>women clothes</td>
                                                            <td>$205</td>
                                                            <td>1000</td>
                                                            <td>2000</td>
                                                            <td><i className="fa fa-pencil-square-o mr-1"
                                                                aria-hidden="true"></i><i className="fa fa-trash-o ml-1"
                                                                    aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><Media
                                                                src={nine}
                                                                className="blur-up lazyloaded" /></th>
                                                            <td>belted trench coat</td>
                                                            <td>women clothes</td>
                                                            <td>$350</td>
                                                            <td>800</td>
                                                            <td>350</td>
                                                            <td><i className="fa fa-pencil-square-o mr-1"
                                                                aria-hidden="true"></i><i className="fa fa-trash-o ml-1"
                                                                    aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><Media src={thirtyfour}
                                                                className="blur-up lazyloaded" /></th>
                                                            <td>men print tee</td>
                                                            <td>men clothes</td>
                                                            <td>$150</td>
                                                            <td>750</td>
                                                            <td>150</td>
                                                            <td><i className="fa fa-pencil-square-o mr-1"
                                                                aria-hidden="true"></i><i className="fa fa-trash-o ml-1"
                                                                    aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><Media src={pro1}
                                                                className="blur-up lazyloaded" /></th>
                                                            <td>woman print tee</td>
                                                            <td>women clothes</td>
                                                            <td>$150</td>
                                                            <td>750</td>
                                                            <td>150</td>
                                                            <td><i className="fa fa-pencil-square-o mr-1"
                                                                aria-hidden="true"></i><i className="fa fa-trash-o ml-1"
                                                                    aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><Media src={pro27}
                                                                className="blur-up lazyloaded" /></th>
                                                            <td>men print tee</td>
                                                            <td>men clothes</td>
                                                            <td>$150</td>
                                                            <td>750</td>
                                                            <td>150</td>
                                                            <td><i className="fa fa-pencil-square-o mr-1"
                                                                aria-hidden="true"></i><i className="fa fa-trash-o ml-1"
                                                                    aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><Media src={pro36}
                                                                className="blur-up lazyloaded" /></th>
                                                            <td>men print tee</td>
                                                            <td>men clothes</td>
                                                            <td>$150</td>
                                                            <td>750</td>
                                                            <td>150</td>
                                                            <td><i className="fa fa-pencil-square-o mr-1"
                                                                aria-hidden="true"></i><i className="fa fa-trash-o ml-1"
                                                                    aria-hidden="true"></i></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col sm="12">
                                        <Card className="dashboard-table mt-0">
                                            <CardBody>
                                                <div className="top-sec">
                                                    <h3>orders</h3>
                                                    <a href="#" className="btn btn-sm btn-solid">add product</a>
                                                </div>
                                                <table className="table table-responsive-sm mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">order id</th>
                                                            <th scope="col">product details</th>
                                                            <th scope="col">status</th>
                                                            <th scope="col">price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">#125021</th>
                                                            <td>neck velvet dress</td>
                                                            <td>shipped</td>
                                                            <td>$205</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">#521214</th>
                                                            <td>belted trench coat</td>
                                                            <td>shipped</td>
                                                            <td>$350</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">#521021</th>
                                                            <td>men print tee</td>
                                                            <td>pending</td>
                                                            <td>$150</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">#245021</th>
                                                            <td>woman print tee</td>
                                                            <td>shipped</td>
                                                            <td>$150</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">#122141</th>
                                                            <td>men print tee</td>
                                                            <td>canceled</td>
                                                            <td>$150</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">#125015</th>
                                                            <td>men print tee</td>
                                                            <td>pending</td>
                                                            <td>$150</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">#245021</th>
                                                            <td>woman print tee</td>
                                                            <td>shipped</td>
                                                            <td>$150</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">#122141</th>
                                                            <td>men print tee</td>
                                                            <td>canceled</td>
                                                            <td>$150</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">#125015</th>
                                                            <td>men print tee</td>
                                                            <td>pending</td>
                                                            <td>$150</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>

                            </TabPane>
                            <TabPane tabId="4">
                                <Row>
                                    <Col sm="12">
                                        <Card className="mt-0">
                                            <CardBody>
                                                <div className="dashboard-box">
                                                    <div className="dashboard-title">
                                                        <h4>profile</h4>
                                                        <span data-toggle="modal" data-target="#edit-profile">edit</span>
                                                    </div>
                                                    <div className="dashboard-detail">
                                                        <ul>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>company name</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>Fashion Store</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>email address</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>mark.enderess@mail.com</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>Country / Region</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>Downers Grove, IL</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>Year Established</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>2021</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>Total Employees</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>101 - 200 People</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>category</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>clothing</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>street address</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>549 Sulphur Springs Road</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>city/state</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>Downers Grove, IL</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="details">
                                                                    <div className="left">
                                                                        <h6>zip</h6>
                                                                    </div>
                                                                    <div className="right">
                                                                        <h6>60515</h6>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="5">
                                <Row>
                                    <Col sm="12">
                                        <Card className="mt-0">
                                            <CardBody>
                                                <div className="dashboard-box">
                                                    <div className="dashboard-title">
                                                        <h4>settings</h4>
                                                    </div>
                                                    <div className="dashboard-detail">
                                                        <div className="account-setting">
                                                            <h5>Notifications</h5>
                                                            <Row>
                                                                <Col>
                                                                    <div className="form-check">
                                                                        <Input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios"
                                                                            id="exampleRadios1" value="option1" defaultChecked />
                                                                        <Label className="form-check-label"
                                                                            for="exampleRadios1">
                                                                            Allow Desktop Notifications
                                                                    </Label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <Input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios"
                                                                            id="exampleRadios2" value="option2" />
                                                                        <Label className="form-check-label"
                                                                            for="exampleRadios2">
                                                                            Enable Notifications
                                                                    </Label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <Input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios"
                                                                            id="exampleRadios3" value="option3" />
                                                                        <Label className="form-check-label"
                                                                            for="exampleRadios3">
                                                                            Get notification for my own activity
                                                                    </Label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <Input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios"
                                                                            id="exampleRadios4" value="option4" />
                                                                        <Label className="form-check-label"
                                                                            for="exampleRadios4">
                                                                            DND
                                                                    </Label>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                        <div className="account-setting">
                                                            <h5>deactivate account</h5>
                                                            <Row>
                                                                <Col>
                                                                    <div className="form-check">
                                                                        <Input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios1"
                                                                            id="exampleRadios4" value="option4" defaultChecked />
                                                                        <Label className="form-check-label"
                                                                            for="exampleRadios4">
                                                                            I have a privacy concern
                                                                    </Label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <Input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios1"
                                                                            id="exampleRadios5" value="option5" />
                                                                        <Label className="form-check-label"
                                                                            for="exampleRadios5">
                                                                            This is temporary
                                                                    </Label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <Input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios1"
                                                                            id="exampleRadios6" value="option6" />
                                                                        <Label className="form-check-label"
                                                                            for="exampleRadios6">
                                                                            other
                                                                    </Label>
                                                                    </div>
                                                                    <button type="button"
                                                                        className="btn btn-solid btn-xs">Deactivate
                                                                    Account</button>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                        <div className="account-setting">
                                                            <h5>Delete account</h5>
                                                            <Row>
                                                                <Col>
                                                                    <div className="form-check">
                                                                        <Input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios3"
                                                                            id="exampleRadios7" value="option7" defaultChecked />
                                                                        <Label className="form-check-label"
                                                                            for="exampleRadios7">
                                                                            No longer usable
                                                                    </Label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <Input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios3"
                                                                            id="exampleRadios8" value="option8" />
                                                                        <Label className="form-check-label"
                                                                            for="exampleRadios8">
                                                                            Want to switch on other account
                                                                    </Label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <Input className="radio_animated form-check-input"
                                                                            type="radio" name="exampleRadios3"
                                                                            id="exampleRadios9" value="option9" />
                                                                        <Label className="form-check-label"
                                                                            for="exampleRadios9">
                                                                            other
                                                                    </Label>
                                                                    </div>
                                                                    <button type="button"
                                                                        className="btn btn-solid btn-xs">Delete Account</button>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                            <Modal isOpen={modal} toggle={toggle} centered>
                            <ModalHeader toggle={toggle}>Logging Out</ModalHeader>
                            <ModalBody className="p-4">
                                Do you want to logout?
                            </ModalBody>
                            <ModalFooter>
                                <Link href={'/'}><a className="btn-solid btn-custom" color="secondary">Yes</a></Link>
                                <Button className="btn-solid btn-custom" color="secondary" onClick={toggle}>No</Button>
                            </ModalFooter>
                        </Modal>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Dashboard;