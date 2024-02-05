const currentDir = async (directory) => {
    try {
      process.chdir(directory);
      console.log(`You are currently in ${process.cwd()}\n`);
    } catch (error) {
      console.error('Operation failed');
      console.log(`You are currently in ${process.cwd()}\n`);
    }
  };
  
  const upperDir = async () => {
    try {
      process.chdir('..');
      console.log(`You are currently in ${process.cwd()}\n`);
    } catch (error) {
      console.error('Operation failed');
      console.log(`You are currently in ${process.cwd()}\n`);
    }
  };
  
  export { currentDir, upperDir };