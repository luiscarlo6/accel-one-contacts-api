import { Contact } from '../models/contact';
import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, process.env.NODE_ENV === 'test' ? 'contacts.test.json' : 'contacts.json');


/**
 * Reads contacts from the JSON file.
 * @returns {Contact[]} An array of contacts.
 */
function readContacts(): Contact[] {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

/**
 * Writes contacts to the JSON file.
 * @param {Contact[]} contacts - An array of contacts to write.
 */
function writeContacts(contacts: Contact[]): void {
  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
}

export { readContacts, writeContacts };
