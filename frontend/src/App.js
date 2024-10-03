// import logo from './logo.svg';
// import Button from '@mui/material/Button';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Taskinproject from './compnents/Taskinproject';
// import Hasrhti from './compnents/Hasrhti';
// import ProjectGraph from './compnents/ProjectGraph';
// import AllMember from './compnents/AllMember';
// import AllProjects from './compnents/AllProjects';
// import Navbar from "./compnents/Navbar.js";
// import Sidebar from './compnents/Sidebar.js';
import Intialpage from './Intialpage';
import Projectdetail from './pages/homepage/Projectdetail';
// import TaskPage from './pages/homepage/TaskPage'
import Homepage from './pages/homepage/HomePage';
import ProjectTask from './pages/ProjectTask';
// import TaskPage from './pages/homepage/TaskPage';
function App() {
//   return (
//     <div className="App">
//       {/* <Intialpage/> */}
//       {/* <Navbar/> */}
//       {/* <Sidebar/> */}
//       {/* <Homepage/> */}
//       {/* <ProjectTask/> */}
//       {/* <ProjectGraph/> */}
//       {/* <TaskPage/> */}
//       {/* <Taskinproject/> */}
//       {/* <AllProjects/> */}
//       {/* <AllMember/> */}
//       {/* <Hasrhti/> */}
//       {/* <Projectdetail/> */}

// </div>
return (
  <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Intialpage/>}/>
        <Route path="/" element={<Homepage />} />
        <Route path="/project" element={<ProjectTask />}/>
        <Route path="/project/:id" element={<Projectdetail />} />
      </Routes>
    </BrowserRouter>
);
}

export default App;
