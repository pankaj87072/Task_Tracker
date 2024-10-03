import React from 'react'
import Addtask from './Addtask'

const Addsection = () => {
  return (
    <div className='addsection w-full h-fit min-h-[6rem] flex flex-col bg-gray-100'>
      <div className='w-full h-fit min-h-[4rem] flex flex-col border pt-4 rounded-sm shadow-sm'>
        <div className='w-full boder h-12 flex flex-row justify-between border rounded-md shadow-md bg-blue-100 mb-5'>
            <div className='font-serif font-semibold m-2 '>Setup new pages wordpress</div>
            <div className='m-2'>Delete</div>
        </div>
        <Addtask/>
        <Addtask/>
        <Addtask/>
        <Addtask/>
        <div className='text-blue-400 font-semibold'>+Add Task</div>
        </div>
    </div>
  )
}
export default Addsection
