import { legacy_createStore } from "redux";
import rootReducer from "../Reducers/ParentReducer";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../ReduxSlice/usersSlice";

// const store = configureStore(
//   reducer: rootReducer,
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
