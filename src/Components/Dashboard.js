import React, { useState } from "react";
import "../styles/Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase(); 
    console.log(query)
    setSearchTerm(query);

    // Call the fetch function with updated query only if not empty
    if (query.trim() !== "") {
      fetchFilteredData(query);
    } else {
      setFilteredData([]); 
    }
  };

  const fetchFilteredData = async (query) => {
    const url = `http://localhost:4000/api/letter/search`;

    try {
        const response = await axios.post(url, { query });

        if (response.data.success) {
            setFilteredData(response.data.data); 
        } else {
            console.log("Error:", response.data.message); 
        }
    } catch (error) {
        console.error("Error fetching data:", error); 
    }
};

  return (
    <div className="dashboard-container">
      {/* Top Section with Search Bar */}
      <div className="dashboard-top">
        <input
          type="text"
          placeholder="Search by Ref No., Company, or Subject ..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {/* Conditional Rendering for Search Results or Main Content */}
      {searchTerm.trim() ? (
        <div className="EstablishmentNor-table-container">
          <table className="EstablishmentNor-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Ref No.</th>
                <th>Company</th>
                <th>Subject</th>
                <th>To Whom It Sent</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.refNo}</td>
                    <td>{item.company}</td>
                    <td>{item.subject}</td>
                    <td>{item.officerNo || "N/A"}</td>
                    <td>{item.source === "ActionsTaken" ? "Done" : item.source === "Letters" ? "Need to approve" : item.source}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-results">
                    No matching records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="dashboard-content">
          <div className="dashboard-left">
            <h1>Welcome to DispatchDesk</h1>
            <p className="tagline">Streamlining correspondence management effortlessly.</p>
            <div className="details">
              <h2>What is DispatchDesk?</h2>
              <p>
                DispatchDesk is a digital platform designed to simplify and manage
                office correspondence efficiently. It replaces traditional manual
                processes with an intuitive and user-friendly solution.
              </p>
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
            <img
              src="/dashboard-image.png"
              alt="Dashboard"
              className="dashboard-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
