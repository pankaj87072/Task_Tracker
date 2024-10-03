import React from 'react'
// import Sidebar from '../../compnents/Sidebar'
import Navbar from '../../compnents/Navbar'
import AllProjects from '../../compnents/AllProjects';
import AllMember from '../../compnents/AllMember';
import ProjectGraph from '../../compnents/ProjectGraph';
import Sidebars from '../../compnents/Sidebars';
// import Sidebar from '../../compnents/Sidebar';
import '../../App.css';

  const Homepage = () => {
    return (
      <>
        <div className='flex flex-col h-full bg-gray-300 w-full overflow-hidden'>
          <Navbar isHomePage={true} pageTitle={"Dashboard"} />
          <div className='mainpartclass flex flex-row w-full bg-gray-100 h-[45rem] '>
            {/* <div className='sidebarclass relative w-[10%] h-full'> //previous logic to make it above navbar but it is not responsive very complex  */}
          {/*  <div className='sidebarclass  w-[10%] h-full  '>  this is new logic in which i tried to give realtive to the mainpartclass itself so that i just have to set the inner component and not add another commponet like sidebarinnerclass*/}
              {/* <div className='sidebarinnerclass h-full absolute -top-8'> */}
                <Sidebars ishomesidebar={true}/>
              {/* </div> */}
            {/* </div> */}
            {/* <div className='homepageclass flex flex-row w-[90%] relative'>//previous logic */}
            <div className='homepageclass flex flex-row w-[90%]  relative -top-10 mr-2'>
              {/* <div className='flex flex-col mx-10 w-[66%] items-center absolute -top-10'> previous logic*/}
              <div className='flex flex-col mx-10 w-[66%] items-center '>
                <AllProjects />
                <AllMember />
              </div>
              {/* <div className='w-[25%] flex flex-col m-2 absolute -top-12 left-[72%]'> */}
              <div className='w-[25%] flex flex-col m-2 left-[72%]'>
                <ProjectGraph />
                <ProjectGraph />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Homepage;