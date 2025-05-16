import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';


export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>It is about Button</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );

}

function MyButton({ count, onClick }){
  return(
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
MyButton.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

