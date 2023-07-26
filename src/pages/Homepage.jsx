import React, { useEffect, useState } from 'react';
import BlogPost from '../components/BlogPost';
import Loader from '../components/Loader';
import Layout from '../layout/Layout';

const Homepage = () => {

    const [list, setList] = useState(null);

    useEffect(() => {
        (async() => {
            const res = await newestPost();
            setList(res);
        })()
    }, []);

    return (
        <Layout>
            {
                list === null ? <Loader/> : <BlogPost list={list} />
            }
        </Layout>
    );
};

export default Homepage;