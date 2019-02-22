import { iCommand } from './commands';
import { spawn } from 'child_process';
import * as fs from 'fs';
import { red, italic } from 'colors';
import { emoji } from 'node-emoji';
import Versions from './versions';
import { Utils } from '../utils/utils';

const INC_MEM_FLAG = '--max_old_space_size=8192';

export default class NgWrapper implements iCommand {
  execute(commands: string[]) {
    new Versions().execute();
    Utils.log('Running Command:');
    Utils.log(`${INC_MEM_FLAG} ./node_modules/.bin/ng ${commands.join(' ')}`, italic);
    const ng = spawn('node', [INC_MEM_FLAG, './node_modules/.bin/ng', ...commands]);

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
