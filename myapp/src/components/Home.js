import React from 'react';
import './Home.css'; // Create this CSS file

const Home = ({ setCurrentPage }) => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">School Management System</h1>
        </div>
      </header>

      <main className="auth-section">
        <div className="auth-card">
          <div className="role-selector">
            <div 
              className="role-card teacher-card"
              onClick={() => setCurrentPage("teacherLogin")}
            >
              <div className="role-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3 className="role-title">Teacher Portal</h3>
              <p className="role-description">Access course materials, student records, and management tools</p>
              <button className="role-button">Teacher Login</button>
            </div>

            <div 
              className="role-card student-card"
              onClick={() => setCurrentPage("studentLogin")}
            >
              <div className="role-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h3 className="role-title">Student Portal</h3>
              <p className="role-description">View courses, grades, and academic resources</p>
              <button className="role-button">Student Login</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="home-footer">
        <p>© 2023 School Management System. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact Support</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;