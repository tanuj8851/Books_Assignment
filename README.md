
---

# Book_Management

## Overview
Book Managment is an application to manage books and users. This document provides details on available API endpoints, including user registration, login, and book management.

## About the Project

**Book Management** is a web application crafted to streamline the administration of users and books within a library or book collection system. Featuring a suite of RESTful API endpoints, it supports user registration, authentication, and book management, making it an ideal solution for both small and large-scale deployments.

### Key Features
- **User Management**:
  - **Register**: Allows new users to register with default roles.
  - **Login**: Enables existing users to log in and receive an authentication token.
  - **Role-Based Access**: Implements role-based access control (Admin, Author, Reader) to ensure secure operations. Admins have additional privileges to manage users.
  - **CRUD Operations**: Admins can perform create, read, update, and delete operations on user data.

- **Book Management**:
  - **Add Books**: Allows users to add new books to the collection with details such as title, author, publication year, and cover page.
  - **View Books**: Provides endpoints to retrieve all books, get details of a specific book by ID, and search for books by title.
  - **Update Books**:Allows users to update book's details.
  - **Delete Books**: Enables users to delete books by their ID.

### Technology Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Documentation**: Swagger for API documentation

### How to Use
1. **Swagger Documentation**: Access the API documentation at [Swagger UI](http:/books-assignment.onrender.com/api-docs/#/).
2. **User Registration and Login**: Use the provided endpoints to register a new user and log in to receive a token.
3. **Manage Books**: Add, view, search,Update and delete books using the respective endpoints.

### Installation and Setup
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up the environment variables and configure the MongoDB connection.
4. Run the application using `npm start`.
5. Access the Swagger UI for detailed API documentation and testing.

**Book Management** aims to streamline the process of managing users and books, offering a secure and efficient solution for libraries, book clubs, and personal collections.

## Swagger URL
Access the API documentation here: [Swagger UI](http://localhost:3000/api-docs/#/)

## User Endpoints

### Register a New User
- **Endpoint**: `POST /api/auth/register`
- **Request Schema**:
  ```json
  {
    "name": "test4",
    "email": "test4@gmail.com",
    "password": "test4"
    // Role will be 'Reader' by default
  }
  ```
- **Role Options**: `Admin`, `Author`, `Reader`
- **Response**:
  ```json
  {
    Success: true,
    "msg": "User Created Successfully"
  }
  ```

  ### Log in an Existing User
- **Endpoint**: `POST /api/auth/login`
- **Request Schema**:
  ```json
  {
    "email": "test4@gmail.com",
    "password": "test4"
  }
  ```
- **Response**:
  ```json
  {
       "success": true,
    "msg": "User Login SuccessFully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGQ3OTA1MzFlNTQ4NDFlOGMyYWVhNiIsInJvbGUiOiJSZWFkZXIiLCJpYXQiOjE3MTYzNTMzOTUsImV4cCI6MTcxNjQzOTc5NX0.5cgnIwgVghZb6i8Oo-2SVSsC02f-vnchePFHkJGwuto"
  }
  ```

### Get All Users (Admin Only)
- **Endpoint**: `GET /api/auth/me`
- **Unauthorized Response**:
 ```json
   {
    "success": true,
    "data": [
        {
            "_id": "664c75ba69fab9cbfea0c25e",
            "name": "test1",
            "email": "test1@gmail.com",
            "password": "$2a$10$zqIlgqcX6xIyggpKijvgz.M8CXSl3We6C17phVPCp6vvTNj0rknNq",
            "role": "Reader",
            "createdAt": "2024-05-21T10:21:46.125Z",
            "updatedAt": "2024-05-21T10:21:46.125Z",
            "__v": 0
        },
        {
            "_id": "664c77e67f55c1ea973dc286",
            "name": "test2",
            "email": "test2@gmail.com",
            "password": "$2a$10$PSW8XLsdopj4GNCxL28brOebUg1PTnzEPqITmDC.dOvq3WYZbKfty",
            "role": "Author",
            "createdAt": "2024-05-21T10:31:02.453Z",
            "updatedAt": "2024-05-21T10:31:02.453Z",
            "__v": 0
        },
        {
            "_id": "664d790531e54841e8c2aea6",
            "name": "test4",
            "email": "test4@gmail.com",
            "password": "$2a$10$RbQydbTusQUdxNSbR9AbhuaMrEARA4yujoCoT3r/D2OVm.ujyzZN2",
            "role": "Reader",
            "createdAt": "2024-05-22T04:48:05.990Z",
            "updatedAt": "2024-05-22T04:48:05.990Z",
            "__v": 0
        },
        {
            "_id": "664d7b5dfd15c38d60effa3c",
            "name": "admin",
            "email": "admin@gmail.com",
            "password": "$2a$10$/l.qjCPdKejyIkusVyxOyu4QP3hq0ZuKDS30wx5uKDMyjwQBOVUqi",
            "role": "Admin",
            "createdAt": "2024-05-22T04:58:05.780Z",
            "updatedAt": "2024-05-22T04:58:05.780Z",
            "__v": 0
        }
    ]
}
  ```
- **Authorized Response**:
  ```json
  {
    "success": false,
    "message": "User role Reader is not authorized to access this route"

  }
  ```


## Book Endpoints

### Add a New Book (Admin/Author Only)
- **Endpoint**: `POST /api/books/create	`
- **Request Schema**:
  ```json
  {
    "title": "Book5",
    "author": "test2",
    "year": 2024,
    "coverPage": ""
  }
  ```
- **Response**:
  ```json
  {
    "msg": "Book Created Successfully",
    "book": {
        "title": "Book5",
        "author": "test2",
        "coverPage": "https://res.cloudinary.com/dxip6sh0z/image/upload/v1716354431/book_covers/node.jpg",
        "year": 2024,
        "_id": "664d7d80fd15c38d60effa42",
        "__v": 0
    }

  ```
### Update a Existing Book (Admin/Author Only)
- **Endpoint**: `PUT /api/books/:id`
- **Request Schema**:
  ```json
  {
    "title": "Book5",
        "author": "New Auth", //Update the author 
        "coverPage": "https://res.cloudinary.com/dxip6sh0z/image/upload/v1716354431/book_covers/node.jpg",
        "year": 2024
    }

  ```
- **Response**:
   ```json
  {
   "msg": "Book Updated Successfully",
    "book": {
        "_id": "664d7d80fd15c38d60effa42",
        "title": "Book5",
        "author": "New Auth",
        "coverPage": "https://res.cloudinary.com/dxip6sh0z/image/upload/v1716354431/book_covers/node.jpg",
        "year": 2024,
        "__v": 0
    }
    }

  ```

### Get All Books
- **Endpoint**: `GET /api/books/`
- **Response**:
   ```json
  [
  {
        "_id": "651d8a1334dd33d42cd85fcf",
        "title": "Water",
        "author": "C",
        "isbn": "Comic",
        "description": "Comic Book Water,C",
        "publishedDate": "2023-10-04T15:51:47.995Z",
        "__v": 0
    },
    {
        "_id": "664c92c11c535117816018d4",
        "title": "Book3",
        "author": "test2",
        "coverPage": "https://res.cloudinary.com/dxip6sh0z/image/upload/v1716294308/book_covers/error.jpg",
        "year": 2023,
        "__v": 0
    },
    {
        "_id": "664c9cbe44a2f07a6ced070d",
        "title": "Book1",
        "author": "test2",
        "coverPage": "https://res.cloudinary.com/dxip6sh0z/image/upload/v1716294260/book_covers/time.jpg",
        "year": 2023,
        "__v": 0
    },
    {
        "_id": "664d7d80fd15c38d60effa42",
        "title": "Book5",
        "author": "New Auth",
        "coverPage": "https://res.cloudinary.com/dxip6sh0z/image/upload/v1716354431/book_covers/node.jpg",
        "year": 2024,
        "__v": 0
    }

    ]

  ```

### Get

 Book by ID
- **Endpoint**: `GET /api/books/:id`
- **Response**:
  ```json
  {
    "_id": "664c92c11c535117816018d4",
    "title": "Book3",
    "author": "test2",
    "coverPage": "https://res.cloudinary.com/dxip6sh0z/image/upload/v1716294308/book_covers/error.jpg",
    "year": 2023,
    "__v": 0
}
 

### Delete Book by ID (Admin Only)
- **Endpoint**: `DELETE /api/books/:id`
- **Response**:
  ```json
  {
    "message": "Book removed"
  }
  ```

---

### Thank you for visiting. 
- **For any suggestion:** 
- Please reach out to me via:
- Mobile: 8851357334/9311481347
- Email: tanujmaurya40@gmail.com
