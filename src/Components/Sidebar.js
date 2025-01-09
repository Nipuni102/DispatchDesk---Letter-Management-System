import React, { useState } from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  // State to handle dropdown toggling for Sections and sub-parts
  const [sectionsOpen, setSectionsOpen] = useState(false);
  const [openSubPart, setOpenSubPart] = useState("");

  const toggleSections = () => {
    setSectionsOpen(!sectionsOpen);
  };

  const toggleSubPart = (subPartName) => {
    setOpenSubPart(openSubPart === subPartName ? "" : subPartName);
  };

  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/new">New +</Link></li>
        <li><Link to="/approvals">Approvals</Link></li>

        {/* Sections Dropdown */}
        <li>
          <button
            className="sidebar-dropdown-btn"
            onClick={toggleSections}
          >
            Sections {sectionsOpen ? "▼" : "▶"}
          </button>
          {sectionsOpen && (
            <ul className="sidebar-submenu">
              {/* Establishment */}
              <li>
                <button
                  className="sidebar-dropdown-btn"
                  onClick={() => toggleSubPart("establishment")}
                >
                  Establishment {openSubPart === "establishment" ? "▼" : "▶"}
                </button>
                {openSubPart === "establishment" && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/establishment/registered">Registered</Link></li>
                    <li><Link to="/establishment/normal">Normal</Link></li>
                  </ul>
                )}
              </li>

              {/* Accounts */}
              <li>
                <button
                  className="sidebar-dropdown-btn"
                  onClick={() => toggleSubPart("accounts")}
                >
                  Accounts {openSubPart === "accounts" ? "▼" : "▶"}
                </button>
                {openSubPart === "accounts" && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/accounts/registered">Registered</Link></li>
                    <li><Link to="/accounts/normal">Normal</Link></li>
                  </ul>
                )}
              </li>

              {/* Surveying */}
              <li>
                <button
                  className="sidebar-dropdown-btn"
                  onClick={() => toggleSubPart("surveying")}
                >
                  Surveying {openSubPart === "surveying" ? "▼" : "▶"}
                </button>
                {openSubPart === "surveying" && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/surveying/registered">Registered</Link></li>
                    <li><Link to="/surveying/normal">Normal</Link></li>
                  </ul>
                )}
              </li>

              {/* Record Room */}
              <li>
                <button
                  className="sidebar-dropdown-btn"
                  onClick={() => toggleSubPart("record-room")}
                >
                  Record Room {openSubPart === "record-room" ? "▼" : "▶"}
                </button>
                {openSubPart === "record-room" && (
                  <ul className="sidebar-submenu">
                    <li><Link to="/record-room/registered">Registered</Link></li>
                    <li><Link to="/record-room/normal">Normal</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/action-taken-letters">Action Taken Letters</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
