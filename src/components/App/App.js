import React from 'react';
import { useLocation } from 'react-router-dom';

import Template from '../Template/Template';

import dataArr from '../../data/data.json';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const [voteUserID, setVoteUserID] = React.useState();

  const query = useQuery();
  const slide = query.get('slide');
  const theme = query.get('theme');

  const isLight = theme === 'light';

  function renderTemplate({ alias, data }) {
    return (
      <Template
        alias={alias}
        data={data}
        isLight={isLight}
        voteUserID={voteUserID}
        setVoteUserID={setVoteUserID}
      />
    );
  }

  return (
    <div className="App">
      { renderTemplate(dataArr[slide - 1]) }
    </div>
  );
}

export default App;
