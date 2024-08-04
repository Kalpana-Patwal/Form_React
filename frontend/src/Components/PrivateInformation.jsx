import React from 'react';
import './PrivateInformation.css';

const PrivateInformation = () => {
  return (
    <div className="private-information">
      <div className="content-wrapper">
        <div className="left-side">
          <div className="private-contact">
            <h2>Private Contact</h2>
            <label>
              <span>Address:</span>
              <input type="text" />
            </label>
            <label>
              <span>Email:</span>
              <input type="email" />
            </label>
            <label>
              <span>Phone:</span>
              <input type="tel" />
            </label>
            <label>
              <span>Language:</span>
              <input type="text" />
            </label>
            <label>
              <span>Home-Work Distance:</span>
              <input type="text" />
            </label>
            <label>
              <span>Private Car Plate:</span>
              <input type="text" />
            </label>
          </div>

          <div className="education">
            <h2>Education</h2>
            <label>
              <span>Certificate Level:</span>
              <select>
                <option>Other</option>
                <option>O-Level</option>
                <option>A-Level</option>
                <option>B-Level</option>
                <option>C-Level</option>
              </select>
            </label>
            <label>
              <span>Field of Study:</span>
              <input type="text" />
            </label>
            <label>
              <span>School:</span>
              <input type="text" />
            </label>
          </div>

          <div className="work-permit">
            <h2>Work Permit</h2>
            <label>
              <span>Visa NO.:</span>
              <input type="text" />
            </label>
            <label>
              <span>Work Permit No.:</span>
              <input type="text" />
            </label>
            <label>
              <span>Visa Expire Date:</span>
              <input type="date" />
            </label>
            <label>
              <span>Work Permit Expiration Date:</span>
              <input type="date" />
            </label>
            <label>
              <span>Work Permit:</span>
              <input type="file" />
            </label>
          </div>
        </div>
        <div className="right-side">
          <div className="family-status">
            <h2>Family Status</h2>
            <label>
              <span>Martial Status:</span>
              <input type="text" />
            </label>
            <label>
              <span>Number of Dependent Children:</span>
              <input type="number" />
            </label>
          </div>

          <div className="emergency">
            <h2>Emergency</h2>
            <label>
              <span>Contact Name:</span>
              <input type="text" />
            </label>
            <label>
              <span>Contact Phone:</span>
              <input type="tel" />
            </label>
          </div>

          <div className="citizenship">
            <h2>Citizenship</h2>
            <label>
              <span>Nationality (Country):</span>
              <input type="text" />
            </label>
            <label>
              <span>Identification No.:</span>
              <input type="text" />
            </label>
            <label>
              <span>Passport No.:</span>
              <input type="text" />
            </label>
            <label>
              <span>Gender:</span>
              <input type="text" />
            </label>
            <label>
              <span>Date Of Birth:</span>
              <input type="date" />
            </label>
            <label>
              <span>Place of Birth:</span>
              <input type="text" />
            </label>
            <label>
              <span>Country of Birth:</span>
              <input type="text" />
            </label>
            <label>
              <span>Non-resident:</span>
              <input type="text" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateInformation;
