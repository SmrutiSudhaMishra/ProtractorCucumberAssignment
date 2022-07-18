// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

var path = require('path');
const jsonReports = path.join(process.cwd(), "/e2e/reports/json");
const htmlReports = path.join(process.cwd(), "/e2e/reports/html");
const targetJson = jsonReports + "/cucumber-test-results.json";


exports.config = {
  debug: false,
  allScriptsTimeout: 11000,
  specs: [
    './e2e/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  allScriptsTimeout: 45000,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve("protractor-cucumber-framework"),
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
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    });
  },
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
};
