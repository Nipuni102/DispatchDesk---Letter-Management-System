import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">DispatchDesk</div>
      <div className="profile">
        <button onClick={() => localStorage.removeItem("authToken")}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
