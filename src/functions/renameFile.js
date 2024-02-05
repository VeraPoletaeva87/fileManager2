import path from 'path';
import fs from 'fs/promises';

const renameFile = async (oldName, newName) => {
  try {
    const file = path.resolve(oldName);
    const dir = path.dirname(file);
    await fs.rename(file, path.resolve(dir, newName));
    console.log(`You are currently in ${process.cwd()}\n`);
  } catch (error) {
    console.log('Operation failed');
    console.log(`You are currently in ${process.cwd()}\n`);
  }
};

export { renameFile };