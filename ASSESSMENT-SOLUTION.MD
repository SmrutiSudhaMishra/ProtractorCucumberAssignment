# QA Engineer Assessment Solution

## Introduction

Use this file to document your solution and findings.


## Author Details
Name :Smruti Sudha Mishra
Role :Senior QA Automation Engineer
Contact : +91 99 860 99 539


## Remarks 


##Steps to Execute the scenarios
1.Run 'node -v' to check the version details
2.'npm install' to download all the dependencies
3.'npm install -g protractor' to download protractor 
4.Run 'ng serve' and navigate to `http://localhost:4200/`. 
Run `ng test` to execute the unit tests
5. Added "webdriver-update": "webdriver-manager update" in package.json
6.npm start
7.npm run e2e 
8.Also corrected feature file path in protractor.conf.js as below 
  specs: [
      './e2e/features/*.feature'
  ],

9.configuration modified for Cucumber in protractor.conf.js as below

framework: 'custom',
frameworkPath: require.resolve("protractor-cucumber-framework"),

10.configuration modified for Cucumber Options in protractor.conf.js as below

   cucumberOpts: {
    compiler: "ts:ts-node/register",
    strict: true,
    require: [
      './e2e/**/*.steps.ts'
    ],
    format: [
      'json:./e2e/reports/json/cucumber-test-results.json'
    ]
  },

  11.Added On complete step to create Protractor Cucumber HTML report
  onComplete: () => {
 
    const cucumberReporterOptions = {
      jsonFile: targetJson,
      output: htmlReports + "/cucumber-test-results.html",
      reportSuiteAsScenarios: true,
      theme: "bootstrap",                                                                                     
  };
    var reporter = require('cucumber-html-reporter');
    reporter.generate(cucumberReporterOptions);
},

12. Also installed "npm i cucumber-html-reporter@^4.0.3"

13.Created a folder for reports inside e2e
And Under reports created 2 more folders
 a) html
 b) json

 14.Added all the test scenarios in the assessment-check feature file
 15.Added step definition code in app.steps.ts file
 16.On double click of cucumber-test-results.html it shows html report for all the scenarios
