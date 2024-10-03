import React from 'react';
// import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person2Icon from '@mui/icons-material/Person2';
import { IconButton,Badge } from '@mui/material';
// import Sidebar from './Sidebar';

const Navbar = ({ isHomePage, pageTitle }) => {
  const navbarHeightClass = isHomePage ? 'h-16 sm:h-20 md:h-24' : 'h-12 sm:h-14';

  return (
    <div className={`navbar relative w-full border border-solid text-white bg-[#4b5ac4] border-[#4b5ac4] ${navbarHeightClass}`}>
      <div className='navlist flex flex-row items-center justify-between w-full h-full px-2 sm:px-4'>
        <div className='logo text-center text-sm sm:text-base md:text-lg font-bold w-1/4 sm:w-[8%] truncate'>TUNTUN</div>
        <div className='text-base sm:text-lg font-bold w-1/2 sm:w-[80%] text-center truncate'>
          {pageTitle}
        </div>
        <div className='w-1/4 sm:w-[10%]'>
          <ul className='flex flex-row items-center justify-end h-full'>
            <li className='pl-2 sm:pl-4'>
              <IconButton color="inherit" size="small">
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon fontSize="small" />
                </Badge>
              </IconButton>
            </li>
            <li className='ml-2 sm:ml-4 border rounded-full bg-black h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center'>
              <IconButton color="inherit" size="small">
                <Person2Icon style={{ fontSize: '1.5rem', color: '#fff' }} />
              </IconButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;