// src/components/Layout.js
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Display from './Recods';

const Layout = ({ children }) => {
const [filterParameter,setFilter]=useState({})
const [WDL,setWdl]=useState("")
const [FTR,setFtr]=useState("")
const [AGF,setAgf]=useState("")





  const inputHandler=(e)=>{
   switch (e.target.value) {
   
    case "AGF":
      AGF.length<4?alert("not valid input"):setFilter({mode:"AGF",input:AGF})
      setWdl("")
      setFtr("")
      
    break;
    case "FTR":
      FTR.length<=0?alert("not valid input"):setFilter({mode:"FTR",input:FTR})
      setWdl("")
      setAgf("")
      
    break;
    case "WDL":
      WDL.length<4?alert("not valid input"):setFilter({mode:"WDL",input:WDL})
      setAgf("")
      setFtr("")
      
    break;
    case "":
     setFilter({mode:"",input:""})
      setAgf("")
      setFtr("")
      setWdl("")
      
    break;
   
    default:
      break;
   }
   
}


  return (
    <div className="app-container">
      <header className="app-header">
        <nav className='m-4 center '>
          <ul className='flex space-x-14 text-bold text-[20px] text-white'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Add">Add</Link></li>
            <li><Link to="/Update">Update</Link></li>
            <li><Link to="/Delete">Delete</Link></li>
           
          </ul>
        </nav>
      </header>
      <hr />
      <div className="main_body flex w-full min-h-full">
        <div className="filter  flex items-center justify-center min-w-[20%]">
          <div className="filter-container w-[80%] space-y-4">
          <div className="WDL-Input flex space-x-2  items-center justify-center">

         <button className='outline outline-1 h-11 w-24 outline-yellow-400 hover:outline-green-400  text-white rounded-lg text-bold ' value="" onClick={inputHandler}>Show All</button>
         </div>
          <div className="total_game_played_draw_and_won space-x-6">
            <label htmlFor="won_draw_played" className='form-label'> Total gamePlayed won and draw</label>
            <div className="WDL-Input flex space-x-2 ">
         
            <input  className="form-input" type="number" id="WDL" name="year" pattern="\d{4}" placeholder='Year' value={WDL} onChange={(e)=>{setWdl(e.target.value)} }  min="1900" max={new Date().getFullYear()} />
            <button className=' outline outline-1 h-11 w-16 outline-yellow-400 hover:outline-green-400  text-white rounded-lg text-bold' value="WDL" onClick={inputHandler}>Filter</button>
            </div>
          
          
          </div>
          <div className="first_ten_record  space-x-6">
          <label htmlFor="won record" className='form-label'> Top-Ten Record of Won {">"} </label>
          <div className="FTR-Input flex space-x-2 ">
         
            <input  className="form-input w-[50%]" type="number" id="FTR" name="year" pattern="\d{4}" placeholder='Number of Goal' value={FTR}onChange={(e)=>{setFtr(e.target.value)}}  min="0" />
           <button className=' outline outline-1 h-11 w-16 outline-yellow-400 hover:outline-green-400  text-white rounded-lg text-bold' value="FTR" onClick={inputHandler}>Filter</button>
           </div>
            
          

            
          </div>
          <div className="average_goal_for space-x-6">
          <label htmlFor="won record" className='form-label'>  List With Average GoalFor </label>
          <div className="AGF-Input flex space-x-2 ">
         
         <input  className="form-input w-[50%]" type="number" id="AGF" name="year" pattern="\d{4}" placeholder='Year' value={AGF}onChange={(e)=>{setAgf(e.target.value)}}  min="1990" max={new Date().getFullYear()} required />
         <button className=' outline outline-1 h-11 w-16 outline-yellow-400 hover:outline-green-400  text-white rounded-lg text-bold' value="AGF" onClick={inputHandler}>Filter</button>
         </div>
          
         
          </div>


        </div>
        </div>
        <div className="border bg-white h-[80vh] w-[1px] m-4">

      </div>
      <div className="components h-[88vh]  w-[100%] ">
      
        <div className="body-content h-full">
        <Display component={filterParameter}/>
      {children}
        </div>
       
      </div>
     
      </div>
  
      

   
      <footer className="app-footer">
        {/* Your footer content goes here */}
      </footer>
    </div>
  );
};

export default Layout;
