import React, { useState } from "react"
import axios from "axios";
const Update=()=>{
    const [team, setTeam] = useState("");
    const [field,setField]=useState("");
    const [newValue,setValue]=useState("")
    const [year,setYear]=useState("")
    const [state,setState]=useState("")
    const fetchData = async () => {
      try {
       await axios.put("http://localhost:3002/", {
         
          data: {
              team,
              year,
              field,
              newValue,
            
          },
         
      }).then((response)=>{
        if(response.status==200){
        
          setState(response.data.msg)
      }else{
        setState("processing....")
      }
      })
     
  
          
       
      } catch (error) {
        console.error(error);
        // Handle errors here
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setState("processing...")
     fetchData()
    };
return(
    <div className="updateContainer space-y-4">
        <hr />
        <div className="head text-white text-bold text-[30px] text-center">
            <h1>Update Area</h1>
        </div>

         <form onSubmit={handleSubmit} className="space-y-4" >
            
        <div className="container center  space-x-6 space">
          <div className="flex-2 pr-3">
            <label className="form-label" htmlFor="team">
              which Team:
            </label>
            <input
              className="form-input"
              id="team"
              type="text"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            />
          </div>
          <div className="flex-2 pr-3">

            <label className="form-label" htmlFor="team">
              which field to update:
            </label>
            <select name="fields" id="fieldValue"  className="form-input"onChange={(e)=>setField(e.target.value)}>
                <option value="Team">TeamName</option>
                <option value="GamesPlayed">gamePlayed</option>
                <option value="Draw">draw</option>
                <option value="Win">win</option>
                <option value="Loss">loss</option>
                <option value="GoalFor">goalFor</option>
                <option value="GoalAgainst">goalAgainst</option>
                <option value="Points">points</option>
                <option value="Year">Year</option>
            </select>
          
          </div>
          <div className="flex-2">
            <label className="form-label" htmlFor="points">
              which Year:
            </label>
            <input
              className="form-input"
              id="year"
              type="text"
              pattern="\d{4}" 
              value={year}
              onChange={(e) => setYear(e.target.value)}
              title="Year must be exactly 4 digits"

              required
            />
          </div>
          <div className="flex-2 pr-3">
            <label className="form-label" htmlFor="team">
              New Value:
            </label>
            <input
              className="form-input"
              id="team"
              type="text"
              value={newValue}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>



        
          </div>
          <div className="button-container center">

          

          <button type="submit" className="form-button">
            Submit
          </button>
          {state?( <h1 className="text-white">{state}</h1>):(<></>)}
         
          </div>
        </form>
    </div>
)
}
export default Update;