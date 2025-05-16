import React from 'react';
import { useState } from 'react';

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello.<br />How do you do?</p>
    </>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Apple', isFruit: false, id: 2 },
  { title: 'Google', isFruit: true, id: 3 },
];

export default function MyApp() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <div>
      <ul>{listItems}</ul>
      <MyButton />
      <AboutPage />
    </div>
  );
}
