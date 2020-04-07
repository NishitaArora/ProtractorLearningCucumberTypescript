import {Config,browser} from "protractor"

export let  config:Config = {
    //framework : "jasmine",

    capabilities: {

        browserName : 'chrome'

    },

    cucumberOpts: {
        format:  [],
        require: './Step_definitions/*.js', // This is where we'll be writing our actual tests
      },

      framework: 'custom', //We need this line to use the cucumber framework

      frameworkPath: require.resolve('protractor-cucumber-framework'), // Here it is

    //specs:['./specs/calculator.js'],
    specs:['../feature/calculator.feature'],
    //specs:['./Step_definitions/firstScript.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub'

}
