import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";

const TeacherLogin = ({ setCurrentPage, handleInputChange, handleLogin, formData }) => {
  return (
    <div className="login-page card mx-auto my-5" style={{ maxWidth: '400px' }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Teacher Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Email"
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Password"
              required
            />
            <FaLock className="icon1" />
          </div>
          <button className="btn btn-primary btn-block" type="submit">Login</button>
        </form>
        <p className="text-center mt-3">Don't have an account? 
          <button className="btn btn-link" onClick={() => setCurrentPage("teacherSignUp")}>Teacher Sign Up</button>
        </p>
        <button className="btn btn-secondary btn-block" onClick={() => setCurrentPage("home")}>Back to Home</button>
      </div>
    </div>
  );
};

export default TeacherLogin;
