import fs from 'fs';
import path from 'path';

const readFile = async (file) => {
    try {
        const filePath = path.resolve(file);
        const stream = fs.createReadStream(filePath);
        await new Promise((resolve, reject) => {
            stream.on('data', (data) => {
            process.stdout.write(data);
          });
    
          stream.on('end', () => {
            process.stdout.write(`\n`);
            resolve();
          });
    
          stream.on('error', () => {
            console.error('Operation failed');
            reject();
          });
        });
        console.log(`You are currently in ${process.cwd()}\n`);
      } catch (error) {
      }
};

export { readFile };