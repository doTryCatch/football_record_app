import React from 'react'
import Table from 'react-bootstrap/Table';
function Total_win_draw__matchPlayed({data}) {
  return (
    <div className="WDL_container w-[90%] center m-6">
        <div className="head text-bold text-[20px] text-center">
      
            <h1>Total Number of (matchPlayed, Win and Draw)</h1>
            <hr />
    <div className="info">
    <Table className="text-center border-solid m-4">
    <thead>
    <tr>
        <th>SN.</th>
      
       
        {Object.keys(data[0]).map((key, idx) => 
   
         (<th key={idx}>{key}</th>)
    
   
)}

      </tr>
    </thead>

    <tbody>
      {data.map(({ _id, __v, ...value }, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          {Object.values(value).map((data, idx) => (
            <td key={idx}>{data}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
            </div>
        </div>
        <hr />

    </div>
  )
}

export default Total_win_draw__matchPlayed