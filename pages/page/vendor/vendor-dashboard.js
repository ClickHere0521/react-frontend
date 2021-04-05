import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import Dashboard from './common/dashboard';

const VendorDashboard = () => {
    return (
        <CommonLayout parent="home" title="vendor dashboard">
            <Dashboard />
        </CommonLayout>
    )
}

export default VendorDashboard;