import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    // Читаємо вміст файлу db.json
    const dbRaw = await fs.readFile(PATH_DB);
    const db = JSON.parse(dbRaw);

    // Проходимось по кожному контакту і з вірогідністю 50% видаляємо його
    const updatedContacts = db.filter(() => Math.random() > 0.5);

    // Записуємо оновлений масив контактів у файл db.json
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log(
      'Thanos has snapped his fingers. Approximately half of the contacts have been removed from db.json',
    );
  } catch (error) {
    console.error('Error removing contacts from db.json:', error);
  }
};

await thanos();
