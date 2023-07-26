import React from 'react';
import Appnav from '../components/Appnav';
import BlogPost from '../components/BlogPost';

const Layout = (props) => {
    return (
        <div>
            <Appnav/>
            <BlogPost/>
            {props.children}
        </div>
    );
};

export default Layout;