import fs from 'fs/promises';

const printList = async (directory) => {
  try {
    const entries = await fs.readdir(directory, { withFileTypes: true });
    const folders = entries.filter((file) => file.isDirectory());
    const files = entries.filter((file) => file.isFile());

    const list = folders.concat(files);
    console.table(
      list.map((item) => ({
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