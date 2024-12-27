import PostGrid from "../posts/posts-grid";
import classes from "./featured-post.module.css";

function FeaturedPost(props) {
  return (
    <section className={classes.latest}>
      <h1>Treatment</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}
export default FeaturedPost;
