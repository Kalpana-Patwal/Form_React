import express from 'express';
import { createMySQLConnection } from './db.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT || 3080;

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
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
