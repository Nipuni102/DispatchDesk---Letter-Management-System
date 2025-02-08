import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NewPage.css";
import axios from "axios";
import Select from "react-select";

const NewPage = () => {

  const navigate = useNavigate(); 

  const [data, setData] = useState({
    date: "",
    refNo: "",
    company: "",
    subject: "",
    section: "",
    officerNo: "",
    postType: ""
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    const url = "http://localhost:4000/api/letter/getUsers";
    try {
      const response = await axios.get(url);
      if (response.data.success) {
        setUsers(response.data.data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

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

        // Navigate to the Dashboard page
        navigate("/dashboard");
      } else {
        alert(response.data.message);
      }

    } catch (error) {
      console.error(error);
    }
  };

  const onChangeHandler = (event) => {
    if (event.target) {
      // Normal input fields
      const { name, value } = event.target;
      setData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      // Third-party Select component
      setData((prevData) => ({ ...prevData, officerNo: event.value }));
    }
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
          <Select
            name="officerNo"
            options={users.map((user) => ({
              value: user.officerNo,
              label: user.officerNo
            }))}
            onChange={onChangeHandler}
            placeholder="Select Officer"
            isSearchable
          />

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
