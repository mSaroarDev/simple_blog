import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postDetailsFun } from '../api/APICall';
import BlogDetails from '../components/BlogDetails';
import Loader from '../components/Loader';
import Layout from '../layout/Layout';

const PostDetails = () => {


    const {postId} = useParams();

    const [list, setList] = useState(null);

    useEffect(() => {
        (async()=> {
            let res = await postDetailsFun(postId);
            setList(res);
        })()
    }, [])

    return (
        <Layout>

            {
                list === null ? <Loader/> : <BlogDetails list={list}/>
            }
                           
        </Layout>
    );
};

export default PostDetails;