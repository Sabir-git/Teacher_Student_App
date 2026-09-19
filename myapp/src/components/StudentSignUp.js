import React from 'react';

const StudentSignUp = ({ setCurrentPage, handleInputChange, formData = {}, errors = {} }) => {
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/signup/student', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Student Signup failed');
      }

      const data = await response.text();
      console.log('Student Signup Success:', data);
      alert(data);
      setCurrentPage("studentLogin");
    } catch (error) {
      console.error('Error:', error);
      alert('Student Signup Failed! Please try again.');
    }
  };

  return (
    <div className="signup-page card mx-auto my-5" style={{ maxWidth: '600px' }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Student Sign Up</h2>
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
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.dob && <p className="text-danger">{errors.dob}</p>}
          </div>

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
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
            {errors.gender && <p className="text-danger">{errors.gender}</p>}
          </div>

          <div className="form-group">
            <label>Roll No:</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            {errors.rollNo && <p className="text-danger">{errors.rollNo}</p>}
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

          <button className="btn btn-primary w-100 mt-3" type="submit">Sign Up</button>
        </form>
        <button className="btn btn-secondary w-100 mt-3" onClick={() => setCurrentPage("home")}>Back to Home</button>
      </div>
    </div>
  );
};

export default StudentSignUp;
