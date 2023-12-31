import React, {useState, useEffect, useRef} from 'react'

const StudentForm = () => {
    const [other, setOther] = useState("John Doe");
    const inputEmailRef = useRef(null);
    function changeName(){
        setOther("WebEducatorz");
        console.log(other)
    }
    // Imagine this function is fetching data from an API or Database
    const getData = () => {
        console.log("Hello World");
    }
    useEffect(()=>{
        getData();
    }, [])
  return (
    <>
    <div className="container my-3">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Student Form, {other}</h3>
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
              <input ref={inputEmailRef} type="text" className="form-control" />
            </div>
            <button onClick={changeName} className="btn btn-secondary my-2">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentForm