# Project 8

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**

## Dependencies

```
"dependencies": {
"cloudinary": "^1.41.3",
"dotenv": "^16.4.5",
"express": "^4.19.2",
"mongodb": "^6.6.2",
"mongoose": "^8.4.0",
"multer": "^1.4.5-lts.1",
"multer-storage-cloudinary": "^4.0.0"
}
```

### Development Dependencies

```
"devDependencies": {
"nodemon": "^3.1.0"
}
```

## Scripts

```
"scripts": {
"start": "node index.js",
"dev": "nodemon index.js",
"seed_authors": "node ./src/utils/seeds/authors.seed.js",
"seed_books": "node ./src/utils/seeds/books.seed.js"
}
```

- **start**: Runs the application.
- **dev**: Runs the application with nodemon for development.
- **seed_authors**: Adds authors to the database.
- **seed_books**: Adds books to the database.

## 🌐 Routes

### AUTHORS

- **Base URL**: `/api/authors`

| Method     | Endpoint       | Description                                                                                   |
| ---------- | -------------- | --------------------------------------------------------------------------------------------- |
| **GET**    | `/`            | Get all authors                                                                               |
| **POST**   | `/post`        | Add a new author (requires `name` and `image` in `jpg`, `png`, `jpeg`, `gif`, `webp` formats) |
| **PUT**    | `/put/:_id`    | Update an existing authro (require `:_id` as a parameter)                                     |
| **DELETE** | `/delete/:_id` | Delete an author (require `:_id` as a parameter)                                              |

**To create an author, the following fields are required:**

- `name`: "Author Name"
- `image`: _Image file in formats ['jpg', 'png', 'jpeg', 'gif', 'webp']_

**To update an author, you can pass either or both fields:**

- `name`: "Updated author Name"
- `image`: _Updated image file_
- `:_id`: Author ID (as a URL parameter)

**To delete an author, pass the following parameter:**

- `:_id`: Author ID (as a URL parameter)

### BOOK

- **Base URL**: `/api/books`

| Method     | Endpoint       | Description                                                                     |
| ---------- | -------------- | ------------------------------------------------------------------------------- |
| **GET**    | `/`            | Get all books                                                                   |
| **POST**   | `/post`        | Add a new book (requires `name`)                                                |
| **PUT**    | `/put/:_id`    | Update an existing book (requires `:_id` as a parameter and `name` in the body) |
| **DELETE** | `/delete/:_id` | Delete a book (requires `:_id` as a parameter)                                  |

**To create a book, the following field is required:**

- `name`: "Book Name"

**To update a book, the following fields are required:**

- `:_id`: Book ID (as a URL parameter)
- `name`: "Updated Book Name" (in the body)

**To delete a book, the following parameter is required:**

- `:_id`: Book ID (as a URL parameter)

### USER

- **Base URL**: `/api/users`

| Method     | Endpoint       | Description                                                      |
| ---------- | -------------- | ---------------------------------------------------------------- |
| **GET**    | `/`            | Get all users                                                    |
| **GET**    | `/:id`         | Get user by id                                                   |
| **POST**   | `/register`    | Add a new user (requires `email`, `password`)                    |
| **POST**   | `/login`       | Login a new user (requires `email`, `password`)                  |
| **DELETE** | `/delete/:_id` | Delete a book (requires `:_id` as a parameter and the rol admin) |

**To register an user, the following field is required:**

- `email`: "Real email",
- `password`: ""

**To login an user, the following fields are required:**

- `email`: "The email for the registration",
- `password`: "The password "

**To delete an user, the following parameter is required:**

- `:_id`: Book ID (as a URL parameter) and the rol admin.

### FUSION

- **Base URL**: `/api/fusion`

| Method   | Endpoint | Description              |
| -------- | -------- | ------------------------ |
| **POST** | `/`      | Link a book to an author |

**To link a book to an author, the following fields are required:**

```
{
  "author": "J.K. Rowling",
  "book": "Harry Potter and the Philosopher's Stone"
}
```

## 👤 Author

Project by **Mary Cala**
