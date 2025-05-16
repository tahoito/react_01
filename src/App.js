// src/App.js
import React from "react";

function MyButton(){
  return (
    <button>I am a button.</button>
  );
}

export default function MyApp(){
  return(
    <div>
      <h1>Welcome to MyApp</h1>
      <MyButton />
    </div>
  );
}
