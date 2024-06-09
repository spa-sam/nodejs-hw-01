import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    // Записуємо порожній масив у файл db.json
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));

    console.log('Successfully removed all contacts from db.json');
  } catch (error) {
    console.error('Error removing contacts from db.json:', error);
  }
};

await removeAllContacts();
