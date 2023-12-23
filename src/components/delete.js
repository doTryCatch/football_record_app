// Delete.js
import React, { useState } from "react";
import axios from "axios";
export default function  Delete() {
  const [team, setTeam] = useState("");
  const [year, setYear] = useState("");
  const [state, setState] = useState("");
  const fetchData = async () => {
   
      await axios
        .delete("http://localhost:3001/", {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            team,
            year,
          },
        })
        .then((response) => {
          if (response.status == 200) {
            setState(response.data.msg);
          } else {
            setState("processing....");
          }
        });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState("processing...");
    fetchData();
  };
  return (
    <div className="deleteContainer space-y-4">
      <hr />
      <div className="head  text-bold text-[30px] text-center">
        <h1>Delete Area</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="container center  space-x-6 space">
          <div className="flex-2 pr-3">
            <label className="form-label" htmlFor="team">
              which Team Record to Delete..
            </label>
            <input
              className="form-input"
              id="team"
              placeholder="Team Name"
              type="text"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            />
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
        </div>
        <div className="button-container center space-x-8">
          <button type="submit" className="form-button">
            Delete
          </button>
          {state ? <h1 className="">{state}</h1> : <></>}
        </div>
      </form>
    </div>
  );
};
