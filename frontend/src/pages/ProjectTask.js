import React from 'react';
import Navbar from '../compnents/Navbar';
import Taskadminpanel from '../compnents/Taskadminpanel';
// import { useState } from 'react';
// import { FaBars } from 'react-icons/fa'; // Import hamburger icon from react-icons
import Sidebars from '../compnents/Sidebars';
import { FaSearch } from 'react-icons/fa';
import { Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

// import { Link } from 'react-router-dom';


const ProjectTask = () => {
  return (
   <div className="flex flex-col h-screen">
      <Navbar pageTitle={"Project Task"} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebars ishomesidebar={false} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="p-4 flex justify-between items-center">
            <div className="border rounded-md flex items-center ml-10">
              <FaSearch className="ml-2 text-gray-500 " />
              <input
                type="text"
                placeholder="Search"
                className="m-1 ml-2 border-none outline-none"
              />
            </div>
            <Button variant="contained" color="primary">
              Create
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-wrap gap-4">
              <Link to="/project/ProjectDetail"><Taskadminpanel /></Link>
              <Taskadminpanel />
              <Taskadminpanel />
              <Taskadminpanel />
              <Taskadminpanel />
              <Taskadminpanel />
              <Taskadminpanel />
              <Taskadminpanel />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>

   
  );
  
};

export default ProjectTask;