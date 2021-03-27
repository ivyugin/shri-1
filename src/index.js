import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App/App.js";
import './index.css';

import dataArr from './data/data.json';

function renderTemplate(alias, data) {
  return (
    <App 
      alias={alias}
      data={data}
    />
  );
}

window.renderTemplate = renderTemplate;

ReactDOM.render(
  <BrowserRouter>
    {renderTemplate(dataArr[0].alias, dataArr[0].data)}
  </BrowserRouter>,
  document.getElementById("root")
);