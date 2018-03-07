#!/usr/bin/env node

/*
 * Copyright (C) 2016-2018 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import * as program from 'commander';
import Versions from './commands/versions';
import StartE2EProxy from './commands/start-e2e-proxy';
import GenerateE2EReport from './commands/generate-e2e-report';

program
  .version('0.0.1')
  .option('-v, --all-versions', 'output the version information')
  .option('-g, --gen-e2e-report', 'generate the e2e coverage report')
  .option('-s, --start-e2e-proxy', 'start the e2e proxy')
  .parse(process.argv);

if (program.allVersions) (new Versions()).execute();
if (program.genE2eReport) (new GenerateE2EReport()).execute();
if (program.startE2eProxy) (new StartE2EProxy()).execute();
