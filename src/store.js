import { createStore, combineReducers } from "redux";
import { tracks, audioContext } from "./reducer";

const createRootReducer = () => combineReducers({ tracks, audioContext });

export default function configureStore() {
  const store = createStore(createRootReducer());
  return store;
}