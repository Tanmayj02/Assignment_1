import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { fetchUsers } from "./Redux/ReduxSlice/usersSlice";

/*
BOOTSTRAP
*/
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./Redux/Store/Store";

store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
