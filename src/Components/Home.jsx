import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';
const Home = () => {
  const [formData, setFormData] = useState({
    workMobile: '',
    workPhone: '',
    workEmail: '',
    department: '',
    jobPosition: '',
    manager: '',
    coach: ''
  });
  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e)=> {
    e.preventDefault();
    try{
      const data=await axios.post('http://localhost:5000/api/home',formData);
      console.log(data)
    }
    catch(e){
        console.log(e);
    }
    // fetch('http://localhost:5000/api/home', { 
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
  };

  return (
    <div className="homepage">
      <h1 className="heading">Employee's Name</h1>
      <h2 className="heading">Job Position</h2>
      <div className="heading">Tags</div>
      <form onSubmit={handleSubmit}>
        <div className="info-container">
          <div className="right-info">
            <label>
              Work Mobile:
              <input
                type="tel"
                name="workMobile"
                value={formData.workMobile}
                onChange={handleChange}
              />
            </label>
            <label>
              Work Phone:
              <input
                type="tel"
                name="workPhone"
                value={formData.workPhone}
                onChange={handleChange}
              />
            </label>
            <label>
              Work Email:
              <input
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="left-info">
            <label>
              Department:
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </label>
            <label>
              Job Position:
              <input
                type="text"
                name="jobPosition"
                value={formData.jobPosition}
                onChange={handleChange}
              />
            </label>
            <label>
              Manager:
              <input
                type="text"
                name="manager"
                value={formData.manager}
                onChange={handleChange}
              />
            </label>
            <label>
              Coach:
              <input
                type="text"
                name="coach"
                value={formData.coach}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="resume-skills-container">
          <div className="resume-section">
            <h3>RESUME</h3>
            <button type="button" className="create-entry-btn">Create a new Entry</button>
          </div>
          <div className="skills-section">
            <h3>SKILLS</h3>
            <button type="button" className="create-entry-btn">Create a new Entry</button>
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Home;
