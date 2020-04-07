import { browser } from "protractor"

describe("navigate" , function(){

    beforeEach(function()
    {
        browser.get("https://angularjs.org/");
    })

    it("calculate",function()
    {
       // expect((browser.getTitle()).equals("AngularJS — Superheroic JavaScript MVW Framework"));
       console.log("AngularJS — Superheroic JavaScript MVW Framework");
    })
}


)