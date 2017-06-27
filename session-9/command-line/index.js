#!/usr/bin/env node
const program = require('yargs');

program
  .usage('$0 <cmd> [args]')
  .command('hello [name]', 'welcome ter yargs!', {
    name: {
      default: 'Nobody'
    }
  }, (argv) => {
    console.log('Hello', argv.name, 'welcome to yargs!');
  })
  .command('log [title]', 'loggin some title', {
    name: {
      default: 'LOG TITLE'
    }
  }, (argv) => {
    console.log('Logging', argv.title, 'to some external server');
  })
  .help()
  .argv;
