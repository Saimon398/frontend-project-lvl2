#!/usr/bin/env/node
import { program } from 'commander';


program
  .name('genDiff')
  .version('1.0.0', '-v, --vers', 'output the current version')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .parse();


