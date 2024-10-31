


import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import SubMenu from './SubMenu';

const MenuItem = ({ icon, title, toggleMenu, isActive, subItems }) => (
  <li>
    <button onClick={toggleMenu} className="menu-item">
      {icon}
      <p>{title}</p>
      {subItems && <AiOutlineDown className={`chevron ${isActive ? 'rotate' : ''}`} />}
    </button>
    {isActive && subItems && <SubMenu items={subItems} />}
  </li>
);

export default MenuItem;
