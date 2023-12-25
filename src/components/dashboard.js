import React, { useEffect, useState } from "react";
import axios from "axios";

import AllRecords from "../utils/allRecords";
import AverageGoalFor from "../utils/averageGoalFor";
import TopTenRecord from "../utils/TopTenRecord";
import Total_win_draw__matchPlayed from "../utils/totalWinDrawMatchPlayed";

export default function  Display  (props) {
  const url = "http://localhost:3001/";
  const [Mode, setMode] = useState("");
  const [Input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [mode,setmode]=useState("")
  const [input,setinput]=useState("")

  const Handler=()=>{
    setmode(Mode);
    setinput(Input);
   

  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (mode && input) {
          setData([]);
          const firstResponse = await axios.get(url, {
            params: { mode, input },
          });
          setData(firstResponse.data);
        } else {
          setData([]);
          const response = await axios.get(url);
          setData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [mode, input]);



  return (
    <div className="displayContainer  w-full overflow-scroll ">
      <dvi className="filter">
        <select name="mode" id="md " onChange={(e) => setMode(e.target.value)}>
          <option value="">choose filter mode</option>
          <option value="WinDrawLoss">WinDrawLoss</option>
          <option value="TopTenRecord">TopTenRecord</option>
          <option value="averageGoalFor">averageGaolFor</option>
        </select>
      </dvi>
      {!Mode ? (
        <></>
      ) : (
        <>
          <div className="input_area">
            {Mode === "averageGoalFor" && (
              <div className="FirstTenRecord-Input flex space-x-2 ">
                <input
                  className=""
                  type="number"
                  id="FirstTenRecord"
                  name="year"
                  pattern="\d{4}"
                  placeholder="Year"
                  value={Input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  min="1990"
                  max={new Date().getFullYear()}
                  required
                />
                <button
                  className=" outline outline-1 h-11 w-16  bg-yellow-400 hover:bg-green-400    rounded-lg text-bold"
                  onClick={Handler}
                >
                  Filter
                </button>
              </div>
            )}
            {Mode === "TopTenRecord" && (
              <div className="FirstTenRecord-Input flex space-x-2 ">
                <input
                  className="form-input w-[50%]"
                  type="number"
                  id="FirstTenRecord"
                  name="year"
                  pattern="\d{4}"
                  placeholder="Number of Goal"
                  value={Input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  min="0"
                />
                <button
                  className=" outline outline-1 h-11 w-16  bg-yellow-400 hover:bg-green-400    rounded-lg text-bold"
              
                  onClick={Handler}
                >
                  Filter
                </button>
              </div>
            )}

            {Mode === "WinDrawLoss" && (
              <div className="WinDrawLoss-Input flex space-x-2 ">
                <input
                  className="form-input"
                  type="number"
                  id="WinDrawLoss"
                  name="year"
                  pattern="\d{4}"
                  placeholder="Year"
                  value={Input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  min="1900"
                  max={new Date().getFullYear()}
                />
                <button
                  className=" outline outline-1 h-11 w-16  bg-yellow-400 hover:bg-green-400    rounded-lg text-bold"
               
                  onClick={Handler}
                >
                  Filter
                </button>
              </div>
            )}
          </div>
        </>
      )}
      {data.length > 0 ? (
        <>
          {mode && input ? (
            <div className="flex">
              {mode === "averageGoalFor" && <AverageGoalFor data={data} />}
              {mode === "TopTenRecord" && <TopTenRecord data={data} />}
              {mode === "WinDrawLoss" && <Total_win_draw__matchPlayed data={data} />}
            </div>
          ) : (
            <>
              <AllRecords data={data} />
            </>
          )}
        </>
      ) : (
        <>
          <div className="loading h-[50vh] w-full center">
            <h1>loading</h1>
          </div>
        </>
      )}
    </div>
  );
};

