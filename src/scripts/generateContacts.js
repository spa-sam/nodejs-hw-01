import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    // Читаємо вміст файлу db.json
    const dbRaw = await fs.readFile(PATH_DB);
    const db = JSON.parse(dbRaw);

    // Генеруємо нові контакти
    const newContacts = Array.from({ length: number }, createFakeContact);

    // Додаємо нові контакти до існуючих
    const updatedContacts = [...db, ...newContacts];

    // Записуємо оновлені контакти назад у файл db.json
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log(
      `Successfully generated ${number} new contacts and added to db.json`,
    );
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

await generateContacts(5);
