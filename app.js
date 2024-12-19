import React, { createElement } from "react";
import ReactDom from "react-dom/client";

const heading = React.createElement("h1", {}, "Namste Avinash");

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(heading);
