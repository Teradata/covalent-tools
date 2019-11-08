# covalent cli

## Overview

CLI (Command Line Interface) for Covalent.

### Usage

To run the covalent tools cli do the following:

- `npm ci`
- `cd ./covalent-e2e-coverage`
- `npm ci`
- `cd ..`
- `npm run build:release`
- `npm install -g`

#### The following commands are available in the CLI

#### Help Usage

```
cov -h
  Usage: cov [options]

  Options:
    -v, --version     output the version number
    versions          output all the covalent versions in a npm project
    serve             starts the ng server
    serve-prod        starts the ng server with production flags
    e2e               runs the end to end tests against local code base
    e2e-for-coverage  runs the end to end tests against the e2e proxy
    test              runs the unit tests
    build             builds the application
    build-prod        builds the application with production flags
    lint              runs the linter
    start-e2e-proxy   start the e2e proxy
    gen-e2e-report    generates the e2e coverage report
    -h, --help        output usage information
```

### Commands

#### Versions

```
cov versions
```

- Prints out all versions numbers for Covalent CLI, Covalent Version, Angular, Angular Material Version, and Angular CLI for the directory you are currently in

#### ng Commands

```
cov serve
```

- Starts up the ng server with needed flags
- Same as `node --max_old_space_size=8192 ./node_modules/.bin/ng serve --proxy-config proxy.conf.js --sourceMap=true`

```
cov serve-prod
```

- Starts the ng server with flags needed to run e2e coverage
- Same as `node --max_old_space_size=8192 ./node_modules/.bin/ng serve --proxy-config proxy.conf.js --sourceMap=true --aot --prod --optimization`

```
cov e2e
```

- Runs the end to end tests against local code base
- Same as `node --max_old_space_size=8192 ./node_modules/.bin/ng e2e`

```
cov e2e-for-coverage
```

- Runs the end to end tests against the e2e proxy
- Same as `node --max_old_space_size=8192 ./node_modules/.bin/ng e2e --baseUrl=http://localhost:5050 --devServerTarget=`

```
cov test
```

- Runs the unit tests
- Same as `node --max_old_space_size=8192 ./node_modules/.bin/ng test --sourceMap=false --code-coverage --watch=false`

```
cov build
```

- Compiles the code with needed flags
- Same as `node --max_old_space_size=8192 ./node_modules/.bin/ng build --sourceMap=false`

```
cov build-prod
```

- Compiles the code with needed flags
- Same as `node --max_old_space_size=8192 ./node_modules/.bin/ng build --sourceMap=false --aot --prod --optimization`

#### tslint

```
cov lint
```

- Run the linter on a code base
- Same as `tslint -c ./tslint.json ./src/**/*.ts -e ./src/**/typings.d.ts -e ./src/environments/**`

#### E2E Code Coverage

(For full instructions see here: [E2E Testing Coverage](../covalent-e2e-coverage/README.md))

```
cov start-e2e-proxy
```

- Starts the e2e coverage proxy

```
cov gen-e2e-report
```

- Generate the e2e coverage report

## MIT License

The MIT License (MIT)

Copyright (c) 2018 by Teradata. All rights reserved. http://teradata.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
