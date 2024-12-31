import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <h1>Welcome to DispatchDesk</h1>
        <p className="tagline">Streamlining correspondence management effortlessly.</p>
        <div className="details">
          <h2>What is DispatchDesk?</h2>
          <p>DispatchDesk is a digital platform designed to simplify and manage office correspondence efficiently. It replaces traditional manual processes with an intuitive and user-friendly solution.</p>
          <h2>Features:</h2>
          <ul>
            <li>Real-time tracking of office letters.</li>
            <li>Automated task assignment and reminders.</li>
            <li>Comprehensive reporting and analytics.</li>
            <li>Enhanced collaboration for office teams.</li>
          </ul>
        </div>
      </div>
      <div className="dashboard-right">
        <img src="/dashboard-image.png" alt="Dashboard" className="dashboard-image" />
      </div>
    </div>
  );
};

export default Dashboard;
