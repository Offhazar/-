import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
const Counter = () => {
  const count = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();

  const plusHandler = () => {
    dispatch({ type: 'PLUS', value: +1 });
  };
  const minusHandler = () => {
    dispatch({ type: 'MINUS', value: -1 });
  };
  const showHandler = () => {
    dispatch({ type: 'SHOW', value: !show });
  };
  return (
    <div>
      <button onClick={plusHandler}>plus</button>
      {show && <p>{count}</p>}
      <button onClick={minusHandler}>minus</button>
      <button onClick={showHandler}>ffvf</button>
    </div>
  );
};

export default Counter;
