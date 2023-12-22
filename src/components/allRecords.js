import React from 'react'
import Table from 'react-bootstrap/Table';
function AllRecords({data}) {
  return (
    <div className="TopTenRecord w-full">
    <div className="head text-bold text-[20px] text-center">
      
      <h1>All Records</h1>
      </div>
      <hr />
    <Table className="text-center m-4">
    <thead>
      <tr>
        <th>SN.</th>
        <th>Team</th>
        <th>Games Played</th>
        <th>Win</th>
        <th>Draw</th>
        <th>Loss</th>
        <th>Goals For</th>
        <th>Goals Against</th>
        <th>Points</th>
        <th>Year</th>
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
  )
}

export default AllRecords