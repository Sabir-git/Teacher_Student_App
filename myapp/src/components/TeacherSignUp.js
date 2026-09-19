import React from 'react';

const TeacherSignUp = ({ setCurrentPage, handleInputChange, formData = {}, errors = {} }) => {
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/signup/teacher', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Teacher Signup failed');
      }

      const data = await response.text();
      console.log('Teacher Signup Success:', data);
      alert(data);
      setCurrentPage("teacherLogin"); // Redirect to login after successful signup
    } catch (error) {
      console.error('Error:', error);
      alert('Teacher Signup Failed! Please try again.');
    }
  };

  return (
    <div className="signup-page card mx-auto my-5" style={{ maxWidth: '600px' }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Teacher Sign Up</h2>
        <form onSubmit={handleSignupSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
          </div>
          
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
          </div>
          
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.password && <p className="text-danger">{errors.password}</p>}
          </div>

          {/* Qualification Field */}
          <div className="form-group">
            <label>Qualification:</label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.qualification && <p className="text-danger">{errors.qualification}</p>}
          </div>

          {/* Subject Field */}
          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.subject && <p className="text-danger">{errors.subject}</p>}
          </div>

          {/* Gender Field */}
          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-danger">{errors.gender}</p>}
          </div>

          <button className="btn btn-primary w-100 mt-3" type="submit">Sign Up</button>
        </form>
        <button className="btn btn-secondary w-100 mt-3" onClick={() => setCurrentPage("home")}>Back to Home</button>
      </div>
    </div>
  );
};

export default TeacherSignUp;
