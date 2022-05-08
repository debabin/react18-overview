import React from "react";

import { posts } from "../data/posts";

export const List = () => {
  const [text, setText] = React.useState("");
  const defferedValue = React.useDeferredValue(text);

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      {posts
        .filter((post) =>
          post.name.toLowerCase().includes(defferedValue.toLowerCase())
        )
        .map((post) => (
          <div>
            <div>{post.index}</div>
            <div>{post.name}</div>
          </div>
        ))}
    </>
  );
};
