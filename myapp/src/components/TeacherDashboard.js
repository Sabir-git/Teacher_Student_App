import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import './TeacherDashboard.css';
const TeacherDashboard = ({ teacherData, handleLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Sample data (replace with API calls)
    const sampleCourses = [
      { id: 1, name: 'Mathematics', grade: 'Grade 10', students: 25 },
      { id: 2, name: 'Physics', grade: 'Grade 11', students: 30 },
    ];
    const sampleStudents = [
      { id: 1, name: 'John Doe', email: 'john@example.com', grade: 'A' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', grade: 'B+' },
    ];
    setCourses(sampleCourses);
    setStudents(sampleStudents);
  }, []);

  const renderContent = () => {
    switch(activeTab) {
      case 'profile':
        return (
          <Card className="mt-4">
            <Card.Body>
              <h3>Profile Information</h3>
              <div className="mt-4">
                <p><strong>Name:</strong> {teacherData?.firstName || 'N/A'} {teacherData?.lastName || ''}</p>
                <p><strong>Email:</strong> {teacherData?.email || 'N/A'}</p>
                <Button variant="primary">Edit Profile</Button>
              </div>
            </Card.Body>
          </Card>
        );
      
      case 'courses':
        return (
          <Card className="mt-4">
            <Card.Body>
              <h3>Your Courses</h3>
              <div className="mt-4">
                {courses.map(course => (
                  <Card key={course.id} className="mb-3">
                    <Card.Body>
                      <h5>{course.name}</h5>
                      <p>Grade: {course.grade}</p>
                      <p>Students: {course.students}</p>
                      <Button variant="info">View Details</Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Card.Body>
          </Card>
        );
      
      case 'students':
        return (
          <Card className="mt-4">
            <Card.Body>
              <h3>Student List</h3>
              <table className="table mt-4">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Grade</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.id}>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.grade}</td>
                      <td>
                        <Button variant="primary" size="sm">View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card.Body>
          </Card>
        );
      
      default:
        return (
          <Card className="mt-4">
            <Card.Body>
              <h3>Welcome, {teacherData?.firstName || 'Teacher'}!</h3>
              <Row className="mt-4">
                <Col md={4}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Total Courses</Card.Title>
                      <h2>{courses.length}</h2>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Total Students</Card.Title>
                      <h2>{students.length}</h2>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title>Upcoming Events</Card.Title>
                      <p>No upcoming events</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        );
    }
  };

  return (
      <Container fluid className="teacher-dashboard">
        <nav className="dashboard-nav">
          <div className="nav-content">
            <span className="brand">Teacher Dashboard</span>
            <Button 
              variant="outline-light" 
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </nav>
  
        <Row className="dashboard-content">
          <Col md={3} className="sidebar">
            <div className="sidebar-inner">
              <div className="profile-section">
                <img 
                  src="https://randomuser.me/api/portraits/men/1.jpg" 
                  alt="Profile" 
                  className="profile-img"
                />
                <h5 className="profile-name">
                  {teacherData?.firstName} {teacherData?.lastName}
                </h5>
                <p className="profile-email">{teacherData?.email}</p>
              </div>
              
              <div className="navigation-menu">
                <Button 
                  variant="link" 
                  className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                  onClick={() => setActiveTab('dashboard')}
                >
                  <i className="fas fa-tachometer-alt"></i> Dashboard
                </Button>
                <Button 
                  variant="link" 
                  className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                  onClick={() => setActiveTab('profile')}
                >
                  <i className="fas fa-user"></i> Profile
                </Button>
                <Button 
                  variant="link" 
                  className={`nav-item ${activeTab === 'courses' ? 'active' : ''}`}
                  onClick={() => setActiveTab('courses')}
                >
                  <i className="fas fa-book"></i> Courses
                </Button>
                <Button 
                  variant="link" 
                  className={`nav-item ${activeTab === 'students' ? 'active' : ''}`}
                  onClick={() => setActiveTab('students')}
                >
                  <i className="fas fa-users"></i> Students
                </Button>
              </div>
            </div>
          </Col>
  
          <Col md={9} className="main-content">
            {renderContent()}
          </Col>
        </Row>
      </Container>
    );
  };

  export default TeacherDashboard;