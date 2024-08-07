import React, { useState } from 'react';
import './HrSettings.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HrSettings = () => {
  const [formData, setFormData] = useState({
    employeeType: '',
    relatedUser: '',
    registrationNumber: '',
    hourlyCost: 'Rupees 0.00',
    fleetMobilityCard: '',
    pinCode: '',
    badgeId: '',
    jobPosition: ''
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
      const response = await axios.post('http://localhost:5003/api/hrSettings', formData);
      console.log(response.data);
      toast.success('HR Settings saved successfully!');
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to save HR settings.');
      }
    }
  };
  return (
    <>
     <ToastContainer />
     <form onSubmit={handleSubmit}>
      <div className="hr-settings">
      
        <div className="left-side">
          <div className="status">
            <h2>STATUS</h2>
            <label>
              Employee Type:
              <input type="text"
                  name="employeeType"
                  value={formData.employeeType}
                  onChange={handleChange} />
            </label>
            <label>
              Related User:
              <input  type="text"
                  name="relatedUser"
                  value={formData.relatedUser}
                  onChange={handleChange} />
            </label>
          </div>
          <div className="payroll">
            <h2>PAYROLL</h2>
            <label>
              Registration Number of the Employee:
              <input  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange} />
            </label>
          </div>
          <div className="application-settings">
            <h2>APPLICATION SETTINGS</h2>
            <label>
              Hourly Cost:
              <input type="text"
                  name="hourlyCost"
                  value={formData.hourlyCost}
                  onChange={handleChange} />
            </label>
            <label>
              Fleet Mobility Card:
              <input type="text"
                  name="fleetMobilityCard"
                  value={formData.fleetMobilityCard}
                  onChange={handleChange} />
            </label>
          </div>
        </div>
        <div className="right-side">
          <div className="attendance-pos">
            <h2>ATTENDANCE/POINT OF SALE</h2>
            <label>
              PIN CODE:
              <input  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange} />
            </label>
            <label>
              BADGE ID:
              <input  type="text"
                  name="badgeId"
                  value={formData.badgeId}
                  onChange={handleChange} />
            </label>
          </div>
          <div className="payroll">
            <h2>PAY ROLL</h2>
            <label>
              Job Position:
              <input  type="text"
                  name="jobPosition"
                  value={formData.jobPosition}
                  onChange={handleChange}/>
            </label>
          </div>
        </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>

        </form>
      
    </>
  );
};

export default HrSettings;
