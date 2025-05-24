# ReMed - Medication Reminder Application
ReMed is a comprehensive medication management system designed to help patients track their medications, set reminders, and manage their health effectively.

**Features**
Medicine Management: Add, edit, and track medications
Reminder System: Set customized medication reminders with:
Multiple daily reminders
Flexible timing windows
Custom alarm sounds
Snooze options
Critical medication prioritization
Reporting: Track medication adherence and health metrics
User Management: Support for patients, family members, and healthcare providers

**Project Structure**
Frontend: React-based web application
Backend: Node.js/Express API
Database: MySQL
Setup Instructions for Team Members
Prerequisites
Node.js v14+ and npm
MySQL 8.0+

# Git
1. Clone the Repository
git clone [your-repository-url]
cd remed
3. Database Setup
Install MySQL if not already installed (see backend/MYSQL_SETUP.md for detailed instructions)

# Log in to MySQL:
mysql -u root -p
Create the database and user:
CREATE DATABASE remed;
CREATE USER 'remed'@'localhost' IDENTIFIED BY 'remed_password';
GRANT ALL PRIVILEGES ON remed.* TO 'remed'@'localhost';
FLUSH PRIVILEGES;
EXIT;

# Import the database from the SQL file:
mysql -u remed -p remed < backend/remed_database.sql
5. Backend Setup
Navigate to the backend directory:
cd backend

Install dependencies:
npm install

**Create a .env file with the following content:**
DB_HOST=localhost
DB_USER=remed
DB_PASSWORD=remed_password
DB_NAME=remed
JWT_SECRET=your_jwt_secret_key
PORT=5000
Start the backend server:
npm run dev
6. Frontend Setup
Navigate to the frontend directory:
cd ../frontend

_Install dependencies:_

npm install
Start the frontend development server:
npm run dev
Working on the Project as a Team
Workflow

# Always pull the latest changes before starting work:
git pull origin main
Create a branch for your feature:
git checkout -b feature/your-feature-name
Make your changes and commit them:
git add .
git commit -m "Your descriptive commit message"
Push your changes:
git push origin feature/your-feature-name
Create a pull request to merge your changes into the main branch
Database Changes
If you need to modify the database schema:

Document all schema changes in a SQL file in backend/db/migrations/
Update the db-update.js script to include your changes
Test your changes locally before committing
Let the team know about the database changes
Accessing the App
Frontend: http://localhost:3000
Backend API: http://localhost:5000
Troubleshooting
Server Already Running

If you get an error about the port already being in use:

# Find the process using port 5000
sudo lsof -i :5000

# Kill the process
kill -9 [PID]
Database Connectivity Issues
If you have issues connecting to the database:

# Verify MySQL is running
Check your database credentials in the .env file
Ensure the remed database exists and the user has proper permissions
Project Roadmap
 Implement medicine interaction warnings
 Add image recognition for pill identification
 Integrate with healthcare provider systems
 Develop mobile app versions
