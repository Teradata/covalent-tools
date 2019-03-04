#!/usr/bin/env node

/*
 * Copyright (C) 2016-2018 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import * as program from 'commander';
import Versions from './commands/versions';
import StartE2EProxy from './commands/start-e2e-proxy';
import GenerateE2EReport from './commands/generate-e2e-report';
import NgWrapper from './commands/ng-wrapper';
import TsLintWrapper from './commands/tslint-wrapper';
import { Utils } from './utils/utils';
import { red } from 'colors';

program
  .version('1.0.0-alpha.1', '-v, --version')
  .option('versions', 'output all the covalent versions in a npm project')
  .option('serve', 'starts the ng server')
  .option('serve-prod', 'starts the ng server with production flags')
  .option('e2e', 'runs the end to end tests against local code base')
  .option('e2e-for-coverage', 'runs the end to end tests against the e2e proxy')
  .option('test', 'runs the unit tests')
  .option('build', 'builds the application')
  .option('build-prod', 'builds the application with production flags')
  .option('lint', 'runs the linter')
  .option('start-e2e-proxy', 'start the e2e proxy')
  .option('gen-e2e-report', 'generates the e2e coverage report')
  .parse(process.argv);

if (program.versions) {
  new Versions().execute();
} else if (program.serve) {
  new NgWrapper().execute(['serve', '--proxy-config', 'proxy.conf.js', '--sourceMap=true']);
} else if (program.serveProd) {
  new NgWrapper().execute(['serve', '--proxy-config', 'proxy.conf.js', '--sourceMap=true', '--aot', '--prod', '--optimization']);
} else if (program.e2e) {
  new NgWrapper().execute(['e2e']);
} else if (program.e2eForCoverage) {
  new NgWrapper().execute(['e2e', '--baseUrl=http://localhost:5050', '--devServerTarget=']);
} else if (program.test) {
  new NgWrapper().execute(['test', '--sourceMap=false', '--code-coverage', '--watch=false']);
} else if (program.build) {
  new NgWrapper().execute(['build', '--sourceMap=false']);
} else if (program.buildProd) {
  new NgWrapper().execute(['build', '--sourceMap=false', '--aot', '--prod', '--optimization']);
} else if (program.lint) {
  new TsLintWrapper().execute(['-c', './tslint.json', './src/**/*.ts', '-e', './src/**/typings.d.ts', '-e', './src/environments/**']);
} else if (program.startE2eProxy) {
  new StartE2EProxy().execute();
} else if (program.genE2eReport) {
  new GenerateE2EReport().execute();
} else {
  Utils.log('Invalid command.', red);
  program.outputHelp();
}
