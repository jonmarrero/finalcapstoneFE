import { Link } from "react-router-dom";

const Post = (props) => {
  const post = props.post;

  //style
  const div = {
    textAlign: "center",
    border: "5px solid",
    color: "black",
    margin: "15px auto",
    width: "50%",
    backgroundColor: "white",
  };
  console.log(post)

  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.subject}</h1>
      </Link>
      <h2>{post.details}</h2>
      <h3>{post.info}</h3>
    </div>
  );
};

export default Post;