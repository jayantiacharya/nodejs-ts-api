# Book Management REST API
 Backend project built with **Node.js, Express, TypeScript and MongoDB**. It exposes REST endpoints to manage a collection of books (CRUD) and is being extended step by step with authentication and role-based access control.

## Tech Stack

- **Node.js** and **Express**: server and routing
- **TypeScript**: type safety for request handlers and models
- **MongoDB Atlas** with **Mongoose**: database and data modelling
- **dotenv**: environment variable management
- **CORS**: cross-origin request handling
- **Postman**: API testing

## Features

- [x] Express server with TypeScript setup
- [x] MongoDB Atlas connection with error handling
- [x] `Book` model (Mongoose schema + TypeScript interface)
- [x] Router, controller and model separation
- [x] Add a book
- [x] Delete a book
- [ ] Get all books
- [ ] Update a book
- [ ] Authentication (JWT)
- [ ] Role-based access control (admin / user)
- [ ] Deployment

## API Endpoints

Base URL (local): `http://localhost:5000/api/book`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/get-books` | Get all books |
| `POST` | `/add-book` | Add a new book |
| `PUT` | `/update-book/:id` | Update a book by id |
| `DELETE` | `/delete-book/:id` | Delete a book by id |

### Example: add a book

**Request** `POST /api/book/add-book`

```json
{
  "name": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishYear": 1925,
  "description": "A classic novel"
}
```

**Response** `201 Created`

```json
{
  "success": true,
  "message": "Book added successfully",
  "data": {
    "name": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishYear": 1925,
    "description": "A classic novel",
    "_id": "6ad6cb4950805fe62166095c",
    "__v": 0
  }
}
```

### Status codes used

| Code | Meaning |
|------|---------|
| `200` | Request succeeded |
| `201` | Resource created |
| `404` | Book not found |
| `500` | Server or database error |

## Project Structure

```
nodejs-ts-api/
├── src/
│   ├── controllers/
│   │   └── bookController.ts   # request handling logic
│   ├── models/
│   │   └── Book.ts             # Mongoose schema and model
│   ├── routes/
│   │   ├── index.ts            # combines all routers
│   │   └── bookRoute.ts        # book endpoints
│   ├── utils/
│   │   └── db.ts               # MongoDB connection
│   └── index.ts                # app entry point, middleware, server start
├── .env                        # environment variables (not committed)
├── .gitignore
├── package.json
└── tsconfig.json
```

**Request flow:** `Client → index.ts (middleware) → routes → controller → model → MongoDB → response`

## Getting Started

### Prerequisites

- Node.js installed
- A MongoDB Atlas cluster (or a local MongoDB instance)

### Installation

```bash
git clone https://github.com/jayantiacharya/nodejs-ts-api.git
cd nodejs-ts-api
npm install
```

### Environment variables

Create a `.env` file in the project root:

```
PORT=5000
HOST_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
```

### Run in development

```bash
npm run dev
```

The server starts on `http://localhost:5000`.

## What I Learned

- How Node.js and Express work, and how to create a server
- Using middleware (`express.json()`, `cors`)
- Setting up TypeScript in a Node.js project
- Modelling data with Mongoose schemas and TypeScript interfaces
- Structuring a backend with routes, controllers and models
- Using `async/await` and `try/catch` for database operations
- Connecting to MongoDB Atlas and debugging connection issues (IP whitelist, environment variables)
- Using route parameters (`req.params`) and request bodies (`req.body`)
- Testing APIs with Postman
- Using Git and GitHub to version a project with step-by-step commits

## Author

**Jayanti Acharya**
GitHub: [@jayantiacharya](https://github.com/jayantiacharya)