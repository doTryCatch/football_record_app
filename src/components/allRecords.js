import React from 'react'
import Table from 'react-bootstrap/Table';
export default function AllRecords({data}) {
  return (
    <div className="TopTenRecord w-full">
    <div className="head text-bold text-[20px] text-center">
      
      <h1>Overall Records</h1>
      </div>
      <hr />
    <Table className="text-center m-4">
    <thead>
      <tr>
        <th>SN.</th>
      
       
        {Object.keys(data[0]).map((key, idx) => {
    if (idx > 0 && idx < Object.keys(data[0]).length - 1) {
        return (<th key={idx}>{key}</th>);
    }
    return null;
})}

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

