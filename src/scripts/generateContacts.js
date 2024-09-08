import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContact = [];
  for (let i = 0; i < number; i++) {
    const contact = await createFakeContact();
    newContact.push(contact);
  }
  const addContact = contacts.concat(newContact);
  writeContacts(addContact);
};

generateContacts(5);
