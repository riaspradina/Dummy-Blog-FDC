import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import React, { useEffect } from "react";

const DUMMY_POSTS = {
  slug: "scalling",
  title: "Scalling Gigi",
  image: "scalling.jpg",
  content:
    "# Gigi rapi sempurna dengan perawatan oleh Ortodontis berpengalaman.",
};

function PostContent() {
  function PostDetail() {
    useEffect(() => {}, []);
  }

  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
