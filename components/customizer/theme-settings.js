import React, {useEffect ,useState, useContext} from 'react';
import SettingContext from '../../helpers/theme-setting/SettingContext';
import {SlideUpDown} from "../../services/script"
import { ToastContainer } from 'react-toastify';
import {config} from './config.json'
import { Media, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ThemeSettings = () => {
    const context = useContext(SettingContext)
    const [themeLayout, setThemeLayout] = useState(false);
    const layoutType = context.layoutFun;
    const layoutColorFunc = context.layoutColorFun
    const layoutState = context.state
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  
    /*=====================
     Tap on Top
     ==========================*/
     useEffect(() => {

        if(config.layout_version && config.layout_type){
            document.body.className = `${config.layout_version}  ${config.layout_type}`
        }

        if(localStorage.getItem("color")){
            document.documentElement.style.setProperty('--theme-deafult', localStorage.getItem("color"));
        }
        
        window.addEventListener('scroll', handleScroll);
        SlideUpDown('setting-title');
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

     }, []);
   
    const handleScroll = () => {
        if (process.browser) {
        if (document.documentElement.scrollTop > 600) {
            document.querySelector(".tap-top").style = "display: block";
        } else {
            document.querySelector(".tap-top").style = "display: none";
        }
        }
    }

    const openSetting = () => {
        if (process.browser) {
        document.getElementById("setting_box").classList.add('open-setting');
        document.getElementById("setting-icon").classList.add('open-icon');
        }
    }

    const closeSetting = () => {
        if (process.browser) {
        document.getElementById("setting_box").classList.remove('open-setting');
        document.getElementById("setting-icon").classList.remove('open-icon');
        }
    }


    const changeThemeLayout = () => {
        setThemeLayout(!themeLayout)
    }

    if(themeLayout){
        if (process.browser) {
        document.body.classList.add('dark');
        config.layout_version = 'dark'
        }
    }else{
        if (process.browser) {
        document.body.classList.remove('dark');
        config.layout_version = 'light'
        }
    }

    return (
        <div>
            <a href={null} onClick={() => openSetting()}>
                <div className="setting-sidebar" id="setting-icon">
                    <div>
                        <i className="fa fa-cog" aria-hidden="true"></i>
                    </div>
                </div>
            </a>
            <div id="setting_box" className="setting-box">
                <a href="# " className="overlay" onClick={() => closeSetting()}>
                    
                </a>
                <div className="setting_box_body">
                    <div onClick={() => closeSetting()}>
                        <div className="sidebar-back text-left">
                            <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
                        </div>
                    </div>
                    <div className="setting-body">
                    <div className="setting-title">
                            <h4>color option</h4>
                        </div>
                        <div className="setting-contant">
                            <ul className="color-box">
                                <li>
                                    <input id="colorPicker1" type="color" defaultValue="#ff4c3b"  name="Background" onChange={(e) => layoutColorFunc(e)}/>                                       
                                </li>
                                <span className="ml-3">theme deafult color</span>
                            </ul>
                        </div>
                        <div className="setting-title">
                            <h4>RTL</h4>
                        </div>
                        <div className="setting-contant">
                            <ul className="setting_buttons">
                                <li className="active" id="ltr_btn">
                                    <a href="# " className="btn setting_btn" onClick={ () => layoutType(layoutState)}>
                                        {layoutState}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="buy_btn">
                            <a href="https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773?s_rank=1"
                                className="btn btn-block purchase_btn">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i> purchase Multikart now!</a>
                            <a href="https://themeforest.net/item/multikart-responsive-angular-ecommerce-template/22905358?s_rank=3"
                                className="btn btn-block purchase_btn">
                                <Media src={`/assets/images/icon/angular.png`} alt="" className="img-fluid" /> Multikart Angular</a>
                            <a href="https://themeforest.net/item/multikart-responsive-ecommerce-html-template/22809967"
                                className="btn btn-block purchase_btn">
                                <i className="fa fa-html5" aria-hidden="true"></i> Multikart HTML</a>
                            <a href="https://themeforest.net/item/multikart-multipurpose-shopify-sections-theme/23093831?s_rank=1"
                                className="btn btn-block purchase_btn">
                                <Media src={`/assets/images/icon/shopify.png`} alt="" className="img-fluid" /> Multikart Shopify</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar-btn dark-light-btn">
                <div className="dark-light">
                    <div
                        className="theme-layout-version"
                        onClick={() => changeThemeLayout()}
                    >{themeLayout?'Light':'Dark'}</div>
                </div>
            </div>
            <div className="addcart_btm_popup" id="fixed_cart_icon">
                <a href={null} className="fixed_cart">
                    <i
                    className="fa fa-clone"
                    aria-hidden="true"
                    onClick={toggle}
                    title="Configuration"
                    ></i>
                </a>
                </div>
                <Modal centered={true} isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Config</ModalHeader>
                    <ModalBody className="p-3">
                    {
                        Object.keys(config).map((key, i) => (
                            <p key={i}>
                            <span>{key}:</span>
                            <span>{config[key]}</span>
                            </p>
                        ))
                    }
                    </ModalBody>
                    <ModalFooter>
                        <p className="lh-cls"><b>Note: </b>Copy upper config and paste it in <b>"/components/customizer/config.json"</b> </p>
                    </ModalFooter>
                </Modal>

            <ToastContainer/>
        </div>
    );

}

export default ThemeSettings;
