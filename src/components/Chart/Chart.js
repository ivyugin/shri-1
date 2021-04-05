import React from 'react';
import User from '../User/User';

export default function Chart({ data }) {

  const activIndex = data.values.findIndex(value => value.active);
  const values = data.values.slice(activIndex - 6, activIndex + 3);

  let maxValue = 0;
  values.forEach(value => {if (value.value > maxValue) maxValue = value.value})
  
  return (
    <div className="Chart">
      <div className="Chart__diagram">
        {values.map(value => {
          return (
            <div
              className={`Chart__diagram-column ${value.active && 'Chart__diagram-column_activ'}`}
              key={value.title}
            >
              {value.value !== 0 && <p className="Chart__diagram-value">{value.value}</p>}
              <div className="Chart__diagram-rect" style={{flex: value.value / maxValue}}></div>
              <p className="Chart__diagram-title">{value.title}</p>
            </div>
          );
        })}
      </div>
      <div className="Chart__liaders">
        <User
          user={data.users[0]}
          isChartAlias
        />
        <hr className="Chart__separator" />
        <User
          user={data.users[1]}
          isChartAlias
        />
      </div>
    </div>
  );
}
