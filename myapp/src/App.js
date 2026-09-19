import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import TeacherLogin from './components/TeacherLogin';
import StudentLogin from './components/StudentLogin';
import TeacherSignUp from './components/TeacherSignUp';
import StudentSignUp from './components/StudentSignUp';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [teacherData, setTeacherData] = useState(null);
  const [studentData, setStudentData] = useState(null);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',  
    lastName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTeacherLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/login", { // ✅ Updated URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });
  
      if (!response.ok) throw new Error("Login failed");
  
      const data = await response.json();
      console.log("Login Successful:", data); // ✅ Debug API response
  
      setTeacherData(data);
      setCurrentPage("teacherDashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed!");
    }
  };
  
  

  const handleStudentLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
        
      }
    );
   

      if (!response.ok) throw new Error("Login failed");
      alert("login");
      const data = await response.json();
      setStudentData(data);
      setCurrentPage("studentDashboard"); // Implement student dashboard
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed!");
    }
  };

  const handleLogout = () => {
    setTeacherData(null);
    setStudentData(null);
    setCurrentPage("home");
  };

  return (
    <div className="app-container container-fluid">
      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "teacherLogin" && (
        <TeacherLogin
          setCurrentPage={setCurrentPage}
          handleInputChange={handleInputChange}
          handleLogin={handleTeacherLogin}
          formData={formData}
        />
      )}
      {currentPage === "studentLogin" && (
        <StudentLogin
          setCurrentPage={setCurrentPage}
          handleInputChange={handleInputChange}
          handleLogin={handleStudentLogin}
          formData={formData}
        />
      )}
     {currentPage === "teacherSignUp" && (
  <TeacherSignUp
    setCurrentPage={setCurrentPage}
    handleInputChange={handleInputChange}
    formData={formData}
  />
)}

{currentPage === "studentSignUp" && (
  <StudentSignUp
    setCurrentPage={setCurrentPage}
    handleInputChange={handleInputChange}
    formData={formData}
  />
)}

{currentPage === "teacherDashboard" && teacherData && (
  <TeacherDashboard teacherData={teacherData} handleLogout={handleLogout} />
)}

{currentPage === "studentDashboard" && studentData && (
  <StudentDashboard studentData={studentData} handleLogout={handleLogout} />
)}

    </div>
  );
}

export default App;
