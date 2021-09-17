import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import reducer, { initialState } from "./reducer";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "./Provider";

ReactDOM.render(
  <React.StrictMode>
    <Provider initialState={initialState} reducer={reducer}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
