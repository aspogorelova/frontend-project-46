#!/usr/bin / env node

const { Command } = require('commander');
const program = new Command();

program
  .name('gendiff')
  .description('CLI to some JavaScript string utilities')
  .version('');

program.command('options')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'display help for command');
  // .action((str, options) => {
  //   const limit = options.first ? 1 : undefined;
  //   console.log(str.split(options.separator, limit));
  // });

program.parse();