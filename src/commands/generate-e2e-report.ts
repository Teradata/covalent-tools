import { iCommand } from './commands';
import { spawn } from 'child_process';
import { Utils } from '../utils/utils';

export default class GenerateE2EReport implements iCommand {
  execute() {
    const install = spawn('npm', ['install', '--prefix', __dirname + '/../../covalent-e2e-coverage']);

    install.stdout.on('data', (data) => {
      Utils.log(`${data}`);
    });

    install.stderr.on('data', (data) => {
      Utils.log(`${data}`);
    });

    install.on('close', (code) => {
      const start = spawn('npm', ['run', 'genreport', '--prefix', __dirname + '/../../covalent-e2e-coverage']);
      start.stdout.on('data', (data) => {
        Utils.log(`${data}`);
      });

      start.stderr.on('data', (data) => {
        Utils.log(`${data}`);
      });
    });
  }
}
