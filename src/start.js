import os from 'os';
import readline from 'readline';
import { Welcome, userName } from './functions/welcome.js';
import { printList } from './functions/ls.js';
import { readFile } from './functions/fs/readfile.js';
import { createFile } from './functions/fs/createFile.js';
import { renameFile } from './functions/fs/renameFile.js';
import { copyFile } from './functions/fs/copyFile.js';
import { deleteFile } from './functions/fs/deleteFile.js';
import { moveFile } from './functions/moveFile.js';
import { osData } from './functions/os.js';
import { calcHash } from './functions/hash.js';
import { compressFile } from './functions/compress.js';
import { decompressFile } from './functions/decompress.js';
import { currentDir, upperDir } from './functions/directory.js';

process.chdir(os.homedir());
let dir = process.cwd();
Welcome();
console.log(`You are currently in ${dir}\n`);

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.on('close', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!\n`);
  process.exit();
});

readLine.on('line', async (command) => {
const args = [];
let current = command;

if (current.trim() !== '' && current !== '"') {
  args.push(current.trim());
}

const commandName = args[0];
switch (commandName) {
  case 'cd':
    if (args.length === 2) {
      currentDir(args[1]);
      dir = process.cwd();
    } else {
      console.error('Invalid input.\n');
    }
    break;

  case 'up':
    if (args.length === 1) {
      upperDir();
      dir = process.cwd();
    } else {
      console.error('Invalid input.\n');
    }
      break;

  case 'ls':
    if (args.length === 1) {
      await printList(dir);
    } else {
      console.error('Invalid input.\n');
    }
      break;

  case 'cat':
      if (args.length === 2) {
        await readFile(args[1]);
      } else {
        console.error('Invalid input.\n');
      }
      break;
  
   case 'add':
      if (args.length === 2) {
        await createFile(args[1]);
      } else {
        console.error('Invalid input.\n');
      }
      break;   
      
    case 'rn':
      if (args.length === 3) {
        await renameFile(args[1], args[2]);
      } else {
        console.error('Invalid input.\n');
      }
      break;    

    case 'cp':
      if (args.length === 3) {
        await copyFile(args[1], args[2]);
      } else {
        console.error('Invalid input.\n');
      }
      break;

    case 'rm':
      if (args.length === 2) {
        await deleteFile(args[1]);
      } else {
        console.error('Invalid input.\n');
      }
      break;

    case 'mv':
      if (args.length === 3) {
        await moveFile(args[1], args[2]);
      } else {
        console.error('Invalid input.\n');
      }
      break;

    case 'os':
      if (args.length === 2) {
        await osData(args[1]);
      } else {
        console.error('Invalid input.\n');
      }
      break;

    case 'hash':
      if (args.length === 2) {
        await calcHash(args[1]);
      } else {
        console.error('Invalid input.\n');
      }
      break;  

    case 'compress':
        if (args.length === 3) {
          await compressFile(args[1], args[2]);
        } else {
          console.error('Invalid input.\n');
        }
        break;

    case 'decompress':
      if (args.length === 3) {
        await decompressFile(args[1], args[2]);
      } else {
        console.error('Invalid input.\n');
      }
      break;   
      
    case '.exit':
      exit();
        break;

     default:
      console.error('Invalid input.\n');
  }
});