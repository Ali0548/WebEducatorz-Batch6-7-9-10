import React from 'react'

const StudentForm = () => {
    let name = "John Doe";
    name = "WebEducatorz";
    function changeName(){
        name = "John Doe";
        console.log(name);
    }
  return (
    <>
    <div className="container my-3">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Student Form {name}</h3>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="">Enter your name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Enter Roll No</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Enter your email</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentForm