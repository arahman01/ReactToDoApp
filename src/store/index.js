import { createStore } from "redux";
import { loadState } from "../storage/localStorage";
import { saveState } from "../storage/localStorage";

const initialState = {
  todos: [],
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "add") {
    return { ...state, todos: [action.payload, ...state.todos] };
  }
  if (action.type === "remove") {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    };
  }
  if (action.type === "update") {
    const index = state.todos.findIndex((todo) => todo.id === action.id);
    const newArray = [...state.todos]; //making a new array
    newArray[index].status = action.payload; //changing value in the new array
    return {
      ...state, //copying orignal state
      todos: newArray, //reassingning todos to new array
    };
  }
  return state;
};

const persistedState = loadState();
const store = createStore(counterReducer, persistedState);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  });
});

export default store;
