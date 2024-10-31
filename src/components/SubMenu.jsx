


import React from 'react';

const SubMenu = ({ items }) => (
  <div className="sub-menu active">
    <ul>
      {items.map((item, index) => (
        <li key={index}><button>{item}</button></li>
      ))}
    </ul>
  </div>
);

export default SubMenu;
