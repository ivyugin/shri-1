import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from 'react-dom/server';
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App/App.js";
import './index.css';

import dataArr from './data/data.json';

function renderTemplate(alias, data) {
  return ReactDOMServer.renderToString (
    <BrowserRouter>
      <App 
        alias={alias}
        data={data}
      />
    </BrowserRouter>
  );
}

window.renderTemplate = renderTemplate;
//console.log(window)

ReactDOM.render(
    <BrowserRouter>
      <div dangerouslySetInnerHTML={{
        __html: renderTemplate(dataArr[0].alias, dataArr[0].data)
      }}></div>
    </BrowserRouter>,
  document.getElementById("root")
);
