


import React, { useState } from 'react';
import {
  AiOutlineDashboard,
  AiOutlineSetting,
  AiOutlineFolderAdd,
  AiOutlineUser,
  AiOutlineBell,
  AiOutlineShoppingCart,
  AiOutlineLock,
} from 'react-icons/ai';

import MenuItem from './MenuItem';



const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu);
  };

  return (
    <div className='background-section'>
      <aside className="sidebar">
        <header>
          <img src="/logo.png" alt="Logo" />
          <h1>Farzanee_web</h1>
        </header>
        <ul>
          <MenuItem icon={<AiOutlineDashboard />} title="Dashboard" />
          <MenuItem 
            icon={<AiOutlineSetting />} 
            title="Settings" 
            toggleMenu={() => toggleMenu('settings')}
            isActive={activeMenu === 'settings'}
            subItems={['Display', 'Appearance', 'Preferences']}
          />
          <MenuItem 
            icon={<AiOutlineFolderAdd />} 
            title="Create" 
            toggleMenu={() => toggleMenu('create')}
            isActive={activeMenu === 'create'}
            subItems={['Article', 'Document', 'Video', 'Presentation']}
          />
          <MenuItem 
            icon={<AiOutlineUser />} 
            title="Profile" 
            toggleMenu={() => toggleMenu('profile')}
            isActive={activeMenu === 'profile'}
            subItems={['Avatar', 'Theme']}
          />
          <MenuItem icon={<AiOutlineBell />} title="Notifications" />
          <MenuItem icon={<AiOutlineShoppingCart />} title="Products" />
          <MenuItem icon={<AiOutlineLock />} title="Account" />
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
