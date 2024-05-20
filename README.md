# Contact API

This project is a RESTful API for managing contacts, built with Node.js and Express. It allows users to create, retrieve, update, and delete contact information in a simple JSON file.

Most of this code was generated by ChatGPT 3.5, guided and corrected by me with specific steps in this order:

- Setup enviroment and install important dependencies chosen by me such as: 
    - Node Js version 18
    - ExpressJS as a framework
    - Jest as a Unit Test library
    - Typescript as Language
- Create local model for contacts with id, first name, last name and email as fields
- Create local Database read and write functions on a json file called contacts.json
- Create app server and API Endpoints as requested:
    - /contacts Create a new contact
    - /contacts/:id Retrieve a contact by Id
    - /contacts/:id Update contact details
    - /contacts/:id Delete a contact
- Configure Jest and a local test database for Unit Testing for each endpoint
- Create test cases for the endpoints
- Help with the Markdown code needed for the Readme

Total time it took me to develop this simple API was around 2 hours.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v18.x)
- npm (or yarn)
- Postman or Curl

## Installation

Follow these steps to get your development environment set up:

1. **Clone the repository**
```bash
   git clone https://github.com/luiscarlo6/accel-one-contacts-api
   cd accel-one-contacts-api
```
2. Install dependencies
```bash
   npm install
```
2. Start the development server
```bash
   npm run dev
```
This will start the server on http://localhost:3000, where the API can be accessed and tested via tools like Postman or directly from the browser for GET requests.

## Usage

Here are some example requests you can make to the API:

- **Create a contact**
```bash
  curl -X POST http://localhost:3000/contacts -H 'Content-Type: application/json' -d '{"firstName": "John", "lastName": "Doe", "email": "john.doe@example.com"}'
```
- **Get a contact**
```bash
  curl http://localhost:3000/contacts/1
```
- **Update a contact**
```bash
  curl -X PUT http://localhost:3000/contacts/1 -H 'Content-Type: application/json' -d '{"firstName": "Jane"}'
```
- **Delete a contact**
```bash
  curl -X DELETE http://localhost:3000/contacts/1
```

### Using the API with Postman

1. **Import the API Collection**:
   - Download the Postman collection from [here](https://raw.githubusercontent.com/luiscarlo6/accel-one-contacts-api/main/Contacts.postman_collection.json).
   - Open Postman, click on 'Import' > 'Upload Files' and select the downloaded collection file.
2. **Make Requests**:
   - Select the appropriate request from the collection.
   - Modify the request body or parameters as needed.
   - Hit 'Send' to see the response from the API.

## Testing 
```bash
  npm test
```

## License
Distributed under the MIT License. 