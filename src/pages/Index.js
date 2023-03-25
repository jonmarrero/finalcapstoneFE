import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";


const Index = (props) => {
  const zoos = useLoaderData();

  return <>
  <div style={{textAlign: "center"}}>
      <h2>Create a New Workout</h2>
      <Form action="/create" method="post">
          <input type="text" name="subject" placeholder="subject"/>
          <input type="text" name="details" placeholder="subject"/>
          <button>Create New Workout</button>
      </Form>
  </div>
  {zoos?.map((post) => <Post key={post.id} post={post} />)}
  </>;
};

export default Index;