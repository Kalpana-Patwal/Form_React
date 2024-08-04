import React from 'react';
import './HrSettings.css';


const HrSettings = () => {
  return (
    <>
     
      <div className="hr-settings">
        <div className="left-side">
          <div className="status">
            <h2>STATUS</h2>
            <label>
              Employee Type:
              <input type="text" />
            </label>
            <label>
              Related User:
              <input type="text" />
            </label>
          </div>
          <div className="payroll">
            <h2>PAYROLL</h2>
            <label>
              Registration Number of the Employee:
              <input type="text" />
            </label>
          </div>
          <div className="application-settings">
            <h2>APPLICATION SETTINGS</h2>
            <label>
              Hourly Cost:
              <input type="text" value="Rupees 0.00" />
            </label>
            <label>
              Fleet Mobility Card:
              <input type="text" />
            </label>
          </div>
        </div>
        <div className="right-side">
          <div className="attendance-pos">
            <h2>ATTENDANCE/POINT OF SALE</h2>
            <label>
              PIN CODE:
              <input type="text" />
            </label>
            <label>
              BADGE ID:
              <input type="text" />
            </label>
          </div>
          <div className="payroll">
            <h2>PAY ROLL</h2>
            <label>
              Job Position:
              <input type="text" />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default HrSettings;
