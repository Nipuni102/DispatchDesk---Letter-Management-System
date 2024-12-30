import React, { useState } from "react";
import "../styles/SurveyingNor.css";

const SurveyingNor = () => {
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

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [actionTaken, setActionTaken] = useState("");

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

  // Open modal
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setActionTaken("");
  };

  // Handle submit
  const handleSubmit = () => {
    console.log("Action Taken Submitted:", { actionTaken, selectedItem });
    closeModal();
  };

  return (
    <div className="SurveyingNor-page">
      {/* Full-width Header Bar */}
      <div className="header-bar">
        <h1>Surveying Section - Normal</h1>
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
      <div className="SurveyingNor-table-container">
        <table className="SurveyingNor-table">
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
                    <button
                      className="note-button"
                      onClick={() => openModal(item)}
                    >
                      Action
                    </button>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Action</h2>
            <p><strong>Date:</strong> {selectedItem?.date}</p>
            <p><strong>By:</strong> {selectedItem?.officerNo}</p>
            <label htmlFor="actionTaken"><strong>Action Taken:</strong></label>
            <textarea
              id="actionTaken"
              value={actionTaken}
              onChange={(e) => setActionTaken(e.target.value)}
              placeholder="Enter action taken here..."
              className="note-textarea"
            ></textarea>
            <div className="modal-actions">
              <button className="modal-button" onClick={handleSubmit}>
                Submit
              </button>
              <button className="modal-button cancel" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveyingNor;
