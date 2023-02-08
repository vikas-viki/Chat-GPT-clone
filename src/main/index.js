import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <App />
);

// For auto injecting without reload - don't remove
if(module.hot){
    module.hot.accept();
}