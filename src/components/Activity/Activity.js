import React from 'react';

export default function Activity({ data }) {
  const days = data.data;

  let columnsStep;
  let columns = [];

  if (window.innerWidth >= 660) {
    const timeArr = days.mon.concat(days.tue, days.wed, days.thu, days.thu, days.sat, days.sun);
    for (let i=0; i<timeArr.length; i+=2) {
      columns.push(timeArr[i] + timeArr[i+1]);
    }
    columnsStep = Math.max(...columns) / 3;

  } else {
    const daysArr = Object.values(days);
    for (let i=0; i<24; i++) {
      for (let j=0; j<7; j++) {
        columns.push(daysArr[j][i]);
      }
    }
    columnsStep = Math.max(...columns) / 3;
  }

  return (
    <div className="Activity">
      <div className="Activity__grid">
        {
          columns.map((column, index) => {
            if (column == 0)
              return (
                <div
                  key={index}
                  className="Activity__column Activity__column_s">
                </div>
              )
            if (column <= columnsStep)
              return (
                <div
                  key={index} 
                  className="Activity__column Activity__column_m">
                </div>
              )
            if (column <= columnsStep*2)
              return (
                <div
                  key={index} 
                  className="Activity__column Activity__column_l">
                </div>
              )
            else return (
                  <div
                    key={index}
                    className="Activity__column Activity__column_xl">
                  </div>
                )
          })
        }
      </div>
      <div className="Activity__legend">
          <div className="Activity__legend-wrapper">
            <div className="Activity__legend-time"></div>
            <p className="Activity__legend-text">{columns.length > 100 ? '1 час' : '2 часа'}</p>
          </div>
          <div className="Activity__legend-wrapper">
            <div className="Activity__legend-color"></div>
            <p className="Activity__legend-text">0</p>
          </div>
          <div className="Activity__legend-wrapper">
            <div className="Activity__legend-color"></div>
            <p className="Activity__legend-text">1 — 2</p>
          </div>
          <div className="Activity__legend-wrapper">
            <div className="Activity__legend-color"></div>
            <p className="Activity__legend-text">3 — 4</p>
          </div>
          <div className="Activity__legend-wrapper">
            <div className="Activity__legend-color"></div>
            <p className="Activity__legend-text">5 — 6</p>
          </div>
        </div>
    </div>
  )
}