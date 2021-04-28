const third = require('@monorepo/third');
const second = require('@monorepo/second');

const app = () => 'Hi from the app';

const main = () => {
  console.log(app());
  console.log(third());
  console.log(second());
};

main();

module.exports = { app, main };