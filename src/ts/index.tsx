import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./pages/App";
import "../stylus/index.styl";

ReactDom.render(<App />, document.getElementById("content") as HTMLElement);
