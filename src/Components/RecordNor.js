import React, { useEffect, useState } from "react";
import "../styles/RecordNor.css";
import axios from "axios";

const RecordNor = () => {
  // State for managing search and filtered data
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [actionTaken, setActionTaken] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, [])
  
  // fetch data from database
  const fetchRecords = async () => {
    const url = "http://localhost:4000/api/recordRoom/getNormal"

    try {
      const response = await axios.get(url);

      if (response.data.success) {
        setData(response.data.data)
        setFilteredData(response.data.data)
      } else {
        console.log(response.data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  // Handle search functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter(
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
  const handleSubmit = async () => {
    if (!selectedItem?.refNo || !actionTaken) {
      console.error("Ref No. or Action Taken is missing");
      return;
    }
  
    const url = "http://localhost:4000/api/recordRoom/actionTaken"; // Replace with your actual endpoint
    const payload = { 
      refNo: selectedItem.refNo, 
      actionTaken 
    };
  
    try {
      const response = await axios.post(url, payload);
  
      if (response.data.success) {
        console.log("Action submitted successfully:", response.data.message);
        fetchRecords(); // Refresh the table data if needed
      } else {
        console.error("Error submitting action:", response.data.message);
      }
    } catch (error) {
      console.error("Error in submission:", error);
    }
  
    closeModal();
  };
  return (
    <div className="RecordNor-page">
      {/* Full-width Header Bar */}
      <div className="header-bar">
        <h1>Record Room Section - Normal Mails</h1>
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
      <div className="RecordNor-table-container">
        <table className="RecordNor-table">
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

export default RecordNor;
