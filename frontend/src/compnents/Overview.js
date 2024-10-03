import React from 'react'
import { Divider } from '@mui/material';
const Overview = () => {
  return (
    <div className='h-full w-full'> 
       <div className='description m-2 flex flex-row'>
            <div className='flex flex-col w-1/3 h-fit min-h-[6rem] border border-spacing-1 border-solid rounded-md bg-white m-2 shadow-md'><span className='m-2'>Description</span><input  type='text' placeholder='Describe the project' className='m-2 border border-transparent border-opacity-0 focus:border-opacity-100 focus:border-gray-300' />
      </div>
            <div className='flex flex-col w-1/3 h-fit min-h-[6rem] border border-spacing-1 border-solid rounded-md bg-white m-2 shadow-md'><span className='m-2'>Note</span><input  type='text' placeholder='Describe the project' className='m-2 border border-transparent border-opacity-0 focus:border-opacity-100 focus:border-gray-300' />
      </div>
          </div>
          <div className='flex flex-col w-[90%] h-fit min-h-[12rem] border border-spacing-1 border-solid rounded-md bg-white m-3 shadow-md'>
            <div className='font-serif font-bold m-3 h-8'>Team Member</div><Divider/>
            <div className='flex flex-row justify-between h-10 p-2 bg-gray-100'>
           <div className='pr-2'>Member</div>
           <div className='pr-2'>Status</div>
           <div>Task</div>
          </div>
          <Divider/>
          <div className='flex flex-row justify-between p-3'>
          <div className='flex'>  <div className='avtar border rounded-3xl h-10 solid w-10 bg-red-400 '></div> <span className='p-2'>CHRISTOPHER LOWRENCE</span></div>
            <div className=''>Offline</div>
            <div className=''>No-Task</div>
          </div>
          </div>
          <div className='flex flex-col w-[90%] h-fit min-h-[6rem] border border-spacing-1 border-solid rounded-md bg-white m-3 shadow-md'>
            <div className='font-serif font-bold m-2 h-8'>Recent Activity</div><Divider/>
            <div className='m-2'>No Activity Found Till Now</div>
          </div>
         </div>
  )
}

export default Overview;
 