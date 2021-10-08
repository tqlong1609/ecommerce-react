import { applyMiddleware, compose, createStore } from "redux";
import reducer from './reducers'
import thunk from "redux-thunk";
const initialState = {};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) ||
  compose;

export const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch