#!/usr/bin/env node
const program = require('yargs');

program
  .usage('$0 <cmd> [args]')
  .command('name [name]', 'welcome ter yargs!', {
    name: {
      default: 'Nobody'
    }
  }, (argv) => {
    console.log('Hello', argv.name, 'welcome to yargs!');
  })
  .help()
  .argv;
