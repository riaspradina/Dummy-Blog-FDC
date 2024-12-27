import PostGrid from "./posts-grid";
import classes from "./all-posts.module.css";

function AllPost(props) {
  return (
    <section className={classes.posts}>
      <h2>Our Services</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}
export default AllPost;
