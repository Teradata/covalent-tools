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

program
  .version('1.0.0-alpha.1', '-v, --version')
  .option('versions', 'output all the covalent versions in a npm project')
  .option('gen-e2e-report', 'generate the e2e coverage report')
  .option('start-e2e-proxy', 'start the e2e proxy')
  .option('e2e-for-coverage', 'runs the end to end tests against the e2e proxy')
  .option('serve', 'starts the ng server')
  .option('serve-e2e', 'starts the ng server with flags needed to run e2e coverage')
  .option('e2e', 'runs the end to end tests against local code base')
  .option('lint', 'runs the linter')
  .option('test', 'runs the unit tests')
  .option('build', 'builds the code')
  .parse(process.argv);

if (program.versions) (new Versions()).execute();
if (program.genE2eReport) (new GenerateE2EReport()).execute();
if (program.startE2eProxy) (new StartE2EProxy()).execute();
if (program.serve) (new NgWrapper()).execute(['serve', '--proxy-config', 'proxy.conf.json']);
if (program.serveE2e) (new NgWrapper()).nodeExec(['--max_old_space_size=5048', './node_modules/.bin/ng', 'serve', '--aot', '--prod', '--sourcemap=true', '--build-optimizer', '--proxy-config', 'proxy.conf.json']);
if (program.e2eForCoverage) (new NgWrapper()).execute(['e2e', '-pc', 'proxy-conf.json', '--no-serve', '--base-href=http://localhost:5050']);
if (program.e2e) (new NgWrapper()).execute(['e2e', '--config', '--proxy-config', 'e2e/proxy.conf.json']);
if (program.test) (new NgWrapper()).execute(['test', '--code-coverage', '--single-run', '--sourcemap=false']);
if (program.build) (new NgWrapper()).nodeExec(['--max_old_space_size=8192', './node_modules/.bin/ng', 'build', '--aot', '--prod', '--sourcemap=false']);
if (program.lint) (new TsLintWrapper()).execute(['-c', './tslint.json', './src/**/*.ts', '-e', './src/**/typings.d.ts', '-e', './src/environments/**']);
