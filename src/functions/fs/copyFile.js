import fs from 'fs';
import path from 'path';

const copyFile = async (source, destination) => {
  try {
    const oldName = path.resolve(source);
    const newName = path.resolve(destination, path.basename(oldName));
    const readStream = fs.createReadStream(oldName);
    readStream.on('error', () => {
        console.error('Operation failed');
    });
    const writeStream = fs.createWriteStream(newName);
    writeStream.on('error', () => {
        console.error('Operation failed');
    });
    readStream.pipe(writeStream);
    console.log(`You are currently in ${process.cwd()}\n`);
  } catch (error) {
    console.error('Operation failed');
    console.log(`You are currently in ${process.cwd()}\n`);
  }
};

export { copyFile };