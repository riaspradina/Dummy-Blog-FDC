import FeaturedPost from "@/components/home-page/featured-post";
import Hero from "@/components/home-page/hero";
import { getFeaturedPost } from "@/lib/posts-util";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPost();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
