# Book_Management 

The project builds RESTful APIs using Node.js, Express and Mongoose, jsonwebtoken, bcryptjs, dotenv, express-validator, multer, cloudinary, swagger-jsdoc, swagger-ui-express.



## Manual Installation

Clone the repo:

```bash
https://github.com/tanuj8851/Books_Assignment.git
cd Books_Assignment
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
# open .env and modify the environment variables
```

**Book Management** aims to streamline the process of managing users and books, offering a secure and efficient solution for libraries, book clubs, and personal collections.

## Swagger URL
Access the API documentation here: [Swagger UI](http://books-assignment.onrender.com/api-docs/#/)


## Table of Contents

- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [How to User](#How-to-use)
- [API Endpoints](#api-endpoints)

## Commands

Running in development:

```bash
npm start
# or
npm run server
```

Running in production:

```bash
# build
npm run build
# start
npm run prod
```

## Environment Variables

The environment variables can be found and modified in the `.env` file.

```bash
# MongoDB Url
MONGODB_URI = # MongoDB URL

# PORT
PORT = # default 3000

# JWT
JWT_SECRET= # company

# Cloudinary
CLOUDINARY_CLOUD_NAME= # CLoudName Generated in CLoudinary Portal
CLOUDINARY_API_KEY=# CLoudinary API KEY Generated in CLoudinary Portal
CLOUDINARY_API_SECRET=# CLoudinary API SECRET KEY Generated in CLoudinary Portal
```

## Project Structure

```
BOOKS_ASSIGNMENT\ 
 |--config\         # Environment variables and db connection
 |--controllers\    # Auth/user and Books Controllers
 |--middlewares\    # Custom express middlewares
 |--models\         # Auth/user and BooksMongoose models/Schemas
 |--routes\         # Auth/user and Books Routes
 |--.env\           # environment variables
 |--.gitignore      # ignoring node_modules and .env file 
 |--app.js        # App entry point
```

### How to Use
1. **Swagger Documentation**: Access the API documentation at [Swagger UI](http:/books-assignment.onrender.com/api-docs/#/).
2. **User Registration and Login**: Use the provided endpoints to register a new user and log in to receive a token.
3. **Manage Books**: Add, view, search,Update and delete books using the respective endpoints.

### API Endpoints

List of available routes:

**Auth routes**:\
`POST api/auth/register` - User Register\
`POST api/auth/login` - User Login\
`POST api/auth/me` - Protected Route (Admin Only)\

**User routes**:\
`POST api/books/create` - Create a book\
`GET api/books/` - Get all books\
`GET api/books/:id` - Get book by id\
`PUT api/books/:Id` - Update books\
`DELETE api/books/:id` - Delete book 



### Thank you for visiting. 
- **For any suggestion:** 
- Please reach out to me via:
- Mobile: 8851357334/9311481347
- Email: tanujmaurya40@gmail.com
