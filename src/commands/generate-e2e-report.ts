/*
 * Copyright (C) 2016-2018 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { iCommand } from './commands';
import { spawn } from 'child_process';

export default class GenerateE2EReport implements iCommand {
  execute() {
    const install = spawn('npm', ['install', '--prefix', __dirname + '/../../covalent-e2e-coverage']);

    install.stdout.on('data', data => {
      console.log(`${data}`);
    });

    install.stderr.on('data', data => {
      console.log(`${data}`);
    });

    install.on('close', code => {
      const start = spawn('npm', ['run', 'genreport', '--prefix', __dirname + '/../../covalent-e2e-coverage']);
      start.stdout.on('data', data => {
        console.log(`${data}`);
      });

      start.stderr.on('data', data => {
        console.log(`${data}`);
      });
    });
  }
}