import React from 'react'

const Addtask = () => {
  return (
    <div className='taskcontainer w-full boder h-12 flex flex-row justify-between border rounded-md shadow-md mb-2 bg-white' >
        <div className='title w-fit flex flex-row m-2'>
      <div className='w-6 h-6 border rounded-xl bg-green-300'></div>
    <div className='ml-2'>Design AboutUS Page</div>
      </div>
      <div className='size m-2 text-blue-400 ml-6 border rounded-md bg-blue-200 pl-1 pr-1 font-semibold'>Medium</div>

      <div className=' m-2'>LASTDATE</div>
      <div className='m-2'>Delete</div>
    </div>
  )
}

export default Addtask
