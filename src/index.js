import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const DATA_URL = "https://api.jsonbin.io/b/605d1c7c7c9f775f63899095";

const fetchData = async URL => {
  const response = await fetch(URL);
  if(!response.ok) console.log(`An error has occurred: ${response.status}`);
  const data = await response.json();
  return data;
}

fetchData(DATA_URL);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
