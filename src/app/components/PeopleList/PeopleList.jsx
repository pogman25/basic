import React, { memo } from 'react';
import './peopleList.css';

function PeopleList({ peopleList }) {
  return (
    <ul className="people-list">
      {peopleList.map(i => (
        <li className="people-list__item" key={i.name}>
          <h3>{i.name}</h3>
          <ul className="people-list__information">
            <li>{`eye_color: ${i.eye_color}`}</li>
            <li>{`hair_color: ${i.hair_color}`}</li>
            <li>{`skin_color: ${i.skin_color}`}</li>
            <li>{`height: ${i.height}`}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default memo(PeopleList);
