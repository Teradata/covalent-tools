#!/usr/bin/env node
var argc = process.argv.splice(2);
if (argc.length != 1) {
    console.error("Invalid number of arguments " + argc);
    process.exit(1);
}
var inputParameter = argc[0];
if (inputParameter === '-v') {
    var logo = "\n                            *//                            \n                        ,****/////,                        \n                     ********/////////                     \n                  *********     /////////                  \n              *********.    *//    ./////////              \n           *********     ****/////     /////////           \n       *********,    ********////////*    */////////       \n   .*********     ***********////////////     /////////.   \n ********,    ***************///////////////*    *///////* \n ,****     **********  ******//////*  //////////     ////. \n .****  *********          **///         .////////*  ////  \n  ****  ,*****                   .******     /////.  ////  \n  ****   ****                  ***********/  .////  .////  \n  ****.  ****                  ****/**/////  .////  *////  \n  ****,  ****                  ******//////  .////  /////  \n  *****  ****                  ******//////  .////  /////  \n  *****  ****                   .****////    .////  /////  \n  *****  *******.           ***     *     ,///////  ////*  \n  *****  ***********    ***********    ///////////  ////.  \n  .****  ,***********  **********///  ///////////,  ////   \n   ****  .***********  ******///////  ///////////   ////   \n   ****   ***********  ******///////  ///////////  .////   \n   ****   ***********   *****//////   ///////////  *////   \n   ******    *********,    .*//     *////////*    //////   \n   *********     *********       /////////     ////////,   \n      ,********     *********./////////     ////////.      \n          ********,    ******///////    *////////          \n             *********    ***////    /////////             \n                *********    .    ////////*                \n                   ,********  .////////.                   \n                       ******///////                       \n                          ***////                                                                                 \n                                                                                                      \n";
    console.log(logo);
    var localPackageJson = require(process.cwd() + '/package.json');
    var cliPackageJson = require(__dirname + '/../package.json');
    if (cliPackageJson && cliPackageJson.version) {
        console.log("Covalent Tools Version: " + cliPackageJson.version);
    }
    if (localPackageJson && localPackageJson.dependencies) {
        if (localPackageJson.dependencies['@covalent/core']) {
            console.log("Covalent Version: " + localPackageJson.dependencies["@covalent/core"]);
        }
        if (localPackageJson.dependencies['@angular/core']) {
            console.log("Angular Version: " + localPackageJson.dependencies["@angular/core"]);
        }
        if (localPackageJson.dependencies['@angular/material']) {
            console.log("Angular Material Version: " + localPackageJson.dependencies["@angular/material"]);
        }
    }
    if (localPackageJson && localPackageJson.devDependencies) {
        if (localPackageJson.devDependencies['@angular/cli']) {
            console.log("Angular CLI Version: " + localPackageJson.devDependencies["@angular/cli"]);
        }
    }
    console.log("");
}
//# sourceMappingURL=covalent.js.map