import React from 'react';

const BlogDetails = (props) => {
    return (
        <div>
            <div className='mx-28 my-16 py-16'>
                <img className=' mb-10' src={props.list['postDetails']['img']} />

                <h2 className='mb-10 text-3xl font-bold'> {props.list['postDetails']['title']}</h2>

                <p> {props.list['postDetails']['content']}</p>
            </div>
        </div>
    );
};

export default BlogDetails;