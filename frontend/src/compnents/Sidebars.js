import { Divider } from '@mui/material';
import React, { useState } from 'react';
import { FaBars, FaHome, FaProjectDiagram, FaCog, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Sidebars = ({ishomesidebar}) => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isProjectsOpen, setProjectsOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleProjects = () => {
    setProjectsOpen(!isProjectsOpen);
  };

  return (
    <div className={`${ishomesidebar?'relative -top-8 ':'project'} ${ishomesidebar?'h-[105%]':'h-[100%]'} ${isMenuOpen ? 'menu-open' : ''} w-${isMenuOpen ? '[10%]' : '[1%]'} bg-${isMenuOpen ?'' : 'to-blue-800'}`} style={{ transition: 'width 0.5s ease-in-out' }}>
      <div className={`Sidebar h-full border rounded-md border-gray-300 `}>
        <div className={`hamburger w-full h-10 flex items-center justify-center`} onClick={toggleMenu}>
          <FaBars />
        </div>
        {isMenuOpen && (
          <div className='menu-items'>
            {/* Use Link to navigate to different routes */}
            <Link to="/">
              <div className='menu-item flex items-center'>
                <FaHome />
                <span className='ml-2'>Dashboard</span>
              </div>
            </Link>
            <Divider sx={{ width: '100%' }} />
            <Link to="/project">
              <div className='menu-item flex flex-row items-center w-full' onClick={toggleProjects}>
                <FaProjectDiagram />
                <span className='ml-2 '>Projects</span>
                <div className='m-3'><FaChevronDown /></div>
              </div>
            <div className='-mt-3'>{isProjectsOpen && (
                  <ul className=''>
                    <li className='dropdown-item'>Active</li>
                    <li className='dropdown-item'>Previous</li>
                  </ul>
                )}</div>
            </Link>
            <Divider sx={{ width: '100%' }} />
            {/* Add more links as needed */}
            {/* ... */}
            <Link to="/settings">
              <div className='menu-item flex items-center'>
                <FaCog />
                <span className='ml-2'>Settings</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebars;