import React from 'react';

export default function DiagramСategories({ categories }) {
  return (
    <div className="DiagramСategories">
      <div className="DiagramСategories__wrapper">
        <div className="DiagramСategories__color"></div>
        <p className="DiagramСategories__title">{categories.title}</p>
      </div>
      <div className="DiagramСategories__wrapper">
        <p className="DiagramСategories__commits">{categories.differenceText.match(/\+?\d+/)}</p>
        <p className="DiagramСategories__commits">{categories.valueText.match(/\d+/)}</p>
      </div>
    </div>
  );
}