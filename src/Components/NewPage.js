import React, { useState } from "react";
import "../styles/NewPage.css";
import axios from "axios";

const NewPage = () => {
  const [data, setData] = useState({
    date: "",
    refNo: "",
    company: "",
    subject: "",
    section: "",
    officerNo: "",
    postType: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(data);
    const url = "http://localhost:4000/api/letter/add";

    try {
      const response = await axios.post(url, data);

      if (response.data.success) {
        alert(`Form submitted with:
          Section: ${data.section}
          Post Type: ${data.postType}`);

        // Reset form fields after successful submission
        setData({
          date: "",
          refNo: "",
          company: "",
          subject: "",
          section: "",
          officerNo: "",
          postType: ""
        });
      } else {
        alert(response.data.message);
      }

    } catch (error) {
      console.error(error);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="new-page-container">
      <h2>New Letter Form</h2>
      <form onSubmit={handleSubmit} className="new-page-form">
        {/* Date, Ref No, Company, Subject */}
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={data.date} onChange={onChangeHandler} required />

          <label htmlFor="refNo">Ref No:</label>
          <input type="text" id="refNo" name="refNo" value={data.refNo} onChange={onChangeHandler} required />

          <label htmlFor="company">Company:</label>
          <input type="text" id="company" name="company" value={data.company} onChange={onChangeHandler} required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" value={data.subject} onChange={onChangeHandler} required />
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
                checked={data.section === "Establishment"}
                onChange={onChangeHandler}
              />
              Establishment
            </label>
            <label>
              <input
                type="radio"
                name="section"
                value="Surveying"
                checked={data.section === "Surveying"}
                onChange={onChangeHandler}
              />
              Surveying
            </label>
            <label>
              <input
                type="radio"
                name="section"
                value="Accounts"
                checked={data.section === "Accounts"}
                onChange={onChangeHandler}
              />
              Accounts
            </label>
            <label>
              <input
                type="radio"
                name="section"
                value="Record Room"
                checked={data.section === "Record Room"}
                onChange={onChangeHandler}
              />
              Record Room
            </label>
          </div>
        </div>

        {/* Officer No */}
        <div className="form-group">
          <label htmlFor="officerNo">Officer No:</label>
          <input type="number" id="officerNo" min="1" max="9" name="officerNo" value={data.officerNo} onChange={onChangeHandler} required />
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
                checked={data.postType === "Registered Post"}
                onChange={onChangeHandler}
              />
              Registered Post
            </label>
            <label>
              <input
                type="radio"
                name="postType"
                value="Normal Post"
                checked={data.postType === "Normal Post"}
                onChange={onChangeHandler}
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
