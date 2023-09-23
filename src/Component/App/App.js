import { useEffect, useState } from "react";
import Posts from "../Posts/Posts";

const App = () => {
  let [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(res => {
        setPosts(res);
      })
      .catch(error => console.log(error));
  });
  return (
    <>
      <div className="container-fluid col-10 p-0 bg-dark text-white p-5">
        <div className="row m-0">
          <Posts posts={posts} />
        </div>
      </div>
    </>
  );
};

export default App;
