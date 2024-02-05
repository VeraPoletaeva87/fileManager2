import os from 'os';

const osData = async (arg) => {
  try {
    switch (arg) {
      case '--EOL':
        console.log('default system End-Of-Line:' + ' ' + JSON.stringify(os.EOL) + ' ' + '\n');
        console.log('You are currently in ' + process.cwd() + '\n');
        break;

      case '--cpus':
        const cpus = os.cpus();
        console.log('overall amount of CPUS: ' + ' ' + cpus.length);
        console.table(
          cpus.map((item) => ({'CPU model': item.model, 'clock rate (in GHz)': (item.speed / 1000)})));
          console.log('You are currently in ' + process.cwd() + '\n');
        break;

      case '--homedir':
        console.log('Home directory:' + ' ' + os.homedir() + '\n');
        console.log('You are currently in ' + process.cwd() + '\n');
        break;

      case '--username':
        console.log('current system user name:' + ' ' + os.userInfo().username + '\n');
        console.log('You are currently in ' + process.cwd() + '\n');
        break;

      case '--architecture':
        console.log('CPU architecture:' + ' ' + os.arch() + '\n');
        console.log('You are currently in ' + process.cwd() + '\n');
        break;

      default:
        console.log('Invalid input.\n');
    }

  } catch (error) {
    console.log('Operation failed');
    console.log(`You are currently in ${process.cwd()}\n`);
  }
};
export { osData };