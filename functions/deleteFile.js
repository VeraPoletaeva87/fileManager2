import fs from 'fs/promises';

const deleteFile = async (file) => {
  try {
    await fs.unlink(file);
    console.log(`You are currently in ${process.cwd()}\n`);
  } catch (error) {
    console.error('Operation failed');
    console.log(`You are currently in ${process.cwd()}\n`);
  }
};

export { deleteFile };