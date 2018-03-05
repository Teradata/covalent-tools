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
        Utils.log(emoji.heavy_check_mark + " Covalent Version: " + localPackageJson.dependencies["@covalent/core"], blue);
      }
      if (localPackageJson.dependencies['@angular/core']) {
        Utils.log(emoji.heavy_check_mark + " Angular Version: " + localPackageJson.dependencies["@angular/core"], blue);
      }
      if (localPackageJson.dependencies['@angular/material']) {
        Utils.log(emoji.heavy_check_mark + " Angular Material Version: " + localPackageJson.dependencies["@angular/material"], blue);
      }
    }
    if (localPackageJson && localPackageJson.devDependencies) {
      if (localPackageJson.devDependencies['@angular/cli']) {
        Utils.log(emoji.heavy_check_mark + " Angular CLI Version: " + localPackageJson.devDependencies["@angular/cli"], blue);
      }
    }
    Utils.log('');
  }
}