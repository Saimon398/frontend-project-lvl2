#!/usr/bin/env/node
import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .name('genDiff')
  .version('1.0.0', '-v, --vers', 'output the current version')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  })
  .parse();
