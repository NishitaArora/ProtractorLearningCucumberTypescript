"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    //framework : "jasmine",
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        format: [],
        require: './Step_definitions/*.js',
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //specs:['./specs/calculator.js'],
    specs: ['../feature/calculator.feature'],
    //specs:['./Step_definitions/firstScript.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFWSxRQUFBLE1BQU0sR0FBVTtJQUN4Qix3QkFBd0I7SUFFeEIsWUFBWSxFQUFFO1FBRVYsV0FBVyxFQUFHLFFBQVE7S0FFekI7SUFFRCxZQUFZLEVBQUU7UUFDVixNQUFNLEVBQUcsRUFBRTtRQUNYLE9BQU8sRUFBRSx5QkFBeUI7S0FDbkM7SUFFRCxTQUFTLEVBQUUsUUFBUTtJQUVuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUVqRSxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFDLENBQUMsK0JBQStCLENBQUM7SUFDdkMsOENBQThDO0lBQzlDLGVBQWUsRUFBRSw4QkFBOEI7Q0FFbEQsQ0FBQSJ9