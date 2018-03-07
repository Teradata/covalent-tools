import { iCommand } from './commands';
import { spawn } from 'child_process';
import * as fs from 'fs';
import { red, italic } from 'colors';
import { emoji } from 'node-emoji';
import Versions from './versions';
import { Utils } from '../utils/utils';

export default class TsLintWrapper implements iCommand {
  execute(commands: string[]) {
    new Versions().execute();
    Utils.log('Running Command:');
    Utils.log('tslint ' + commands.join(' '), italic);
    const tslint = spawn('tslint', commands);

    tslint.stdout.on('data', data => {
      Utils.log(`${data}`);
    });

    tslint.stderr.on('data', data => {
      Utils.log(`${data}`);
    });
    Utils.log('');
  }
}