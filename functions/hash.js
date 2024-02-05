import path from 'path';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calcHash = async (file) => {
  try {
    const fileName = path.resolve(file);
    const hash = createHash('sha256');
    const stream = createReadStream(fileName);
    stream.on('data', (data) => {
        hash.update(data);
    });
    stream.on('end', () => {
        console.log(hash.digest('hex') + '\n');
        console.log(`You are currently in ${process.cwd()}\n`);
    });
    stream.on('error', () => {
        console.error('Operation failed');
    });
  } catch (error) {}
};

export { calcHash };