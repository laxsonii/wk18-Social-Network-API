# Social Network API

## Description

This project is a RESTful API for a social network application. It allows users to create accounts, post thoughts, and react to and add friends to their profiles. The API uses MongoDB and Mongoose for data persistence.

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Set up MongoDB locally or provide a MongoDB URI in the environment variable `MONGODB_URI`

## Usage

1. Start the server with `npm start`
2. Use [Insomnia](https://insomnia.rest/) or any other API client to interact with the API endpoints.

## API Endpoints

### Users

- `GET /api/users` - Retrieve all users
- `GET /api/users/:id` - Retrieve a single user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user by ID
- `DELETE /api/users/:id` - Delete a user by ID


### Thoughts

- `GET /api/thoughts` - Retrieve all thoughts
- `GET /api/thoughts/:id` - Retrieve a single thought by ID
- `POST /api/thoughts` - Create a new thought
- `PUT /api/thoughts/:id` - Update a thought by ID
- `DELETE /api/thoughts/:id` - Delete a thought by ID

## Walkthrough Video

[Link to the walkthrough video] 
1- part 1 - https://youtu.be/F-_OqLSTO7c
2- part 2- https://youtu.be/xCBymyZSL3Y

## Github Repo

https://github.com/laxsonii/wk18-Social-Network-API

## License

This project is licensed under the MIT License.
