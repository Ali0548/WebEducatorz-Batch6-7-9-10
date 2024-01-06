import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    const updateData = {
        ...login,
        [name]: value,
    }
    setLogin(updateData);
  };
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4001/web-educatorz/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
      });
      const data = await response.json();
      if(data?.status){
        localStorage.setItem("token", data.data);
        window.location.href = "/";
      }
      else {
        alert(data.message);
      }
    } catch (error) {
      alert("something Went Wrong")
    }
}
  return (
    <>
      <div className="container my-3">
        <div className="wrapper">
          <div className="card w-100">
            <div className="card-header">
              <h3 className="card-title">Login</h3>
            </div>
            <div className="card-body">
              <form action="/action_page.php">
                <div className="form-group">
                  <label htmlFor="email">Enter Your Email</label>
                  <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Enter Your Password:</label>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    id="pwd"
                  />
                </div>
                <div className="my-3"></div>
                <button onClick={handleSubmit} type="button" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
