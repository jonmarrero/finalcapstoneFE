import { Link } from "react-router-dom";

const Post = (props) => {
  const post = props.post;

  // style
  const div = {
    textAlign: "center",
    border: "5px solid",
    margin: "15px auto",
    width: "50%",
  };

  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.subject}</h1>
      </Link>
      <h2>{post.details}</h2>
    </div>
  );
};

export default Post;