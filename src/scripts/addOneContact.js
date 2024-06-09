import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    // Читаємо вміст файлу db.json
    const dbRaw = await fs.readFile(PATH_DB);
    const db = JSON.parse(dbRaw);

    // Генеруємо один новий контакт
    const newContact = createFakeContact();

    // Додаємо новий контакт до існуючих
    const updatedContacts = [...db, newContact];

    // Записуємо оновлені контакти назад у файл db.json
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log('Successfully added one new contact to db.json');
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

await addOneContact();
