import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { handleGetAllContacts, handleCreateContact, handleGetContact, handleUpdateContact, handleDeleteContact } from './controllers/contactController';

// Create a new express application instance
const app: Application = express();
const port: number = 3000; // Port the server will listen on

// Middleware to parse the body of HTTP requests
app.use(bodyParser.json());

// Route definitions
app.get('/contacts', handleGetAllContacts); // Retrieve all contacts
app.post('/contacts', handleCreateContact); // Create a new contact
app.get('/contacts/:id', handleGetContact); // Retrieve a contact by ID
app.put('/contacts/:id', handleUpdateContact); // Update a contact by ID
app.delete('/contacts/:id', handleDeleteContact); // Delete a contact by ID

// Default route for testing if the server is up
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Contact Management API!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: Function) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app