#!/usr/bin/env node

// const { Command } = require('commander');
import { Command } from 'commander';
const program = new Command();

program
  .name('gendiff [options]')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1');

// program.command('compare')
//   .description('Compares two configuration files and shows a difference.')
//   .argument('<filepath1>', '<filepath2>')
//   .option('-V, --version', 'output the version number')
//   .option('-h, --help', 'display help for command')
  // .action((str, options) => {
  //   const limit = options.first ? 1 : undefined;
  //   console.log(str.split(options.separator, limit));
  // });

program.parse();