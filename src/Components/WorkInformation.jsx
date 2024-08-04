import React from 'react';
import './WorkInformation.css';


const WorkInformation = () => {
  return (
    <>
     
      <div className="work-information">
        <div className="location-section">
          <h2>LOCATION</h2>
          <label>
            Work Address:
            <input type="text" value="anwarb.com" />
          </label>
          <label>
            Work Location:
            <input type="text" value="India" />
          </label>
        </div>
        <div className="approves-section">
          <h2>APPROVES</h2>
          <label>
            Expense:
            <input type="text" />
          </label>
          <label>
            Time Off:
            <input type="text" />
          </label>
        </div>
        <div className="schedule-section">
          <h2>SCHEDULE</h2>
          <label>
            Working Hours:
            <input type="text" value="Standard 40 hours/Week" />
          </label>
          <label>
            Time Zone:
            <input type="text" value="Asia/Calcutta" />
          </label>
        </div>
        <div className="planning-section">
          <h2>PLANNING</h2>
          <label>
            Roles:
            <input type="text" />
          </label>
          <label>
            Default Roles:
            <input type="text" />
          </label>
        </div>
      </div>
    </>
  );
};

export default WorkInformation;
