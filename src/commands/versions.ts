/*
 * Copyright (C) 2016-2018 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { iCommand } from './commands';

export default class Versions implements iCommand {
  private logo = `
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
  execute() {
    console.log(this.logo);
    let localPackageJson: any = require(process.cwd() + '/package.json');
    let cliPackageJson: any = require(__dirname + '/../../package.json');

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
  }
}