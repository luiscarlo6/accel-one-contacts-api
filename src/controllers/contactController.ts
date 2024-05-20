import { Request, Response } from 'express';
import { createContact, deleteContact, getContactById, updateContact, getAllContacts } from '../services/contactService';



/**
 * Handles retrieving all contacts
 * Retrieves all the contacts.
 * @param {Request} req - The request object containing the ID of the contact.
 * @param {Response} res - The response object used to send back the found contact.
 */
export const handleGetAllContacts = (req: Request, res: Response) => {
    const contact = getAllContacts();
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
  };

/**
 * Handles creating a new contact.
 * Takes contact data from the request body and passes it to the service to create a contact.
 * @param {Request} req - The request object containing the contact data.
 * @param {Response} res - The response object used to send back the created contact.
 */
export const handleCreateContact = (req: Request, res: Response) => {
  try {
    const newContact = createContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Handles retrieving a contact by its ID.
 * Extracts the ID from the request parameters and retrieves the corresponding contact.
 * @param {Request} req - The request object containing the ID of the contact.
 * @param {Response} res - The response object used to send back the found contact.
 */
export const handleGetContact = (req: Request, res: Response) => {
  const contact = getContactById(parseInt(req.params.id));
  if (!contact) {
    return res.status(404).json({ error: 'Contact not found' });
  }
  res.json(contact);
};

/**
 * Handles updating an existing contact.
 * Extracts contact ID and updates from the request, and updates the contact if found.
 * @param {Request} req - The request object containing the updated data.
 * @param {Response} res - The response object used to send back the updated contact.
 */
export const handleUpdateContact = (req: Request, res: Response) => {
  const updatedContact = updateContact(parseInt(req.params.id), req.body);
  if (!updatedContact) {
    return res.status(404).json({ error: 'Contact not found' });
  }
  res.json(updatedContact);
};

/**
 * Handles deleting a contact by its ID.
 * Extracts the ID from the request parameters and attempts to delete the corresponding contact.
 * @param {Request} req - The request object containing the ID of the contact.
 * @param {Response} res - The response object used to confirm deletion.
 */
export const handleDeleteContact = (req: Request, res: Response) => {
  const success = deleteContact(parseInt(req.params.id));
  if (!success) {
    return res.status(404).json({ error: 'Contact not found' });
  }
  res.status(204).send(); // Send No Content status without any content
};
