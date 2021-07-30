import React, { useEffect, useState } from "react";

const GetPost = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setPost(json);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setPost({});
        setError("There was a problem");
      });
  }, []);
  return (
    <div>
      <span>Result from GetPost</span>
      <br />
      {loading ? "Loading..." : post.title}
      {error || null}
      <hr />
    </div>
  );
};

export default GetPost;
