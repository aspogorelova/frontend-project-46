#!/usr/bin/env node

// const { Command } = require('commander');
import { Command } from 'commander';
const program = new Command();

program
  .name('gendiff [options]')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1');

program.parse();