import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Display from './Records';

const Layout = ({ children }) => {
const [filterMode,setFilter]=useState({})
const [WinDrawLoss,setWdl]=useState("")
const [FirstTenRecord,setFtr]=useState("")
const [AverageGoalFor,setAgf]=useState("")

const inputHandler = (e) => {
  if (e.target.value === "AGF") {
    if (AverageGoalFor.length < 4) {
      alert("not valid input");
    } else {
      setFilter({ mode: "AGF", input: AverageGoalFor });
      setWdl("");
      setFtr("");
    }
  } else if (e.target.value === "FTR") {
    if (FirstTenRecord.length <= 0) {
      alert("not valid input");
    } else {
      setFilter({ mode: "FTR", input: FirstTenRecord });
      setWdl("");
      setAgf("");
    }
  } else if (e.target.value === "WDL") {
    if (WinDrawLoss.length < 4) {
      alert("not valid input");
    } else {
      setFilter({ mode: "WDL", input: WinDrawLoss });
      setAgf("");
      setFtr("");
    }
  } else if (e.target.value === "") {
    setFilter({ mode: "", input: "" });
    setAgf("");
    setFtr("");
    setWdl("");
  }
};


  return (
    <div className="app-container flex w-full">
      <header className="app-header bg-slate-600 w-[15%]">
        <nav className=' w-[100%] '>
          <ul className=' space-y-4 text-bold text-[20px] '>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/Add">Add</Link></li>
            <li><Link to="/Update">Update</Link></li>
            <li><Link to="/Delete">Delete</Link></li>
           
          </ul>
        </nav>
      </header>
      <hr />
    
      <div className="  Display_body flex w-[85%] ml-10 ">
     
      
      <div className="components h-[100vh]  w-[100%] ">
      
        <div className="body-content h-full">
        <Display component={filterMode}/>
      {children}
        </div>
       
      </div>
      <div className="filter  flex items-center justify-center min-W-[10%] ">
           <div className="filter-container w-[90%]    space-y-2ari">
        
          <div className="total_game_played_draw_and_won space-x-6">
            <label htmlFor="won_draw_played" className='form-label'> Enter year to get data of total gamePlayed, Win and Draw</label>
            <div className="WinDrawLoss-Input flex space-x-2 ">
         
            <input  className="form-input" type="number" id="WinDrawLoss" name="year" pattern="\d{4}" placeholder='Year' value={WinDrawLoss} onChange={(e)=>{setWdl(e.target.value)} }  min="1900" max={new Date().getFullYear()} />
            <button className=' outline outline-1 h-11 w-16  bg-yellow-400 hover:bg-green-400    rounded-lg text-bold' value="WDL" onClick={inputHandler}>Filter</button>
            </div>
          
          
          </div>
         
          <div className="average_goal_for space-x-6">
          <label htmlFor="won record" className='form-label'> Enter year to get data of team  With Average GoalFor </label>
          <div className="FirstTenRecord-Input flex space-x-2 ">
         
         <input  className="form-input w-[50%]" type="number" id="FirstTenRecord" name="year" pattern="\d{4}" placeholder='Year' value={AverageGoalFor}onChange={(e)=>{setAgf(e.target.value)}}  min="1990" max={new Date().getFullYear()} required />
         <button className=' outline outline-1 h-11 w-16  bg-yellow-400 hover:bg-green-400    rounded-lg text-bold' value="AGF" onClick={inputHandler}>Filter</button>
         </div>
          
         
          </div>
          <div className="first_ten_record  space-x-6">
          <label htmlFor="won record" className='form-label'>Enter Won number to get Top-Ten Team Record for Goal {">"}entered goal  </label>
          <div className="FirstTenRecord-Input flex space-x-2 ">
         
            <input  className="form-input w-[50%]" type="number" id="FirstTenRecord" name="year" pattern="\d{4}" placeholder='Number of Goal' value={FirstTenRecord}onChange={(e)=>{setFtr(e.target.value)}}  min="0" />
           <button className=' outline outline-1 h-11 w-16  bg-yellow-400 hover:bg-green-400    rounded-lg text-bold' value="FTR" onClick={inputHandler}>Filter</button>
           </div>
            
          

            
          </div>
          <div className="WDL-Input flex space-x-2  items-center justify-center">

<button className='outline outline-1 h-11 bg-yellow-400 hover:bg-green-400  w-[200px] rounded-lg text-bold ' value="" onClick={inputHandler}>Show All Records</button>
</div>


        </div>
        </div>
     
      </div>
  
      

   
  
    </div>
  );
};

export default Layout;
