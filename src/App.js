import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CommentContainer from "./comment";

const api = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
});

function App() {
  const [comments, setComments] = useState();

  useEffect(() => {
    api
      .get("/comments")
      .then((data) => {
        console.log(data.data);
        setComments(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>{comments && comments.length} comments</h1>
      <CommentContainer key="#" />
      <br />
      {comments &&
        comments.map((comment, index) => {
          return (
            <div key={comment.id}>
              <CommentContainer name={comment.name} comment={comment.body} />
              <br />
            </div>
          );
        })}
    </div>
  );
}

export default App;
