import React, { useState } from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function Signup() {
  const [name, setName] = useState(); 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {email, password })
      .then((result) =>{ console.log(result)
        navigate('/home')


    })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#6c757d" }}
    >
      <div
        className="p-4 bg-white rounded shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h4 className="text-center mb-4">Register</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              required
              onChange={(e) => setName(e.target.value)} // Update state
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)} // Update state
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)} // Update state
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>
        <div className="text-center mt-3">
          <small>
            Already Have an Account?{" "}
            <a href="/login" className="text-decoration-none">
              Login
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Signup;
