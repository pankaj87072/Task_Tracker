import React from 'react';
import { Divider } from '@mui/material';
import Dropdown from './Dropdown';

const AllProjects = () => {
  return (
    <div className='maincontainer border border-gray-200 rounded-md w-full sm:w-11/12 m-2 bg-white shadow-md overflow-hidden'>
      <div className='heading font-bold from-neutral-100 font-serif m-3'>All Projects</div>
      <Divider />
      <div className='show-and-search flex flex-col sm:flex-row justify-between items-center p-3'>
        <div className='show mb-2 sm:mb-0'>
          Show<Dropdown />
        </div>
        <div className='search mt-2 sm:mt-0'>
          Search <input type='text' className='border p-2 rounded w-full sm:w-auto' placeholder='Search projects' />
        </div>
      </div>
      <Divider />
      <div className='headingdetail flex flex-row bg-blue-50 text-sm sm:text-base'>
        <div className='project p-2 sm:p-3 w-1/3'>Project</div>
        <div className='progress p-2 sm:p-3 w-1/3 text-center'>Progress</div>
        <div className='team p-2 sm:p-3 w-1/3 text-center'>Team-Member</div>
      </div>
      <Divider />
      <div className='container-of-list flex flex-row justify-between text-xs sm:text-sm'>
        <div className='projectname p-2 sm:p-3 w-1/3'>Design and Develop</div>
        <div className='stats p-2 sm:p-3 w-1/3 text-center'><span>3/4</span>----</div>
        <div className='teammember p-2 sm:p-3 w-1/3 text-center'>4 People</div>
      </div>
      <Divider />
      <div className='container-of-list flex flex-row justify-between text-xs sm:text-sm'>
        <div className='projectname p-2 sm:p-3 w-1/3'>Design and Develop</div>
        <div className='stats p-2 sm:p-3 w-1/3 text-center'><span>3/4</span>----</div>
        <div className='teammember p-2 sm:p-3 w-1/3 text-center'>4 People</div>
      </div>
      <Divider />
      <div className='footer flex flex-row justify-center p-2 sm:p-3 text-sm sm:text-base'>
        <div className='hover:text-blue-400 cursor-pointer'>Prev</div>
        <div className='border border-gray-200 rounded-lg w-8 text-center mx-3 hover:bg-blue-400 hover:text-white'>1</div>
        <div className='hover:text-blue-400 cursor-pointer'>Next</div>
      </div>
    </div>
  );
};

export default AllProjects;