import React, { useState } from "react";
import "../styles/Approvals.css";

const Approvals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApproval, setSelectedApproval] = useState(null);
  const [note, setNote] = useState("");

  const approvalsData = [
    {
      date: "2024-12-01",
      refNo: "12345",
      company: "ABC Corp",
      subject: "Budget Allocation",
      section: "Accounts",
      officerNo: "Officer 1",
    },
    {
      date: "2024-12-02",
      refNo: "67890",
      company: "XYZ Pvt Ltd",
      subject: "Contract Review",
      section: "Establishment",
      officerNo: "Officer 2",
    },
  ];

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
  const handleSubmit = () => {
    console.log("Approval Note Submitted:", { note, selectedApproval });
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
