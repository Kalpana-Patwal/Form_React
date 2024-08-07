import express from 'express';
import { createMySQLConnection } from './db.js';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();
const app = express();
const port = process.env.PORT ||  5003;

app.use(express.json());
app.use(cors());

let dbConnection;

// Establish the MySQL connection once and reuse it
createMySQLConnection().then(connection => {
  dbConnection = connection;
}).catch(error => {
  console.error('Failed to connect to the database:', error);
  process.exit(1); // Exit the process if the connection fails
});

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/api/home', async (req, res) => {
  const { workMobile, workPhone, workEmail, department, jobPosition, manager, coach, resumeEntries, skillsEntries } = req.body;

  try {
    const [result] = await dbConnection.execute(
      `INSERT INTO employee_info (work_mobile, work_phone, work_email, department, job_position, manager, coach, resume, skills) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [workMobile, workPhone, workEmail, department, jobPosition, manager, coach, JSON.stringify(resumeEntries), JSON.stringify(skillsEntries)]
    );

    res.status(201).json({ message: 'Employee info added successfully', id: result.insertId });
  } catch (error) {
    console.error('Error inserting data into the database:', error);

    // Check for duplicate entry error
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ message: 'Duplicate entry detected. Please check the email address.' });
    } else {
      res.status(500).json({ message: 'Failed to add employee info' });
    }
  }
});

// Start the server

// Add this new route to server.js

app.post('/api/workInformation', async (req, res) => {
  console.log(req.body); // Log the incoming request data

  const { workAddress, workLocation, expense, timeOff, workingHours, timeZone } = req.body;

  try {
    const [result] = await dbConnection.execute(
      `INSERT INTO work_information (work_address, work_location, expense, time_off, working_hours, time_zone) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [workAddress, workLocation, expense, timeOff, workingHours, timeZone]
    );

    res.status(201).json({ message: 'Work information added successfully', id: result.insertId });
  } catch (error) {
    console.error('Error inserting data into the database:', error);

    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ message: 'Duplicate entry detected. Please check the email address.' });
    } else {
      res.status(500).json({ message: 'Failed to add work information' });
    }
  }
});


app.post('/api/privateInformation', async (req, res) => {
  const {
    address, email, phone, language, distance, carPlate, certificateLevel, fieldOfStudy,
    school, visaNo, workPermitNo, visaExpireDate, workPermitExpireDate, maritalStatus,
    numChildren, emergencyContactName, emergencyContactPhone, nationality, identificationNo,
    passportNo, gender, dob, placeOfBirth, countryOfBirth, nonResident
  } = req.body;


  try {
    const [result] = await dbConnection.execute(
     `INSERT INTO private_information (
        address, email, phone, language, distance, car_plate, certificate_level, field_of_study,
        school, visa_no, work_permit_no, visa_expire_date, work_permit_expiration_date, marital_status,
        num_children, emergency_contact_name, emergency_contact_phone, nationality, identification_no,
        passport_no, gender, date_of_birth, place_of_birth, country_of_birth, non_resident
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        address, email, phone, language, distance, carPlate, certificateLevel, fieldOfStudy, school,
        visaNo, workPermitNo, visaExpireDate, workPermitExpireDate, maritalStatus, numChildren,
        emergencyContactName, emergencyContactPhone, nationality, identificationNo, passportNo,
        gender, dob, placeOfBirth, countryOfBirth, nonResident
      ]
    );}
     catch (error) {
    console.error('Error inserting data into the database:', error);

    // Check for duplicate entry error
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ message: 'Duplicate entry detected. Please check the email address.' });
    } else {
      res.status(500).json({ message: 'Failed to add  private information' });
    }
  }
  
});

app.post('/api/hrSettings', async (req, res) => {
  const { employeeType, relatedUser, registrationNumber, hourlyCost, fleetMobilityCard, pinCode, badgeId, jobPosition } = req.body;

  try {
    const [result] = await dbConnection.execute(
      `INSERT INTO hr_settings (employee_type, related_user, registration_number, hourly_cost, fleet_mobility_card, pin_code, badge_id, job_position)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [employeeType, relatedUser, registrationNumber, hourlyCost, fleetMobilityCard, pinCode, badgeId, jobPosition]
    );

    res.status(201).json({ message: 'HR Settings added successfully', id: result.insertId });
  } catch (error) {
    console.error('Error inserting data into the database:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ message: 'Duplicate entry detected.' });
    } else {
      res.status(500).json({ message: 'Failed to add HR settings' });
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


