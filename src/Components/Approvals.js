import React from "react";
import "../styles/Approvals.css";

const Approvals = () => {
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

  return (
    <div className="approvals-container">
      {/* Header Bar */}
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
                  <button className="note-button">Note</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Approvals;
