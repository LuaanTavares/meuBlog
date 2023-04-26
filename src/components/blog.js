import React from "react";
import "./blog.css";

export default function Blog({posts}) {
  console.log(posts)
  return (
    <div className="postsContainer">
      {/* EM UMA SITUAÇÃO REAL, EU USARIA O MAP*/}
      {posts.map((post) => (
        <div className="postsBox">
          <h1 >{post.titulo}</h1>
          <p >{post.texto}</p>
        </div>
      ))}

      {/* ESTA SERIA UMA FORMA MAIS MANUAL */}
      {/* <div className="postsBox">
        <h1>{posts[0].titulo}</h1>
        <p>{posts[0].texto}</p>
      </div>
      <div className="postsBox">
        <h1>{posts[1].titulo}</h1>
        <p>{posts[1].texto}</p>
      </div>
      <div className="postsBox">
        <h1>{posts[2].titulo}</h1>
        <p>{posts[2].texto}</p>
      </div>
      <div className="postsBox">
        <h1>{posts[3].titulo}</h1>
        <p>{posts[3].texto}</p>
      </div> */}
    </div>
  );
}
