import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Approvals.css";

const ActionTaken = () => {
  const [actionTakenData, setActionTakenData] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, [])
  
  // fetch data from database
  const fetchRecords = async () => {
    const url = "http://localhost:4000/api/establishment/getActionRecord"

    try {
      const response = await axios.get(url);

      if (response.data.success) {
        setActionTakenData(response.data.data)
      } else {
        console.log(response.data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

 

  

  return (
    <div className="approvals-page">
      {/* Full-width Header Bar */}
      <div className="header-bar">
        <h1>Resolved Letters</h1>
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
              <th>Mail Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {actionTakenData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.refNo}</td>
                <td>{item.company}</td>
                <td>{item.subject}</td>
                <td>{item.section}</td>
                <td>{item.officerNo}</td>
                <td>{item.postType}</td>
                <td>{item.actionTaken}</td>
               
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default ActionTaken;

