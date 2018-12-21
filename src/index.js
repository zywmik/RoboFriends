import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./containers/App";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
