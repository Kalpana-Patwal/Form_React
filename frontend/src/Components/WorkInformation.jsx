import React, { useState } from 'react';
import './WorkInformation.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WorkInformation = () => {
  const [formData, setFormData] = useState({
    workAddress: 'anwarb.com',
    workLocation: 'India',
    expense: '',
    timeOff: '',
    workingHours: 'Standard 40 hours/Week',
    timeZone: 'Asia/Calcutta'
  });

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
      const response = await axios.post('http://localhost:5003/api/workInformation', {
        ...formData
      });
      
      console.log(response.data);

      toast.success('Work information saved successfully!');
      setFormData({
        workAddress:" ",
        workLocation:" ",
        expense:" ",
        timeOff:" ",
        workingHours:" ",
        timeZone:" "

      });
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to save work information.');
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="work-information">
        <form onSubmit={handleSubmit}>
          <div className="location-section">
            <h2>LOCATION</h2>
            <label>
              Work Address:
              <input
                type="text"
                name="workAddress"
                value={formData.workAddress}
                onChange={handleChange}
              />
            </label>
            <label>
              Work Location:
              <input
                type="text"
                name="workLocation"
                value={formData.workLocation}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="approves-section">
            <h2>APPROVES</h2>
            <label>
              Expense:
              <input
                type="text"
                name="expense"
                value={formData.expense}
                onChange={handleChange}
              />
            </label>
            <label>
              Time Off:
              <input
                type="text"
                name="timeOff"
                value={formData.timeOff}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="schedule-section">
            <h2>SCHEDULE</h2>
            <label>
              Working Hours:
              <input
                type="text"
                name="workingHours"
                value={formData.workingHours}
                onChange={handleChange}
              />
            </label>
            <label>
              Time Zone:
              <input
                type="text"
                name="timeZone"
                value={formData.timeZone}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="planning-section">
            <h2>PLANNING</h2>
            {/* Add additional fields for planning if needed */}
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </>
  );
};

export default WorkInformation;
