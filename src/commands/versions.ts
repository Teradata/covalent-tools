import { iCommand } from './commands';
import { red, blue } from 'colors';
import { emoji } from 'node-emoji';
import { Utils } from '../utils/utils';

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
    Utils.log(this.logo, red);
    let localPackageJson: any = require(process.cwd() + '/package.json');
    let cliPackageJson: any = require(__dirname + '/../../package.json');

    if (cliPackageJson && cliPackageJson.version) {
      Utils.log(emoji.heavy_check_mark + " Covalent CLI Version: " + cliPackageJson.version, blue);
    }
    if (localPackageJson && localPackageJson.dependencies) {
      if (localPackageJson.dependencies['@covalent/core']) {
        let covPackageJson: any = require(process.cwd() + '/node_modules/@covalent/core/package.json');
        if (covPackageJson && covPackageJson.version) {
          Utils.log(emoji.heavy_check_mark + " Covalent Version: " + covPackageJson.version, blue);
        }
      }
      if (localPackageJson.dependencies['@angular/core']) {
        let angPackageJson: any = require(process.cwd() + '/node_modules/@angular/core/package.json');
        if (angPackageJson && angPackageJson.version) {
          Utils.log(emoji.heavy_check_mark + " Angular Version: " + angPackageJson.version, blue);
        }
      }
      if (localPackageJson.dependencies['@angular/material']) {
        let matPackageJson: any = require(process.cwd() + '/node_modules/@angular/material/package.json');
        if (matPackageJson && matPackageJson.version) {
          Utils.log(emoji.heavy_check_mark + " Angular Material Version: " + matPackageJson.version, blue);
        }
      }
    }
    if (localPackageJson && localPackageJson.devDependencies) {
      if (localPackageJson.devDependencies['@angular/cli']) {
        let angCliPackageJson: any = require(process.cwd() + '/node_modules/@angular/cli/package.json');
        if (angCliPackageJson && angCliPackageJson.version) {
          Utils.log(emoji.heavy_check_mark + " Angular CLI Version: " + angCliPackageJson.version, blue);
        }
      }
    }
    Utils.log('');
  }
}