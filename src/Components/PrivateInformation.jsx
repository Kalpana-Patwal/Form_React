
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
              Address:
              <input type="text" />
            </label>
            <label>
              Email:
              <input type="email" />
            </label>
            <label>
              Phone:
              <input type="tel" />
            </label>
            <label>
              Language:
              <input type="text" />
            </label>
            <label>
              Home-Work Distance:
              <input type="text" />
            </label>
            <label>
              Private Car Plate:
              <input type="text" />
            </label>
          </div>

          <div className="education">
            <h2>Education</h2>
            <label>
              Certificate Level:
              <select>
                <option>Other</option>
                <option>O-Level</option>
                <option>A-Level</option>
                <option>B-Level</option>
                <option>C-Level</option>
              </select>
            </label>
            <label>
              Field of Study:
              <input type="text" />
            </label>
            <label>
              School:
              <input type="text" />
            </label>
          </div>

          <div className="work-permit">
            <h2>Work Permit</h2>
            <label>
              Visa NO.:
              <input type="text" />
            </label>
            <label>
              Work Permit No.:
              <input type="text" />
            </label>
            <label>
              Visa Expire Date:
              <input type="date" />
            </label>
            <label>
              Work Permit Expiration Date:
              <input type="date" />
            </label>
            <label>
              Work Permit:
              <input type="file" />
            </label>
          </div>
        </div>
        <div className="right-side">
          <div className="family-status">
            <h2>Family Status</h2>
            <label>
              Martial Status:
              <input type="text" />
            </label>
            <label>
              Number of Dependent Children:
              <input type="number" />
            </label>
          </div>

          <div className="emergency">
            <h2>Emergency</h2>
            <label>
              Contact Name:
              <input type="text" />
            </label>
            <label>
              Contact Phone:
              <input type="tel" />
            </label>
          </div>

          <div className="citizenship">
            <h2>Citizenship</h2>
            <label>
              Nationality (Country):
              <input type="text" />
            </label>
            <label>
              Identification No.:
              <input type="text" />
            </label>
            <label>
              Passport No.:
              <input type="text" />
            </label>
            <label>
              Gender:
              <input type="text" />
            </label>
            <label>
              Date Of Birth:
              <input type="date" />
            </label>
            <label>
              Place of Birth:
              <input type="text" />
            </label>
            <label>
              Country of Birth:
              <input type="text" />
            </label>
            <label>
              Non-resident:
              <input type="text" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateInformation;
