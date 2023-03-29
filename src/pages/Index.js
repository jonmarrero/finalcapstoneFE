import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";


const Index = (props) => {
  const zoos = useLoaderData();

  return <>
  <div style={{textAlign: "center"}}>
      <h2>Workout List</h2>
      <Form action="/create" method="post">
          <input type="text" name="subject" placeholder="muscle"/>
          <input type="text" name="details" placeholder="workout"/>
          <button>Add Workout</button>
      </Form>
  </div>
  {zoos?.map((post) => <Post key={post.id} post={post} />)}
  </>;
};

export default Index;