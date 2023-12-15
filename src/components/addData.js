import React, { useState } from "react";
import axios from "axios"

const Add = () => {
  const [team, setTeam] = useState("");
  const [gamesPlayed, setGamesPlayed] = useState("");
  const [win, setWin] = useState("");
  const [draw, setDraw] = useState("");
  const [loss, setLoss] = useState("");
  const [goalsFor, setGoalsFor] = useState("");
  const [goalsAgainst, setGoalsAgainst] = useState("");
  const [points, setPoints] = useState("");
  const [year,setYear]=useState("")
  const [state,setState]=useState("")
  const fetchData = async () => {
    try {
      
      
        await axios.post('http://localhost:3002/',  { team, gamesPlayed,win,draw,loss,goalsFor,goalsAgainst,points,year   }).then((response)=>{
          if(response.status==200){
           
            setState(response.data.msg)
           }else{
            setState("processing...")
           }
        });
        
   
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setState("processing...")
   fetchData()
    // You can handle the form submission logic here
    // For now, let's just log the form data
   
  };

  return (
    
    <section className="add m-2 flex-1 space-y-4 ">
      <hr />
      <header className="title text-center text-white text-[30px]"> <h1>New Entry Area</h1></header>
     
        <form onSubmit={handleSubmit} className="space-y-4">
        <div className="container flex space-x-2">
          <div className="flex-2 pr-3">
            <label className="form-label" htmlFor="team">
              Team:
            </label>
            <input
              className="form-input"
              id="team"
              type="text"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              required
            />
          </div>

          <div className="flex-1">
            <label className="form-label" htmlFor="gamesPlayed">
              Games P:
            </label>
            <input
              className="form-input"
              id="gamesPlayed"
              type="number"
              value={gamesPlayed}
              onChange={(e) => setGamesPlayed(e.target.value)}
              required
            />
          </div>

          <div className="flex-1">
            <label className="form-label" htmlFor="win">
              Win:
            </label>
            <input
              className="form-input"
              id="win"
              type="number"
              value={win}
              onChange={(e) => setWin(e.target.value)}
              required
            />
          </div>

          <div className="flex-1">
            <label className="form-label" htmlFor="loss">
              Loss:
            </label>
            <input
              className="form-input"
              id="loss"
              type="number"
              value={loss}
              onChange={(e) => setLoss(e.target.value)}
              required
              
            />
          </div>

          <div className="flex-1">
            <label className="form-label" htmlFor="draw">
              Draw:
            </label>
            <input
              className="form-input"
              id="draw"
              type="number"
              value={draw}
              onChange={(e) => setDraw(e.target.value)}
              required
            />
          </div>

          <div className="flex-1">
            <label className="form-label" htmlFor="goalsFor">
              Goals F:
            </label>
            <input
              className="form-input"
              id="goalsFor"
              type="number"
              value={goalsFor}
              onChange={(e) => setGoalsFor(e.target.value)}
              required
            />
          </div>

          <div className="flex-1">
            <label className="form-label" htmlFor="goalsAgainst">
              Goals A:
            </label>
            <input
              className="form-input"
              id="goalsAgainst"
              type="number"
              value={goalsAgainst}
              onChange={(e) => setGoalsAgainst(e.target.value)}
              required
            />
          </div>

          <div className="flex-1">
            <label className="form-label" htmlFor="points">
              Points:
            </label>
            <input
              className="form-input"
              id="points"
              type="number"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <label className="form-label" htmlFor="points">
              Year:
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
          </div>

          <div className="button-container center space-x-4">

          

          <button type="submit" className="form-button ">
            Add
          </button>
          {state?(<h1>{state}</h1>):(<></>)}
          </div>
        </form>
     
    </section>
  );
};

export default Add;
