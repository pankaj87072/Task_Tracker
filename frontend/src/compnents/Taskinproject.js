import { Button } from '@mui/material'
import React from 'react'
import Addsection from './Addsection'

const Taskinproject = () => {
  return (
    <div className='bg-gray-100 w-[98%] '>
      <div className='assigned&duedate flex flex-row  '> 
      <div className='assigned m-2 flex flex-col font-semibold'><span>Asigned To</span><div className='Select w-52 h-8 border solid rounded-sm shadow-md text-[.83rem] p-1 bg-white'>JONATHAN</div></div>
      <div className='due m-2 flex flex-col font-semibold'><span>Due Date</span><div className='Select w-52 h-8 border solid rounded-sm shadow-md text-[.83rem] p-1 bg-white'>JAN-09,2024</div></div>
      <div className='w-6 h-8 m-4'><Button>Go</Button></div>
      </div>
      <div className='span text-blue-400 font-semibold'>+Add Section</div>
      <div>
        <Addsection/>
        <Addsection/>
        </div>
      
    </div>
  )
}

export default Taskinproject
