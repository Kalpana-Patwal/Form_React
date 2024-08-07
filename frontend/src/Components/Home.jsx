import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [formData, setFormData] = useState({
    workMobile: '',
    workPhone: '',
    workEmail: '',
    department: '',
    jobPosition: '',
    manager: '',
    coach: '',
    resume: '',
    skills: ''
  });

  const [resumeEntries, setResumeEntries] = useState([]);
  const [skillsEntries, setSkillsEntries] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5003/api/home', {
        ...formData,
        resumeEntries,
        skillsEntries
      });
      console.log(response.data);
      toast.success('Data inserted successfully!');
      // Reset form fields
      setFormData({
        workMobile: '',
        workPhone: '',
        workEmail: '',
        department: '',
        jobPosition: '',
        manager: '',
        coach: '',
        resume: '',
        skills: ''
      });
      setResumeEntries([]);
      setSkillsEntries([]);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to insert data.');
      }
    }
  };

  const handleAddResumeEntry = () => {
    const newEntry = prompt('Enter resume entry:');
    if (newEntry) {
      setResumeEntries((prevEntries) => [...prevEntries, newEntry]);
    }
  };

  const handleAddSkillEntry = () => {
    const newEntry = prompt('Enter skill entry:');
    if (newEntry) {
      setSkillsEntries((prevEntries) => [...prevEntries, newEntry]);
    }
  };

  return (
    <div className="homepage">
      <ToastContainer />
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
            <ul>
              {resumeEntries.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
            <button type="button" className="create-entry-btn" onClick={handleAddResumeEntry}>
              Create a new Entry
            </button>
          </div>
          <div className="skills-section">
            <h3>SKILLS</h3>
            <ul>
              {skillsEntries.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
            <button type="button" className="create-entry-btn" onClick={handleAddSkillEntry}>
              Create a new Entry
            </button>
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Home;
