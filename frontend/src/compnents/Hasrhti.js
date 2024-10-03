

import React, { useCallback, useEffect, useState } from 'react'
const Hasrhti=()=>{
 const [No,setNo]=useState(false);
 const [Symbol,setSymbol]=useState(false);
 const [Pass,setPass]=useState();
 const [Length,setLength]=useState(8);

 const res=useCallback(()=>{
  let passs="";
 let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(No){
   str+="0123456789";
  }
  if(Symbol){
    str+="@#!$%&*";
  }
 for(let i=1;i<=Length;i++){
   const p=Math.floor(Math.random()*str.length+1);
   passs+=str.charAt(p);
 } setPass(passs);

 },[No,Symbol,setPass,Length])
 useEffect(()=>{
  res();
 },[Length,No,Symbol,res])
 const clipboard=useCallback(()=>{
  window.navigator.clipboard.writeText(Pass);
 },[Pass]);
  return (
    <div className='mainpage h-screen bg-black realtive '>
        <div className='w-2/5 border bg-gray-700 absolute top-10 left-96 h-40 rounded-lg flex  '>
         <div className='search w-3/4 m-2 relative'>
           <input type='text' placeholder='Password' className='display w-full absolute left-14 top-3 h-10 rounded-md bg-white' value={Pass}></input>
            <div className='copy w-16 absolute left-[452px] top-3 h-10 rounded-md bg-blue-600 text-white text-center p-1 hover:cursor-pointer' onClick={clipboard}>Copy</div>
            </div>
           <div className='slider absolute top-24 left-16 flex flex-row'><label><input type='range' max={100} min={8} onChange={(e)=>{setLength(e.target.value)}}></input>Length({Length}) </label>
          <label className='ml-10'> <input type='checkbox' onChange={()=>{setNo((prev)=>!prev)}}></input>Number</label>
          <label className='ml-10'> <input type='checkbox' onChange={()=>{setSymbol((prev)=>!prev)}}></input>Symbol</label> 
            </div>
        </div>
    </div>
  )
}

export default Hasrhti;
