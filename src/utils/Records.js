import React, { useEffect, useState } from "react"
import axios from "axios"

import AllRecords from "../components/allRecords";
import AverageGoalFor from "../components/averageGoalFor";
import TopTenRecord from "../components/TopTenRecord";
import Total_win_draw__matchPlayed from "../components/totalWinDrawMatchPlayed";

const Display=(props)=>{
  const url='http://localhost:3001/'
  const [data,setData]=useState([])
  const {mode,input}=props.component

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (mode && input) {
          setData([])
          const firstResponse = await axios.get(url, { params: { mode, input } });
          setData(firstResponse.data);
  
        } else {
          setData([])
          const response = await axios.get(url);
          setData(response.data);
        }
      } catch (error) {
        console.error(error);
       
      }
    };
  
    fetchData();
  }, [mode, input]);
  
  console.log(mode,input)
   
      // const [data,setData]=useState("")
      
return(
    <div className="displayContainer  w-full overflow-scroll ">
      {data.length>0?(<>
        {(mode && input) ? (
<div className="flex">

{mode === "AGF" && <AverageGoalFor data={data}/>}
  {mode === "FTR" && <TopTenRecord data={data}/>}
  {mode ==="WDL" && <Total_win_draw__matchPlayed data={data}/>}

</div>
       
      ) : (
        <>
          <AllRecords data={data}/>
            
         
        </>
      )}
      </>):(<>
      <div className="loading h-[50vh] w-full center">
<h1>loading</h1>
      </div>
      </>)}
     
    </div>

)
}
export default Display;