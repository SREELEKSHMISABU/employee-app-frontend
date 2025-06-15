import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // ← changed
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
