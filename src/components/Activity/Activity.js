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

  const [horisontalWindow, setHorisontalWindow] = React.useState();
  const [columns, setColumns] = React.useState([]);
  const [columnsMax, setColumnsMax] = React.useState();

  const days = data.data;

  let verticalArr = [];
  const daysArr = Object.values(days);
  for (let i=0; i<24; i++) {
    for (let j=0; j<7; j++) {
      verticalArr.push(daysArr[j][i]);
    }
  }
  const verticalArrMax = Math.max(...verticalArr) / 3;

  let horizonArr = [];
  const timeArr = days.mon.concat(days.tue, days.wed, days.thu, days.thu, days.sat, days.sun);
  for (let i=0; i<timeArr.length; i+=2) {
    horizonArr.push(timeArr[i] + timeArr[i+1]);
  }
  const horizonArrMax = Math.max(...horizonArr) / 3;

  React.useEffect(() => {
    function handleResize() {
      setHorisontalWindow(window.innerWidth > 660);
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (horisontalWindow) {
      setColumns(horizonArr);
      setColumnsMax(horizonArrMax);
    } else {
      setColumns(verticalArr);
      setColumnsMax(verticalArrMax);
    }
  }, [horisontalWindow])

  return (
    <div className="Activity">
      <div className="Activity__grid">
        {
          columns.map((column, index) => {
            if (column == 0) return (<img src={isLight ? minLight : minDark} key={index} className="Activity__column" />)
            if (column > columnsMax*2) return (<img src={isLight ? extraLight : extraDark} key={index} className="Activity__column" />)
            if (column > columnsMax) return (<img src={isLight ? maxLight : maxDark} key={index} className="Activity__column" />)
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