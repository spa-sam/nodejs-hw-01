import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    // Читаємо вміст файлу db.json
    const dbRaw = await fs.readFile(PATH_DB);
    const db = JSON.parse(dbRaw);

    return db;
  } catch (error) {
    console.error('Error reading contacts from db.json:', error);
    return [];
  }
};

console.log(await getAllContacts());
