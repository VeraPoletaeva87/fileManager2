import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const compressFile = async (source, destination) => {
  try {
    const oldName = path.resolve(source);
    const fileName = path.basename(oldName);
    const newName = path.resolve(destination, `${fileName}.br`);
    const readStream = fs.createReadStream(oldName);
    readStream.on('error', () => {
        console.error('Operation failed');
    });
    const writeStream = fs.createWriteStream(newName);
    writeStream.on('error', () => {
        console.error('Operation failed');
    });
    const brotli = zlib.createBrotliCompress();
    readStream.pipe(brotli).pipe(writeStream);
    console.log(`You are currently in ${process.cwd()}\n`);

  } catch (error) {
    console.error('Operation failed');
    console.log(`You are currently in ${process.cwd()}\n`);
  }
};

export { compressFile };