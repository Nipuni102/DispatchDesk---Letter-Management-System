import React, { useState } from "react";
import "../styles/NewPage.css";

const NewPage = () => {
  const [section, setSection] = useState("");
  const [postType, setPostType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with:
    Section: ${section}
    Post Type: ${postType}`);
  };

  return (
    <div className="new-page-container">
      <h2>New Letter Form</h2>
      <form onSubmit={handleSubmit} className="new-page-form">
        {/* Date, Ref No, Company, Subject */}
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" required />

          <label htmlFor="refNo">Ref No:</label>
          <input type="text" id="refNo" required />

          <label htmlFor="company">Company:</label>
          <input type="text" id="company" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" required />
        </div>

        {/* Moved to Section */}
        <div className="form-group">
          <label>Moved to:</label>
          <div className="sections">
            <label>
              <input
                type="radio"
                name="section"
                value="Establishment"
                onChange={(e) => setSection(e.target.value)}
              />
              Establishment
            </label>
            <label>
              <input
                type="radio"
                name="section"
                value="Surveying"
                onChange={(e) => setSection(e.target.value)}
              />
              Surveying
            </label>
            <label>
              <input
                type="radio"
                name="section"
                value="Accounts"
                onChange={(e) => setSection(e.target.value)}
              />
              Accounts
            </label>
            <label>
              <input
                type="radio"
                name="section"
                value="Record Room"
                onChange={(e) => setSection(e.target.value)}
              />
              Record Room
            </label>
          </div>
        </div>

        {/* Officer No */}
        <div className="form-group">
          <label htmlFor="officerNo">Officer No:</label>
          <input type="number" id="officerNo" min="1" max="9" required />
        </div>

        {/* Type */}
        <div className="form-group">
          <label>Type:</label>
          <div className="post-type">
            <label>
              <input
                type="radio"
                name="postType"
                value="Registered Post"
                onChange={(e) => setPostType(e.target.value)}
              />
              Registered Post
            </label>
            <label>
              <input
                type="radio"
                name="postType"
                value="Normal Post"
                onChange={(e) => setPostType(e.target.value)}
              />
              Normal Post
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default NewPage;
