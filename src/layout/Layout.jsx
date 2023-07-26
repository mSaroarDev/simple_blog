import React from 'react';
import Appnav from '../components/Appnav';

const Layout = (props) => {
    return (
        <div>
            <Appnav/>
            {props.children}
        </div>
    );
};

export default Layout;