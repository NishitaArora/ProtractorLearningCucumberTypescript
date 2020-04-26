import {ElementFinder,element,by,browser, ElementArrayFinder  } from "protractor";
import { expect } from "chai";
import { protractor } from "protractor/built/ptor";


let chai = require('chai');
var assert = chai.expect;
let EC = protractor.ExpectedConditions;
export class testSendKeys{
   
   
    async clickOntryNewAngularbttn()
    {
       element(by.xpath("//a[@class='button button-large button-primary has-shield has-shadow']")).click();
       browser.sleep(10000);
       
      browser.getWindowHandle().then(function(mainWindow)
       {
           
           console.log(mainWindow);
           browser.getAllWindowHandles().then(function(childWindow)
           {
               console.log(childWindow);  
               browser.switchTo().window(childWindow[1]);
               var titleGot = browser.getTitle().then(function(promisedResult){
                   console.log("Title is : " + promisedResult);
                   return promisedResult;
                  
               })
               
               console.log(titleGot);
               browser.sleep(10000);
               element(by.xpath("//a[@class='button hero-cta']")).click();
                
                      
              
               //element(by.xpath("//input[@type='search']")).sendKeys("API");
               //element(by.xpath("//a[@class='button hero-cta']")).click();
               
               console.log("passed values");
           })   
           /*for(let guid of childWindow)
           {
               // one enter into if block if the GUID is not equal to parent window's GUID
               if(guid != mainWindow){
           
               browser.switchTo().window(1);
               element(by.xpath("//input[@type='search']")).sendKeys("API");
               //element(by.xpath("//span[contains(text(),'API List')]")).click();
               //break;
               }
           }*/
               
           
           
       })
    }
}
