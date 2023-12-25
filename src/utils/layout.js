import React from 'react';
import { Link } from 'react-router-dom';


const Layout = ({ children }) => {
  return (
    <div className="app-container  w-full">
      <header className="app-header">
        <nav className=' w-[100%] '>
          <ul className=' space-x-4 text-bold text-[20px]  flex'>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/Add">Add</Link></li>
            <li><Link to="/Update">Update</Link></li>
            <li><Link to="/Delete">Delete</Link></li>
           
          </ul>
        </nav>
        
      </header>
      <hr />
    
      <div className="  Display_body flex w-[85%] ml-10  m-10">
     
      
      <div className="components h-[100vh]  w-[100%] ">
      
        <div className="body-content h-full">
       
      {children}
        </div>
       
      </div>
    
        </div>
        
      
  
      

   
  
    </div>
  );
};

export default Layout;
