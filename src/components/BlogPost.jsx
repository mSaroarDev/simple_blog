import React from "react";
import { Link } from "react-router-dom";


const BlogPost = (props) => {
    return (
      <div className="my-16 mx-16 p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          
          {
            props.list.map((item, index)=>{
              return (
                <Link key={index} to={"/details/" + item["id"]}>
                  <div className="card w-80 bg-base-100 shadow-xl mb-7">
                <figure>
                  <img
                    src={item["img"]}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item["title"]}
                  </h2>
                  <p>
                    {item["short"]}
                  </p>
                </div>
              </div>
                </Link>
              )
            })
          }




        </div>
      </div>
    );
};

export default BlogPost;