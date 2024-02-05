import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const decompressFile = async (source, destination) => {
  try {
    const oldName = path.resolve(source);
    const extension = path.extname(source);
    const fileName = path.basename(source, extension);
    const newName = path.resolve(destination, `${fileName}`);
    const readStream = fs.createReadStream(oldName);
    readStream.on('error', () => {
        console.error('Operation failed');
    });
    const writeStream = fs.createWriteStream(newName);
    writeStream.on('error', () => {
        console.error('Operation failed');
    });
    const brotli = zlib.createBrotliDecompress();
    readStream.pipe(brotli).pipe(writeStream);
    console.log(`You are currently in ${process.cwd()}\n`);

  } catch (error) {
    console.error('Operation failed');
  }
};

export { decompressFile };