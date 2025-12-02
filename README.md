# Task Manager Pro – Full MERN Stack Project

A complete Task Management System built using MongoDB, Express.js, React.js, and Node.js (MERN).
Supports authentication, protected routes, token-based login, and full CRUD functionality for tasks.

---

## Features

### Authentication

* User registration & login (JWT-based)
* Password hashing & validation
* Persistent login using tokens & `localStorage`
* Logout functionality

### Task Management

* Create new tasks
* Update task status: Pending, In Progress, Completed
* Delete tasks
* View tasks by user

### User Interface

* Clean, responsive React UI
* Global state management with Context API
* Protected pages accessible only to logged-in users

### Backend Features

* RESTful API with Express.js
* MongoDB with Mongoose models
* JWT token verification middleware
* Secure password storage using bcrypt

---

## Tech Stack

**Frontend:**

* React.js
* Context API
* Axios
* TailwindCSS / Custom CSS

**Backend:**

* Node.js
* Express.js
* MongoDB + Mongoose
* JSON Web Tokens (JWT)
* bcrypt for password security

---

## Project Structure

```
task-manager-pro/
│
├── backend/
│   ├── server.js
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── config/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.js
│   └── public/
│
└── README.md
```

---

## How to Run This Project

### Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/task-manager-pro.git
cd task-manager-pro
```

---

### Backend Setup

1. Install backend dependencies:

```bash
cd backend
npm install
```

2. Create `.env` file:

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000
```

3. Start backend server:

```bash
npm start
```

---

### Frontend Setup

1. Install frontend dependencies:

```bash
cd ../frontend
npm install
```

2. Start frontend:

```bash
npm start
```

---

## Access via Host / DNS (Local Network) or HTTP

To access the app using a custom domain or HTTP URL on Linux:

1. Open terminal and edit the hosts file:

```bash
sudo nano /etc/hosts
```

2. Add the following line:

```
10.0.4.118   todo.in0289.com
```

3. Save the file and exit (`Ctrl + O`, `Enter`, `Ctrl + X`).

4. Open a browser and visit either:

```
http://todo.in0289.com:4000
```

or via direct HTTP IP:

```
http://10.0.4.118:4000
```

Make sure the server PC running Node.js is on and the app is running.

---

## Authentication Flow

```
User → Login Form → Backend API → JWT Token → Store in localStorage → AuthContext → Protected Routes
```

---

## API Routes

### Auth Routes

| Method | Route              | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | Login & get token |

### Task Routes

| Method | Route          | Description        |
| ------ | -------------- | ------------------ |
| GET    | /api/tasks     | Get all user tasks |
| POST   | /api/tasks     | Create new task    |
| PUT    | /api/tasks/:id | Update task        |
| DELETE | /api/tasks/:id | Delete task        |

---

## Password Security

* Passwords stored using bcrypt hashing
* Client-side validation:

  * Minimum 8 characters
  * At least 1 number
  * At least 1 special character
  * Mix of lowercase & uppercase letters

---

## Contributing

* Pull requests are welcome!
* For major changes, please open an issue first to discuss.

---

## License

This project is licensed under the MIT License.
