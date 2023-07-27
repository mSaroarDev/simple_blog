import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postList } from "../api/APICall";
import Loader from "../components/Loader";
import Layout from "../layout/Layout";
import BlogPost from "./../components/BlogPost";

const ByCategory = () => {
  const { categoryId } = useParams();
  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postList(categoryId);
      setList(res);
    })();
  }, [categoryId]);

  return (
    <Layout>{list === null ? <Loader /> : <BlogPost list={list} />}</Layout>
  );
};

export default ByCategory;
