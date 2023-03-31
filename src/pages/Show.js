import { Link, useLoaderData, Form } from "react-router-dom";

const Show = (props) => {
  const post = useLoaderData();

  //styles
  const div = {
    textAlign: "center",
    border: "3px solid black",
    width: "70%",
    margin: "10px auto",
    padding: 80,
  };

  return (
    <div style={div}>
      <h1>{post.subject}</h1>
      <h2>{post.details}</h2>
      <h3>{post.info}</h3>
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
          <input
            type="text"
            name="info"
            placeholder="info"
            defaultValue={post.info}
          />
          <button className="update">Update Workout</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
            <button className="trash">Trash</button>
        </Form>
      </div>
      <Link to="/">
        <button className="back">Go Back</button>
      </Link>
    </div>
  );
};

export default Show;