import React, { useEffect, useState } from "react";
import "../styles/Approvals.css";
import axios from "axios";

const Approvals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApproval, setSelectedApproval] = useState(null);
  const [note, setNote] = useState("");
  const [approvalsData, setApprovalsData] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, [])
  
  // fetch data from database
  const fetchRecords = async () => {
    const url = "http://localhost:4000/api/letter/get"

    try {
      const response = await axios.get(url);

      if (response.data.success) {
        setApprovalsData(response.data.data)
      } else {
        console.log(response.data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  // Handle opening the modal
  const openModal = (approval) => {
    setSelectedApproval(approval);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setNote("");
  };

  // Handle submitting the note
  const handleSubmit = async () => {
    const url = "http://localhost:4000/api/letter/approve";
    const refNo = selectedApproval.refNo;
    try {
      const response = await axios.post(url, {refNo, note});

      if (response.data.success) {
        console.log("Approval Note Submitted:", { note, selectedApproval });

        await fetchRecords();
      } else {
        alert(response.data.message);
      }

    } catch (error) {
      console.error(error)
    }
    
    closeModal();
  };

  return (
    <div className="approvals-page">
      {/* Full-width Header Bar */}
      <div className="header-bar">
        <h1>Approvals</h1>
      </div>

      {/* Table */}
      <div className="approvals-table-container">
        <table className="approvals-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Ref No.</th>
              <th>Company</th>
              <th>Subject</th>
              <th>Section Sent</th>
              <th>To Whom It Sent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {approvalsData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.refNo}</td>
                <td>{item.company}</td>
                <td>{item.subject}</td>
                <td>{item.section}</td>
                <td>{item.officerNo}</td>
                <td>
                  <button
                    className="note-button"
                    onClick={() => openModal(item)}
                  >
                    Note
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Note</h2>
            <p>Subject: {selectedApproval?.subject}</p>
            <p>Date: {selectedApproval?.date}</p>
            
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Enter your note here..."
              className="note-textarea"
            ></textarea>
            <div className="modal-actions">
              <button className="modal-button" onClick={handleSubmit}>
                Approve
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

export default Approvals;
