import React from 'react';
import DiagramСategories from '../DiagramСategories/DiagramСategories';

export default function Diagram({ data }) {
  
  return (
    <div className="Diagram">
      <div className="Diagram__radial">
        <div className="Diagram__pic"></div>
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
 