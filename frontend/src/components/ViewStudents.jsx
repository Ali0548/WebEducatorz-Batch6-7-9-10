import React from 'react'

const ViewStudents = () => {
  return (
    <>
    <div className="container my-3">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Student Form</h3>
          </div>
          <div className="card-body">
           <table className="table">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Roll No</th>
                <th>Email</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>101</td>
                <td>101</td>
              </tr>    
            </tbody>
           </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewStudents