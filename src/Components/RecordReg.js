import React, { useState } from "react";
import "../styles/RecordReg.css";

const RecordReg = () => {
  const initialData = [
    {
      date: "2024-12-01",
      refNo: "12345",
      company: "ABC Corp",
      subject: "Budget Allocation",
      officerNo: "Officer 1",
    },
    {
      date: "2024-12-02",
      refNo: "67890",
      company: "XYZ Pvt Ltd",
      subject: "Contract Review",
      officerNo: "Officer 2",
    },
  ];

  // State for managing search and filtered data
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);

  // Handle search functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = initialData.filter(
      (item) =>
        item.refNo.toLowerCase().includes(query) ||
        item.company.toLowerCase().includes(query) ||
        item.subject.toLowerCase().includes(query)
    );

    setFilteredData(filtered);
  };

  return (
    <div className="RecordReg-page">
      {/* Full-width Header Bar */}
      <div className="header-bar">
        <h1>Record Room Section - Registered Mails </h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by Ref No., Company, or Subject..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Table */}
      <div className="RecordReg-table-container">
        <table className="RecordReg-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Ref No.</th>
              <th>Company</th>
              <th>Subject</th>
              <th>To Whom It Sent</th>
              <th>Actions</th>
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
                  <td>{item.officerNo}</td>
                  <td>
                    <button className="note-button">Action</button>
                  </td>
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
    </div>
  );
};

export default RecordReg;