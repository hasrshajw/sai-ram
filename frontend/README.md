# Bus Seat Booking Web Application

## 📌 Overview

This project is a full-stack **Bus Seat Booking Application** built using **React (frontend)**, **Node.js + Express (backend)**, and **MySQL (database)**.

The application simulates a real-world bus booking system where users can:

* View available seats
* Select and book seats
* See real-time seat availability
* Track booking history with date & time

The focus of this project is to demonstrate **clean architecture, API design, state management, and product thinking**.

---

## Live Demo-
Git Repo- https://github.com/Sairam3210/Ticket-booking-app

Netlify Link- https://busticket-booking-application.netlify.app/

---

## 🚀 Features

* 🪑 Bus-style seat layout (A1, B2 format)
* ✅ Real-time seat selection
* ❌ Prevent double booking
* 📊 Available & booked seat count
* 📜 Booking history with timestamp
* 🎨 Clean and responsive UI
* 💾 Persistent data using MySQL

---

## 🛠 Tech Stack

### Frontend

* React.js
* Axios
* CSS (Grid layout)

### Backend

* Node.js
* Express.js
* MySQL (mysql2)
* dotenv

---

## 📁 Project Structure

```bash
ticket-booking-app/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/Ticket-booking-app.git
cd Ticket-booking-app
```

---

### 2️⃣ Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

## 🗄️ Database Setup (MySQL)

### Create Database

```sql
CREATE DATABASE ticket_booking;
USE ticket_booking;
```

### Create Table

```sql
CREATE TABLE seats (
  id VARCHAR(10) PRIMARY KEY,
  booked BOOLEAN DEFAULT FALSE
);
```

### Insert Sample Data

```sql
INSERT INTO seats (id, booked) VALUES
('A1', false), ('A2', false), ('A3', false), ('A4', false),
('B1', false), ('B2', false), ('B3', false), ('B4', false),
('C1', false), ('C2', false), ('C3', false), ('C4', false),
('D1', false), ('D2', false), ('D3', false), ('D4', false);
```

---

## 🔐 Environment Variables

Create a `.env` file inside **backend/**:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=ticket_booking
```

---

## ▶️ How to Run the Application

### 🔹 Start Backend

```bash
cd backend
npm run dev
```

👉 Runs on: http://localhost:5000

---

### 🔹 Start Frontend

Open a new terminal:

```bash
cd frontend
npm start
```

👉 Runs on: http://localhost:3000

---

## 🔌 API Endpoints

### ✅ GET /seats

Fetch all seats

**Response:**

```json
[
  { "id": "A1", "booked": false },
  { "id": "A2", "booked": true }
]
```

---

### ✅ POST /book

Book selected seats

**Request:**

```json
{
  "seatIds": ["A1", "A2"]
}
```

**Response:**

```json
{
  "message": "Booking successful"
}
```

---

## ⚠️ Edge Cases Handled

* Prevent booking already booked seats
* Prevent empty booking requests
* Backend validation ensures data consistency
* UI disables booking when no seats selected

---

## 🎨 UI/UX Design

* 🟢 Green → Available seats
* 🟠 Orange → Selected seats
* 🔴 Red → Booked seats
* 📊 Real-time seat count
* 📜 Booking history panel

---

## 🧠 Product Thinking

This project focuses on:

### ✔ Real-world simulation

* Bus seating layout (2+2 structure)
* Seat labeling (A1, B2 format)

### ✔ Data persistence

* MySQL ensures data is not lost after restart

### ✔ User experience

* Real-time updates
* Clear feedback (counts, history)

### ✔ Scalability

* Can be extended with:

  * Authentication
  * Payment system
  * Real-time booking (WebSockets)

---

## 🚀 Future Enhancements

* User login & authentication
* Online payment integration
* Seat pricing & categories
* Upper & lower berth system
* Deployment (Netlify + Render + Cloud DB)

---

## 👨‍💻 Author

Sairam
GitHub: https://github.com/Sairam3210
