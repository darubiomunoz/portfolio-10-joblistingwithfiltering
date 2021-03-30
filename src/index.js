import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from './app/store';

import "./Variables.css";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* const DATA_URL = "https://api.jsonbin.io/b/605d1c7c7c9f775f63899095/10";

const fetchData = async URL => {
  const response = await fetch(URL);
  if(!response.ok) console.log(`An error has occurred: ${response.status}`);
  const data = await response.json();
  return data;
}

let data;

document.addEventListener('DOMContentLoaded', async () => {
  try {
    data = await fetchData(DATA_URL);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}); */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
