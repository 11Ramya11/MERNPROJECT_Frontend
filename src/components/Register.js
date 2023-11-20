import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = user;
  
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
  
      if (res.ok) {
        alert("Successfully registered!");
        navigate("/login");
      } else {
        const data = await res.json();
  
        if (res.status === 409) {
          alert(`Details already in use: ${data.message}`);
        } else {
          console.error("Registration failed:", res.statusText);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center rounded-2 text-white justify-content-center form order-2">
            <h1 className="display-4 text-dark">Register Here</h1>
            <p className="lead text-center text-dark">
              Enter Your Details to Register
            </p>
            <h5 className="mb-4 text-dark">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-dark rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <form onSubmit={handleSubmit} method="POST">
              <h1 className="display-6 fw-bolder text-warning mb-5">
                REGISTER
              </h1>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
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
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-outline-warning w-100 mt-4 rounded-pill"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
