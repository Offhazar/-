import { createStore } from 'redux';
const init = {
  counter: 0,
  show: true,
};
const reduxCounter = (state = init, action) => {
  if (action.type === 'PLUS') {
    return {
      counter: state.counter + action.value,
      show: state.show,
    };
  }
  if (action.type === 'MINUS') {
    return {
      counter: state.counter + action.value,
      show: state.show,
    };
  }
  if (action.type === 'SHOW') {
    return {
      counter: state.counter,
      show: action.value,
    };
  }
  return state;
};
const store = createStore(reduxCounter);

export default store;
