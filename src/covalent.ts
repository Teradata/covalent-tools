#!/usr/bin/env node

const argc = process.argv.splice(2);

if (argc.length != 1) {
  console.error(`Invalid number of arguments ${argc}`);
  process.exit(1);
}

const inputParameter = argc[0];

if (inputParameter === '-v') {

  const logo = `
                            *//                            
                        ,****/////,                        
                     ********/////////                     
                  *********     /////////                  
              *********.    *//    ./////////              
           *********     ****/////     /////////           
       *********,    ********////////*    */////////       
   .*********     ***********////////////     /////////.   
 ********,    ***************///////////////*    *///////* 
 ,****     **********  ******//////*  //////////     ////. 
 .****  *********          **///         .////////*  ////  
  ****  ,*****                   .******     /////.  ////  
  ****   ****                  ***********/  .////  .////  
  ****.  ****                  ****/**/////  .////  *////  
  ****,  ****                  ******//////  .////  /////  
  *****  ****                  ******//////  .////  /////  
  *****  ****                   .****////    .////  /////  
  *****  *******.           ***     *     ,///////  ////*  
  *****  ***********    ***********    ///////////  ////.  
  .****  ,***********  **********///  ///////////,  ////   
   ****  .***********  ******///////  ///////////   ////   
   ****   ***********  ******///////  ///////////  .////   
   ****   ***********   *****//////   ///////////  *////   
   ******    *********,    .*//     *////////*    //////   
   *********     *********       /////////     ////////,   
      ,********     *********./////////     ////////.      
          ********,    ******///////    *////////          
             *********    ***////    /////////             
                *********    .    ////////*                
                   ,********  .////////.                   
                       ******///////                       
                          ***////                                                                                 
                                                                                                      
`;

  console.log(logo);
  let localPackageJson: any = require(process.cwd() + '/package.json');
  let cliPackageJson: any = require(__dirname + '/../package.json');

  if (cliPackageJson && cliPackageJson.version) {
    console.log("Covalent CLI Version: " + cliPackageJson.version);
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