import React, { useState } from 'react';
import axios from 'axios';
import './PrivateInformation.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateInformation = () => {
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [language, setLanguage] = useState('');
  const [distance, setDistance] = useState('');
  const [carPlate, setCarPlate] = useState('');
  const [certificateLevel, setCertificateLevel] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [school, setSchool] = useState('');
  const [visaNo, setVisaNo] = useState('');
  const [workPermitNo, setWorkPermitNo] = useState('');
  const [visaExpireDate, setVisaExpireDate] = useState('');
  const [workPermitExpireDate, setWorkPermitExpireDate] = useState('');
  const [workPermitFile, setWorkPermitFile] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState('');
  const [numChildren, setNumChildren] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('');
  const [nationality, setNationality] = useState('');
  const [identificationNo, setIdentificationNo] = useState('');
  const [passportNo, setPassportNo] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [countryOfBirth, setCountryOfBirth] = useState('');
  const [nonResident, setNonResident] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('address', address);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('language', language);
      formData.append('distance', distance);
      formData.append('carPlate', carPlate);
      formData.append('certificateLevel', certificateLevel);
      formData.append('fieldOfStudy', fieldOfStudy);
      formData.append('school', school);
      formData.append('visaNo', visaNo);
      formData.append('workPermitNo', workPermitNo);
      formData.append('visaExpireDate', visaExpireDate);
      formData.append('workPermitExpireDate', workPermitExpireDate);
      if (workPermitFile) {
        formData.append('workPermitFile', workPermitFile);
      }
      formData.append('maritalStatus', maritalStatus);
      formData.append('numChildren', numChildren);
      formData.append('emergencyContactName', emergencyContactName);
      formData.append('emergencyContactPhone', emergencyContactPhone);
      formData.append('nationality', nationality);
      formData.append('identificationNo', identificationNo);
      formData.append('passportNo', passportNo);
      formData.append('gender', gender);
      formData.append('dob', dob);
      formData.append('placeOfBirth', placeOfBirth);
      formData.append('countryOfBirth', countryOfBirth);
      formData.append('nonResident', nonResident);

      const response = await axios.post('http://localhost:5003/api/privateInformation', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      toast.success('Private information saved successfully!');
      // Reset form fields
      setAddress('');
      setEmail('');
      setPhone('');
      setLanguage('');
      setDistance('');
      setCarPlate('');
      setCertificateLevel('');
      setFieldOfStudy('');
      setSchool('');
      setVisaNo('');
      setWorkPermitNo('');
      setVisaExpireDate('');
      setWorkPermitExpireDate('');
      setWorkPermitFile(null);
      setMaritalStatus('');
      setNumChildren('');
      setEmergencyContactName('');
      setEmergencyContactPhone('');
      setNationality('');
      setIdentificationNo('');
      setPassportNo('');
      setGender('');
      setDob('');
      setPlaceOfBirth('');
      setCountryOfBirth('');
      setNonResident('');
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to save private information.');
      }
    }
  };
  return (
    <>
     <ToastContainer />
    <div className="private-information">
    <form onSubmit={handleSubmit}>
      <div className="content-wrapper">
        <div className="left-side">
          <div className="private-contact">
            <h2>Private Contact</h2>
            <label>
              <span>Address:</span>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
            <label>
              <span>Email:</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              <span>Phone:</span>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label>
              <span>Language:</span>
              <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
            </label>
            <label>
              <span>Home-Work Distance:</span>
              <input type="text" value={distance} onChange={(e) => setDistance(e.target.value)} />
            </label>
            <label>
              <span>Private Car Plate:</span>
              <input type="text" value={carPlate} onChange={(e) => setCarPlate(e.target.value)} />
            </label>
          </div>

          <div className="education">
            <h2>Education</h2>
            <label>
              <span>Certificate Level:</span>
              <select value={certificateLevel} onChange={(e) => setCertificateLevel(e.target.value)}>
                <option>Other</option>
                <option>O-Level</option>
                <option>A-Level</option>
                <option>B-Level</option>
                <option>C-Level</option>
              </select>
            </label>
            <label>
              <span>Field of Study:</span>
              <input type="text" value={fieldOfStudy} onChange={(e) => setFieldOfStudy(e.target.value)} />
            </label>
            <label>
              <span>School:</span>
              <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />
            </label>
          </div>

          <div className="work-permit">
            <h2>Work Permit</h2>
            <label>
              <span>Visa NO.:</span>
              <input type="text" value={visaNo} onChange={(e) => setVisaNo(e.target.value)} />
            </label>
            <label>
              <span>Work Permit No.:</span>
              <input type="text" value={workPermitNo} onChange={(e) => setWorkPermitNo(e.target.value)} />
            </label>
            <label>
              <span>Visa Expire Date:</span>
              <input type="date" value={visaExpireDate} onChange={(e) => setVisaExpireDate(e.target.value)} />
            </label>
            <label>
              <span>Work Permit Expiration Date:</span>
              <input type="date" value={workPermitExpireDate} onChange={(e) => setWorkPermitExpireDate(e.target.value)} />
            </label>
            <label>
              <span>Work Permit:</span>
              <input type="file" onChange={(e) => setWorkPermitFile(e.target.files[0])} />
            </label>
          </div>
        </div>
        <div className="right-side">
          <div className="family-status">
            <h2>Family Status</h2>
            <label>
              <span>Martial Status:</span>
              <input type="text" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} />
            </label>
            <label>
              <span>Number of Dependent Children:</span>
              <input type="number" value={numChildren} onChange={(e) => setNumChildren(e.target.value)} />
            </label>
          </div>

          <div className="emergency">
            <h2>Emergency</h2>
            <label>
              <span>Contact Name:</span>
              <input type="text" value={emergencyContactName} onChange={(e) => setEmergencyContactName(e.target.value)} />
            </label>
            <label>
              <span>Contact Phone:</span>
              <input type="tel" value={emergencyContactPhone} onChange={(e) => setEmergencyContactPhone(e.target.value)} />
            </label>
          </div>

          <div className="citizenship">
            <h2>Citizenship</h2>
            <label>
              <span>Nationality (Country):</span>
              <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} />
            </label>
            <label>
              <span>Identification No.:</span>
              <input type="text" value={identificationNo} onChange={(e) => setIdentificationNo(e.target.value)} />
            </label>
            <label>
              <span>Passport No.:</span>
              <input type="text" value={passportNo} onChange={(e) => setPassportNo(e.target.value)} />
            </label>
            <label>
              <span>Gender:</span>
              <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
            </label>
            <label>
              <span>Date Of Birth:</span>
              <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
            </label>
            <label>
              <span>Place of Birth:</span>
              <input type="text" value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
            </label>
            <label>
              <span>Country of Birth:</span>
              <input type="text" value={countryOfBirth} onChange={(e) => setCountryOfBirth(e.target.value)} />
            </label>
            <label>
              <span>Non-resident:</span>
              <input type="text" value={nonResident} onChange={(e) => setNonResident(e.target.value)} />
            </label>
          </div>
        </div>
      </div>
      <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
   
    </>
  );
};

export default PrivateInformation;
