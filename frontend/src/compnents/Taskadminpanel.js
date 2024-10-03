import { Divider, Avatar, LinearProgress } from '@mui/material';
import React from 'react';
import '../compnents/cssfile.css'
// import { Link } from 'react-router-dom';

const Taskadminpanel = () => {
  const totalDaysAssigned = 30;
  const totalTasks = 20;
  const tasksLeft = 20;
  const totalMembers = [
    'url_to_member_1_avatar',
    'url_to_member_2_avatar',
    'url_to_member_3_avatar',
  ];

  const getAvatarColor = (index) => {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12']; // Modern and subtle colors
    return colors[index % colors.length];
  };

  // Calculate completion percentage
  const completionPercentage = ((totalTasks - tasksLeft) / totalTasks) * 100;

  return (
    <div className='projectcontainer ml-10 mt-2 w-[17rem] h-[18rem] border rounded-md border-violet-200 border-solid custom-container overflow-hidden'>
  <div className='projectname h-1/6 w-full m-2 text-xl font-bold text-gray-800'>
        Project: Amazing Project Name
      </div>  
      <Divider />
      <div className='project-desc h-2/5 w-full flex'>
        <div className='flex flex-col items-center w-1/2'>
          <p className='text-sm font-semibold m-2 text-gray-600'>Total Days</p>
          <p className='text-xl font-thin text-gray-800'>{totalDaysAssigned}</p>
        </div>

        <Divider orientation="vertical" flexItem />

        <div className='flex flex-col items-center w-1/2'>
          <p className='text-sm font-semibold m-2 text-gray-600'>Total Tasks</p>
          <p className='text-xl font-thin text-gray-800'>{totalTasks}</p>
        </div>
      </div>
      <Divider />
      <div className='flex justify-around h-2/6 items-center'>
        <div className='taskremainings'>
          <span className='text-xl font-bold text-gray-800'>{tasksLeft}</span> tasks left
          <LinearProgress
            variant="determinate"
            value={completionPercentage}
            sx={{ width: '60%', ml: '10px' }}
          />
        </div>
        <div className='flex items-center'>
          {totalMembers.map((member, index) => (
            <Avatar
              key={index}
              src={member}
              alt={`Member ${index + 1}`}
              sx={{
                ml: index > 0 ? '-12px' : '0', // Adjust the overlap distance
                zIndex: index + 1, // Set higher zIndex for later avatars
                position: 'relative',
                backgroundColor: getAvatarColor(index),
                border: '2px solid white', // Add a border for a cleaner look
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Taskadminpanel;
