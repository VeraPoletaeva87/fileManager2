import fs from 'fs/promises';

const createFile = async (fileName) => {
  try {
    await fs.open(fileName, 'w');
    console.log(`You are currently in ${process.cwd()}\n`);
  } catch (error) {
    console.error('Operation failed');
    console.log(`You are currently in ${process.cwd()}\n`);
  }
};

export { createFile };