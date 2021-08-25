import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const Usereducerexample = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>count = {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default Usereducerexample;
