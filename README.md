# Contact Book API

## Description
The **Contact Book API** is a web application that allows users to store and manage contact information. It supports the following features:

- Add new contacts
- View all contacts
- Update contact details
- Delete contacts
- Categorize contacts into groups

The database is powered by MySQL, and the backend is built using Node.js and Express.

## How to Set Up/Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/Emmaculate-oduor/contact-book-api.git
cd contact-book-api 
```
###2. Install dependencies
Make sure you have Node.js installed. Then run:
```bash
npm install
```
###3. Set up the database
Import the contact_book.sql file into your MySQL database.

Use the following command in your MySQL command line:
```bash
mysql -u root -p < contact_book.sql
```
###4. Configure environment variables
Create a .env file in the root of your project and add the following:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=contact_book
PORT=8080
```
###5. Run the project
Once everything is set up, start the application using:
```
npm start
```
The server should now be running at http://localhost:8080.

### 6. API Routes
GET /contacts: Retrieve all contacts.

POST /contacts: Add a new contact.

PUT /contacts/:id: Update a contact by ID.

DELETE /contacts/:id: Delete a contact by ID.

ERD (Entity Relationship Diagram)
You can view the ERD diagram here.

Or below is a screenshot of the ERD:


License
This project is licensed under the MIT License - see the LICENSE file for details


