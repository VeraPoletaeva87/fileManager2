import fs from 'fs/promises';

const printList = async (directory) => {
  try {
    const entries = await fs.readdir(directory, { withFileTypes: true });
    console.table(
      entries.map((item) => ({
        Name: item.name,
        Type: item.isDirectory() ? 'directory' : 'file',
      }))
    );

    console.log(`You are currently in ${process.cwd()}\n`);
  } catch (error) {
    console.error('Operation failed');
  }
};

export { printList };