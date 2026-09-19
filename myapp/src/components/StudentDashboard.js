import React from "react";
import "./StudentDashboard.css"; // Import CSS for styling

const StudentDashboard = ({ studentData, handleLogout }) => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3 className="sidebar-title">Student Panel</h3>
        <ul className="menu">
          <li className="active">🏠 Dashboard</li>
          <li>👤 Profile</li>
          <li>📚 Courses</li>
          <li>📝 Assignments</li>
          <li>📊 Results</li>
          <li onClick={handleLogout} className="logout">🚪 Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Welcome, {studentData?.firstName}!</h2>
        <div className="profile-section">
          <h3>Profile</h3>
          <p><strong>Name:</strong> {studentData?.firstName} {studentData?.lastName}</p>
          <p><strong>Email:</strong> {studentData?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;