import {ElementFinder,element,by,browser, ElementArrayFinder  } from "protractor";
import { expect } from "chai";

let chai = require('chai');
var assert = chai.expect;

export class URLhit
{
 async getUrl()
    {
    await browser.get("https://angularjs.org/");
    browser.sleep(10000);
    browser.manage().window().maximize();
    
    element(by.xpath("//a[@class='button button-large button-primary has-shield has-shadow']")).click();
    //browser.wait(EC.elementToBeClickable(element(by.xpath("//a[@class='button button-large button-primary has-shield has-shadow']"))),10000);
    console.log("Clicked");
    //browser.sleep(10000);
    
    }
}