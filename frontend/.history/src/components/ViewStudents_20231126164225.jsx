import React from 'react'

const StudentForm = () => {
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>101</td>
                <td>
              </tr>    
            </tbody>
           </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentForm