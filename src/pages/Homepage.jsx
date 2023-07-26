import React, { useEffect, useState } from 'react';
import { newestPost } from '../api/APICall';
import BlogPost from '../components/BlogPost';
import Layout from '../layout/Layout';

const Homepage = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        (async()=>{
            const res = await newestPost();
            setList(res)
        })()
    }, []);

    return (
        <Layout>
            <BlogPost list={list} />
        </Layout>
    );
};

export default Homepage;