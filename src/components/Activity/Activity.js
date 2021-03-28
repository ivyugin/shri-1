import React from 'react';

import minDark from '../../images/min-dark.svg';
import midDark from '../../images/mid-dark.svg';
import maxDark from '../../images/max-dark.svg';
import extraDark from '../../images/extra-dark.svg';

import minLight from '../../images/min-light.svg';
import midLight from '../../images/mid-light.svg';
import maxLight from '../../images/max-light.svg';
import extraLight from '../../images/extra-light.svg';

import legendDark from '../../images/activiti-legend-dark.svg';
import legendLight from '../../images/activiti-legend-light.svg';

export default function Activity({ data, isLight }) {
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
            if (column == 0) return (<img src={isLight ? minLight : minDark} key={index} className="Activity__column" />)
            if (column > columnsStep*2) return (<img src={isLight ? extraLight : extraDark} key={index} className="Activity__column" />)
            if (column > columnsStep) return (<img src={isLight ? maxLight : maxDark} key={index} className="Activity__column" />)
            else return (<img src={isLight ? midLight : midDark} key={index} className="Activity__column" />)
          })
        }
      </div>
      <div className="Activity__legend">
          <div className="Activity__legend-wrapper">
            <div className="Activity__legend-color">
              <img src={isLight ? legendLight : legendDark} />
            </div>
            <p className="Activity__legend-text">2 часа</p>
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