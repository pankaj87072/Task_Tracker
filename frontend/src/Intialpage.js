import React from 'react'
import Button from '@mui/material/Button';
import Dropdown from './compnents/Dropdown';

const Intialpage = () => {
  const images = require("./bgimage1.jpg");
  const image2=require("./logo.png");
  function func(){
    // console.log("working");
    window.location.href="https://www.kiet.edu/"
  }
  return (
    <div className='h-screen imagesection bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${images})` }}>
      <div className='navbarIntial w-full h-16 flex flex-row justify-between items-center' >
        <div className='logo m-[3rem] w-60 h-10 bg-cover bg-center hover:cursor-pointer' style={{backgroundImage:`url(${image2})` }} onClick={func}></div>
        <div className='navlist '>
          <ul className='flex flex-row w-full sm:w-auto mr-4 sm:mr-20'>
            <li className='m-2'>
              <Dropdown/>
            </li>
            <li className='m-2'><Button variant="contained">LOGIN</Button></li></ul>
        </div>
      </div>
      {/* // <div className='></div> */}
    </div>
  )
}
export default Intialpage;