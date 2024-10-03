import { Divider } from '@mui/material';
import React from 'react'

const AllMember = () => {
  return (
    <div className='maincontainer border border-gray-200 rounded-md w-full sm:w-11/12 m-2 bg-white shadow-md overflow-hidden'>
      <div className='heading font-bold from-neutral-100 font-serif m-3 text-sm sm:text-base'>All Members</div>
      <Divider />
      <div className='headingpart flex flex-row justify-between m-1 border border-gray-200 rounded-md text-xs sm:text-sm'>
        <div className='Name w-1/3 p-2 sm:p-3'>Name</div>
        <div className='TodayProgress w-1/3 p-2 sm:p-3 text-center'>Today's Progress</div>
        <div className='status w-1/3 p-2 sm:p-3 text-center'>Status</div>
      </div>
      <div className='showing-list m-1 border border-gray-200 rounded-md overflow-y-auto h-40 sm:h-52'>
        <div className='flex flex-row justify-between text-xs sm:text-sm'>
          <div className='names w-1/3 p-2 sm:p-3 truncate'>Rahul Alahmdullah</div>
          <div className='Progress w-1/3 p-2 sm:p-3 text-center'>3/4-------</div>
          <div className='Stautsdetail w-1/3 p-2 sm:p-3 text-center text-green-500 flex flex-row justify-center items-center'>
            <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 border rounded-full bg-green-600 mr-1 sm:mr-2'></div>
            <span className="truncate">Completed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllMember;