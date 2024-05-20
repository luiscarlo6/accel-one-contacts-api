/**
 * Represents a contact with personal information.
 * @interface
 * @property {number} id - The unique identifier for a contact.
 * @property {string} firstName - The first name of the contact.
 * @property {string} lastName - The last name of the contact.
 * @property {string} email - The email address of the contact.
 */
export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  }
  