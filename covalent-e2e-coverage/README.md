# covalent-e2e-coverage

> Code coverage proxy


## Overview

Code Coverage Proxy built off of `was-tested` and `remap-istanbul`.  The `was-tested` code coverage proxy was built for vanilla javascript source files.  Covalent-e2e-coverage uses the `remap-istanbul` package to utilize the source map files and to instrument coverage when using Typescript files as well.

The [remap-istanbul](https://github.com/SitePen/remap-istanbul) github repository.

The [was-tested](https://github.com/bahmutov/was-tested) github repository.

Read the [was-tested Code coverage proxy](https://glebbahmutov.com/blog/code-coverage-proxy/) blog post.

![overview](https://raw.githubusercontent.com/Teradata/covalent-tools/develop/covalent-e2e-coverage/images/was-tested-overview.png)


### Usage

To instrument e2e coverage for a Typescript project do the following:

* Clone this repository
* npm i
* npm run build
* npm install -g
* Startup the covalent-e2e-coverage proxy in this repo by running:
```
cov -s
or
cov --start-e2e-proxy
```
* Checkout another repo that has e2e tests in it in a new command prompt
* cd to that directory
* Start the ng server with the needed flags by running command:
```
cov serve-e2e
```

* Open another command prompt and cd again to the directory that has the e2e tests in it
* Run the e2e tests with needed flags by running command:
```
cov -e
or
cov --e2e-for-coverage
```

* Open another command prompt and generate the coverage report with the command:
```
cov -g
or
cov --gen-e2e-report
```

* In the browser go to: http://localhost:5050/__report/
* See Coverage Report
* Click down into links and see Typescript files

## MIT License

The MIT License (MIT)

Copyright (c) 2014 Gleb Bahmutov

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


