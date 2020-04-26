import {ElementFinder,element,by,browser, ElementArrayFinder  } from "protractor";
import { expect } from "chai";
import { threadId } from "worker_threads";
import { protractor } from "protractor/built/ptor";
import { toASCII } from "punycode";

let chai = require('chai');
var assert = chai.expect;
let EC = protractor.ExpectedConditions;

export class testSendKeys{
   
    tryNewAngularbttn:ElementFinder
    searchBttn : ElementFinder
    APIListbttn:ElementFinder

    constructor()
    {
       //this.tryNewAngularbttn =element(by.className('button button-large button-primary has-shield has-shadow'));
        //this.tryNewAngularbttn = element(by.xpath("//a[contains(text(),'Try the New Angular')]"));
        //this.tryNewAngularbttn=element(by.xpath("//sup[@class='badge-new']"));
       //this.tryNewAngularbttn=element(by.xpath("//a[@class='button button-large button-primary has-shield has-shadow']"));
       this.searchBttn=element(by.xpath("//input[@type='search']"));
       this.APIListbttn=element(by.xpath("//span[contains(text(),'API List')]"));
    }

    async clickOntryNewAngularbttn()
    {
        console.log("Enter into method");
        element(by.xpath("//a[@class='button button-large button-primary has-shield has-shadow']")).click();
    
            console.log("Enter into method 2");  
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
                
                
                       
               
                //element(by.xpath("//input[@type='search']")).sendKeys("API");
              element(by.xpath("//a[@class='button hero-cta']")).click();
                
               
                var titleGot2 = browser.getTitle().then(function(promisedResult){
                    console.log("Title is : " + promisedResult);
                    return promisedResult;
                   
                })
                console.log(titleGot2);
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
