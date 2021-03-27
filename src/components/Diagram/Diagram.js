import React from 'react';
import DiagramСategories from '../DiagramСategories/DiagramСategories';

import diagramLight from '../../images/diagram-light.svg';
import diagramDark from '../../images/diagram-dark.svg';

export default function Diagram({ data, isLight }) {
  
  return (
    <div className="Diagram">
      <div className="Diagram__radial">
        <div className="Diagram__pic" style={{ backgroundImage: `url(${isLight ?diagramLight : diagramDark})` }}></div>
          <div className="Diagram__text">
            <p className="Diagram__totalText">{data.totalText}</p>
            <p className="Diagram__differenceText">{data.differenceText}</p>
          </div>
      </div>
      <div className="Diagram__legend">
        {data.categories.map(categories => {
          return (
            <>
              <DiagramСategories 
                categories={categories}/>
              <hr className="Diagram__separator" />
            </>
          )
        })}
      </div>
    </div>
  );
}
