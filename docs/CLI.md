# covalent cli

## Overview

CLI (Command Line Interface) for Covalent.


### Usage

To run the covalent tools cli do the following:

* Clone this repository
* npm i
* npm run build
* npm install -g

#### The following commands are available in the CLI

##### Help Usage
```
cov -h
  Usage: cov [options]


  Options:

    -V, --version           output the version number
    -v, --all-versions      output the version information
    -g, --gen-e2e-report    generate the e2e coverage report
    -s, --start-e2e-proxy   start the e2e proxy
    -e, --e2e-for-coverage  runs the end to end tests against the e2e proxy
    serve                   starts the ng server
    serve-e2e               starts the ng server with flags needed to run e2e coverage
    e2e                     runs the end to end tests against local code base
    lint                    runs the linter
    test                    runs the unit tests
    build                   builds the code
    -h, --help              output usage information
```

##### Versions
* Prints out all versions numbers for Covalent CLI, Covalent Version, Angular, Angular Material Version, and Angular CLI for the directory you are currently in
```
cov -v
```

##### ng Commands
* Same as `ng serve --proxy-config proxy.conf.json`
```
cov serve
```

* Starts the ng server with flags needed to run e2e coverage
Same as `node --max_old_space_size=5048 ./node_modules/.bin/ng serve --aot --prod --sourcemap=true --build-optimizer --proxy-config proxy.conf.json`
```
cov serve-e2e
```

* Runs the end to end tests against local code base. Same as `ng e2e --config --proxy-config e2e/proxy.conf.json`
```
cov e2e
```

* Runs the end to end tests against the e2e proxy. Same as `ng e2e -pc proxy.conf.json --no-serve --base-href=http://localhost:5050`
```
cov -e
or
cov --e2e-for-coverage
```

* Same as `ng test --code-coverage --single-run --sourcemap=false`
```
cov test
```

* Same as `node --max_old_space_size=8192 ./node_modules/.bin/ng build --aot --prod --sourcemap=false`

```
cov build
```

##### tslint
* Same as `tslint -c ./tslint.json ./src/**/*.ts -e ./src/**/typings.d.ts -e ./src/environments/**`
```
cov lint
```

##### E2E Code Coverage
* Starts the e2e coverage proxy (Also see here: [E2E Testing Coverage](../covalent-e2e-coverage))
```
cov -s
or
cov --start-e2e-proxy
```

* Generate the e2e coverage report (Also see here: [E2E Testing Coverage](../covalent-e2e-coverage))
```
cov -g
or
cov --gen-e2e-report
```


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


