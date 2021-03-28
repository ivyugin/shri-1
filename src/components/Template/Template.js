import React from 'react';
import Leaders from '../Leaders/Leaders';
import Vote from '../Vote/Vote';
import Chart from '../Chart/Chart';
import Diagram from '../Diagram/Diagram';
import Activity from '../Activity/Activity';

export default function Template({
  alias, data, isLight,
}) {

  function getTemplateByAlias() {
    switch (alias) {
      case 'leaders':
        return (
          <Leaders
            data={data}
          />
        );
      case 'vote':
        return (
          <Vote
            data={data}
          />
        );
      case 'chart':
        return (
          <Chart
            data={data}
          />
        );
      case 'diagram':
        return (
          <Diagram
            data={data}
            isLight={isLight}
          />
        );
      case 'activity':
        return (
          <Activity
            data={data}
            isLight={isLight}
          />
        );
      default:
        return 'foo';
    }
  }

  return (
    <div className={`Template ${isLight && 'theme_light'}`}>
      <div className="Template__container">
        <div className="Template__body">
          <div className="Template__header">
            <h1 className="Template__title">{data.title}</h1>
            <p className="Template__subtitle">{data.subtitle}</p>
          </div>
          {getTemplateByAlias(alias)}
        </div>
      </div>
    </div>
  );
}
