import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";


const Index = (props) => {
  const zoos = useLoaderData();

  return <>
  <div style={{textAlign: "center"}}>
      <h2>Workout List</h2>
      <Form action="/create" method="post">
          <input type="text" name="subject" placeholder="Muscle Group"/>
          <input type="text" name="details" placeholder="Excersize"/>
          <input type="text" name="info" placeholder="Sets & Reps"/>
          <button className="list">Add to List</button>
      </Form>
  </div>
  {zoos?.map((post) => <Post key={post.id} post={post} />)}
  </>;
};

export default Index;