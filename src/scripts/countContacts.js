import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    // Читаємо вміст файлу db.json
    const dbRaw = await fs.readFile(PATH_DB);
    const db = JSON.parse(dbRaw);

    // Повертаємо кількість контактів
    return db.length;
  } catch (error) {
    console.error('Error counting contacts from db.json:', error);
    return 0;
  }
};

console.log(await countContacts());
