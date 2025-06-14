import React, { useState } from 'react';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Form Submitted (data not posted)');
  };

  return (
    <div className="container mt-4">
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" name="name" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation:</label>
          <input type="text" name="designation" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Location:</label>
          <input type="text" name="location" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary:</label>
          <input type="number" name="salary" className="form-control" required onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
