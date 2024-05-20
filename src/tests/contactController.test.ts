import request from 'supertest';
import app from '../app'; // Import your Express application
import { writeContacts } from '../data/dataStore';

// Sample data to start with
const initialData = [
    { id: 1, firstName: "Alice", lastName: "Johnson", email: "alice@example.com" },
    { id: 2, firstName: "Bob", lastName: "Smith", email: "bob@example.com" }
  ];

describe('Contact API', () => {
    
    beforeEach(() => {
        // Initialize the data store with some known values before each test
        writeContacts(initialData);
    });
    
    afterEach(() => {
        // Optionally clean up or reset the data store after each test
        writeContacts([]);
    });

    describe('POST /contacts', () => {
        it('should create a new contact and return 201 status', async () => {
        const contactData = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' };
        const response = await request(app)
            .post('/contacts')
            .send(contactData)
            .expect(201);
        expect(response.body).toMatchObject({id: expect.any(Number), ...contactData});
        });
    });

  describe('GET /contacts/:id', () => {
    it('should retrieve a contact and return 200 status', async () => {
      const response = await request(app)
        .get('/contacts/1') // assuming a contact with ID 1 exists
        .expect(200);
      
      expect(response.body).toHaveProperty('id', 1);
      expect(response.body).toHaveProperty('firstName', 'Alice');
      expect(response.body).toHaveProperty('lastName', 'Johnson');
      expect(response.body).toHaveProperty('email','alice@example.com');
    });

    it('should return 404 for a non-existent contact', async () => {
      await request(app)
        .get('/contacts/999')
        .expect(404);
    });
  });

  describe('PUT /contacts/:id', () => {
    it('should update a contact and return 200 status', async () => {
      const contactData = { firstName: "Jane", lastName: "Jackson", email: "jane@example.com" };
      const response = await request(app)
        .put('/contacts/1') // assuming a contact with ID 1 exists
        .send(contactData)
        .expect(200);
      
      expect(response.body).toMatchObject(contactData);
    });
  });

  describe('DELETE /contacts/:id', () => {
    it('should delete a contact and return 204 status', async () => {
      await request(app)
        .delete('/contacts/2') // assuming a contact with ID 1 exists
        .expect(204);
    });
  });
});
