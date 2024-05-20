import { Contact } from '../models/contact';
import { readContacts, writeContacts } from '../data/dataStore';

/**
 * Retrieves all contacts.
 * @returns {Contact[]} Array of all contacts.
 */
function getAllContacts(): Contact[] {
  return readContacts();
}

/**
 * Retrieves a contact by ID.
 * @param {number} id - The ID of the contact to retrieve.
 * @returns {Contact | undefined} The contact, if found; otherwise, undefined.
 */
function getContactById(id: number): Contact | undefined {
  const contacts = readContacts();
  return contacts.find(contact => contact.id === id);
}

/**
 * Creates a new contact.
 * @param {Omit<Contact, 'id'>} contactData - The data for the new contact excluding the id.
 * @returns {Contact} The newly created contact.
 */
function createContact(contactData: Omit<Contact, 'id'>): Contact {
  const contacts = readContacts();
  const newContact: Contact = { id: contacts.length + 1, ...contactData };
  contacts.push(newContact);
  writeContacts(contacts);
  return newContact;
}

/**
 * Updates an existing contact.
 * @param {number} id - The ID of the contact to update.
 * @param {Partial<Contact>} contactData - The data to update the contact with.
 * @returns {Contact | null} The updated contact, or null if no contact was found.
 */
function updateContact(id: number, contactData: Partial<Contact>): Contact | null {
  const contacts = readContacts();
  const index = contacts.findIndex(contact => contact.id === id);
  if (index === -1) return null;

  const updatedContact = { ...contacts[index], ...contactData };
  contacts[index] = updatedContact;
  writeContacts(contacts);
  return updatedContact;
}

/**
 * Deletes a contact by ID.
 * @param {number} id - The ID of the contact to delete.
 * @returns {boolean} True if the contact was deleted, false otherwise.
 */
function deleteContact(id: number): boolean {
  let contacts = readContacts();
  const originalLength = contacts.length;
  contacts = contacts.filter(contact => contact.id !== id);
  writeContacts(contacts);
  return contacts.length < originalLength;
}

export { getAllContacts, getContactById, createContact, updateContact, deleteContact };
