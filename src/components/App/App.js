import React from 'react';
import { useLocation } from 'react-router-dom';

import Template from '../Template/Template';

import dataArr from '../../data/data.json';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App({ alias, data }) {
  const [voteUserID, setVoteUserID] = React.useState();

  const query = useQuery();
  const slide = query.get('slide');
  const theme = query.get('theme');

  const isLight = theme === 'light';

return (
    <div className="App">
      <Template
        alias={slide ? dataArr[slide-1].alias : alias}
        data={slide ? dataArr[slide-1].data : data}
        isLight={isLight}
        voteUserID={voteUserID}
        setVoteUserID={setVoteUserID}
      />
    </div>
  );
}

export default App;
