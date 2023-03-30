import { Link, useLoaderData, Form } from "react-router-dom";
// import { SearchOutlined, ShoppingBasket } from '@material-ui/icons'

const Show = (props) => {
  const post = useLoaderData();

  //styles
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.subject}</h1>

      <h2>{post.details}</h2>
      <img src="https://media.istockphoto.com/id/451027665/vector/illustration-of-the-strong-garilly.jpg?b=1&s=612x612&w=0&k=20&c=mBULDJT4TsdwaVtJbcB4-pnIYl4uCI0OMQgixPii06k="></img>
      <div>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="subject"
            placeholder="subject"
            defaultValue={post.subject}
          />
          <input
            type="text"
            name="details"
            placeholder="details"
            defaultValue={post.details}
          />
          <button>Update Workout</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
            <button>Delete Workout</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;