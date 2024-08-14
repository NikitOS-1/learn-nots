import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App";
import { store } from "./redux/store";
import "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <div>ss</div>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
