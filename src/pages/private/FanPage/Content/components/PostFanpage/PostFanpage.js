import React, { useState, useEffect } from "react";
import PostArticle from "./components/PostArticle/PostArticle";
import classNames from "classnames/bind";
import styles from "./PostFanpage.module.scss";
import CardArticle from "./components/CardArticle/CardArticle";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import httpClient from "src/api/httpClient";
import { API_CREATEFANPAGE } from "src/config/apis";

const cx = classNames.bind(styles);
export default function PostFanpage() {
  const auth = useSelector((state) => state.auth);
  const posts = auth?.user?.post;
  const parameters = useParams();
  const isCreator = auth.user.page?._id === parameters.id ? true : false;
  // console.log("isCreator", isCreator);

  useEffect(() => {
    const getFanpage = async () => {
      const res = await httpClient.get(`${API_CREATEFANPAGE}/${parameters.id}`);
    };
    getFanpage();
  }, []);
  return (
    <div className={cx("wrapper")}>
      {isCreator ? (
        <div className={cx("post-form")}>
          <PostArticle />
        </div>
      ) : (
        ""
      )}

      <div className={cx("post-article")}>
        {/* <CardArticle /> */}
        {/* <CardArticle /> */}
        {posts ? (
          posts.map((data) => <CardArticle data={data} />)
        ) : (
          <div>No post</div>
        )}
      </div>
      {/* {
        posts && ()
      } */}
    </div>
  );
}
