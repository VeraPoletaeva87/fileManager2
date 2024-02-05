let userName = '';
const Welcome = () => {
  const params = process.argv.slice(2).toString();
  let userNameIndex = params.indexOf('--username=');
  if (userNameIndex !== -1) {
    userName = params.substring(userNameIndex + 11, params.length);
    console.log(`Welcome to the File Manager, ${userName}!\n`);
  } else {
    console.error('Invalid username\n');
    process.exit();
  }
};
export { Welcome, userName };