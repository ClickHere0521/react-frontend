import React from "react";
import CommonLayout from '../../components/shop/common-layout';
import ServiceLayout from "../../components/common/Service/service1";
import WatchService from "../../components/common/Service/service2";
import ToolService from "../../components/common/Service/service3";

const Service = () => {
    return (
        <CommonLayout parent="home" title="elements" subTitle="service">
            <div className="section-t-space">
                <ServiceLayout sectionClass={"service border-section small-section"}  />
            </div>
            <WatchService />
            <div className="section-b-space">
                <ToolService />
            </div>
        </CommonLayout>
    )
}

export default Service;