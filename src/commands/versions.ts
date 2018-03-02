/*
 * Copyright (C) 2016-2018 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { red, blue } from 'colors';
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
    console.log(red(this.logo));
    let localPackageJson: any = require(process.cwd() + '/package.json');
    let cliPackageJson: any = require(__dirname + '/../../package.json');

    if (cliPackageJson && cliPackageJson.version) {
      console.log(blue("Covalent CLI Version: " + cliPackageJson.version));
    }
    if (localPackageJson && localPackageJson.dependencies) {
      if (localPackageJson.dependencies['@covalent/core']) {
        console.log(blue("Covalent Version: " + localPackageJson.dependencies["@covalent/core"]));
      }
      if (localPackageJson.dependencies['@angular/core']) {
        console.log(blue("Angular Version: " + localPackageJson.dependencies["@angular/core"]));
      }
      if (localPackageJson.dependencies['@angular/material']) {
        console.log(blue("Angular Material Version: " + localPackageJson.dependencies["@angular/material"]));
      }
    }
    if (localPackageJson && localPackageJson.devDependencies) {
      if (localPackageJson.devDependencies['@angular/cli']) {
        console.log(blue("Angular CLI Version: " + localPackageJson.devDependencies["@angular/cli"]));
      }
    }
  }
}