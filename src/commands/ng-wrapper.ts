import { iCommand } from './commands';
import { spawn } from 'child_process';
import * as fs from 'fs';
import { red, italic } from 'colors';
import { emoji } from 'node-emoji';
import Versions from './versions';
import { Utils } from '../utils/utils';

export default class NgWrapper implements iCommand {
  execute(commands: string[]) {
    new Versions().execute();
    Utils.log('Running Command:');
    Utils.log('ng ' + commands.join(' '), italic);
    const ng = spawn('ng', commands);

    ng.stdout.on('data', data => {
      Utils.log(`${data}`);
    });

    ng.stderr.on('data', data => {
      Utils.log(`${data}`);
    });
    Utils.log('');
  }

  /*
  * Special case build to call node directly
  */
  nodeExec(commands: string[]) {
    new Versions().execute();
    Utils.log('Running Command:');
    Utils.log('node ' + commands.join(' '), italic);
    const node = spawn('node', commands);

    node.stdout.on('data', data => {
      Utils.log(`${data}`);
    });

    node.stderr.on('data', data => {
      Utils.log(`${data}`);
    });
    Utils.log('');
  }
}