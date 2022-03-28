import {useState} from 'react';
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar"; 
import Routes from './components/Routes'
import { BrowserRouter, Route } from 'react-router-dom'

import "./components/Course/Modal_addNew.css";

const App = () =>{
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }
  const closeSidebar = () =>{
    setSidebarOpen(false);
  }
  
  return (
    <BrowserRouter>
      <Route render={() => (
        <div className='container'>
          <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
          <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
          <Routes/>
        </div> 
      )}/>
  </BrowserRouter>
  );
}
export default App;