import React from "react";

import { posts } from "../data/posts";

export const List = () => {
  const [text, setText] = React.useState("");
  const [filteredText, setFilteredText] = React.useState(text);
  const [isPending, setTransition] = React.useTransition();
  console.log("isPending", isPending);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
          setTransition(() => {
            setFilteredText(e.target.value);
          });
        }}
      />
      {isPending && <div>Loading</div>}
      {posts
        .filter((post) =>
          post.name.toLowerCase().includes(filteredText.toLowerCase())
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
