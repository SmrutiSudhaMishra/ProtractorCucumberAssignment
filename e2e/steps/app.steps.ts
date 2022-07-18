const { Given, When, Then } = require('cucumber');
const { browser, by,Key } = require('protractor');
const chai = require('chai');
import{ TableDefinition } from "cucumber";
chai.use(require('chai-as-promised'));


Given('The app is open on {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
    await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});

//Search with People
Given('User is on the {string} page to search valid People character' ,async (string) => {
  await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
 
});
When('User clicks on {string} radio button for valid People character search',async(string) => {
  console.log("When statement ") ;
  await browser.element(by.id(string.toLowerCase())).click();  
});
When('Search with valid People character as {string}',async(string) => {
 
   await browser.element(by.id('query')).click();
   await element(by.id('query')).sendKeys(string);  
});
When('User clicks on Search button for valid People character search',async() => {
  await browser.element(by.buttonText('Search')).click();
  await browser.sleep(3000);
});
Then('Search operation should display Gender, Birth year, Eye color and Skin color', async(table:TableDefinition) => {
   table.rows().forEach(element =>{
     console.log("Expected element >>>>>>>" +element) ;
     var dataValue = element.toString().split(',');
     console.log("dataValue >>>>>>>" +dataValue[0]+ "  " + dataValue[1]) ;

     var dataTextElement = browser.element(by.xpath('//*[contains(text(),"'+dataValue[0]+'")]'));
     var valueTextElement = browser.element(by.xpath('//*[contains(text(),"'+dataValue[1]+'")]'));

     chai.expect(dataTextElement.getText()).to.eventually.contains(dataValue[0]);
     chai.expect(valueTextElement.getText()).to.eventually.contains(dataValue[1]);
     
     //chai.expect(browser.element(by.xpath('//*[contains(text(),"'+dataValue[0]+'")]')).isDisplayed()).to.eventually.be.true;
     //chai.expect(browser.element(by.xpath('.//*[contains(text(),"'+dataValue[1]+'")]')).isDisplayed()).to.eventually.be.true;

   });
   await browser.sleep(3000);
});


Given('User is on the {string} page to search invalid People character' ,async (string) => {
  await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});
When('User clicks on {string} radio button for invalid People character search',async(string) => {
  await browser.element(by.id(string.toLowerCase())).click();
});
When('Search with invalid People character as {string}',async(arg) => {
 
   await browser.element(by.id('query')).click();
   await element(by.id('query')).sendKeys(Key.chord(Key.CONTROL, 'a'));
   await element(by.id('query')).sendKeys(Key.DELETE);
   await element(by.id('query')).sendKeys(arg);
});
When('User clicks on Search button for invalid People character search',async() => {
  await browser.element(by.buttonText('Search')).click();
  await browser.sleep(3000);
});
Then('Search operation should display result as {string} for invalid People character search', async(string) => {
  await chai.expect(browser.element(by.xpath('//*[contains(text(),"'+string+'")]')).isDisplayed()).to.eventually.be.true;
});



//Search with Planets
Given('User is on the {string} page to search valid Planets character' ,async (string) => {
  await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});

When('User clicks on {string} radio button for valid Planets character search',async(string) => {
  console.log("When statement ") ;
  await browser.element(by.id(string.toLowerCase())).click(); 
});
When('Search with valid Planets character as {string}',async(string) => {
  await browser.element(by.id('query')).click();
   await element(by.id('query')).sendKeys(Key.chord(Key.CONTROL, 'a'));
   await element(by.id('query')).sendKeys(Key.DELETE);
   await element(by.id('query')).sendKeys(string); 
});
When('User clicks on Search button for valid Planets character search',async() => {
  await browser.element(by.buttonText('Search')).click();
  await browser.sleep(3000);
});
Then('Search operation should display Population,Climate and Gravity', async(table:TableDefinition) => {
   table.rows().forEach(element =>{
     console.log("Expected element >>>>>>>" +element) ;
     var dataValue = element.toString().split(',');
     chai.expect(browser.element(by.xpath('//*[contains(text(),"'+dataValue[0]+'")]')).isDisplayed()).to.eventually.be.true;
     chai.expect(browser.element(by.xpath('.//*[contains(text(),"'+dataValue[1]+'")]')).isDisplayed()).to.eventually.be.true;
});
});




Given('User is on the {string} page to search invalid Planets character' ,async (string) => {
  await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});

When('User clicks on {string} radio button for invalid Planets character search',async(string) => {
  await browser.element(by.id(string.toLowerCase())).click();
});
When('Search with invalid Planets character as {string}',async(arg) => {
   await browser.element(by.id('query')).click();
   await element(by.id('query')).sendKeys(Key.chord(Key.CONTROL, 'a'));
   await element(by.id('query')).sendKeys(Key.DELETE);
   await element(by.id('query')).sendKeys(arg);
});
When('User clicks on Search button for invalid Planets character search',async() => {
  await browser.element(by.buttonText('Search')).click();
  await browser.sleep(3000);
});

Then('Search operation should display result as {string} for invalid Planets character search', async(string) => {
  await chai.expect(browser.element(by.xpath('//*[contains(text(),"'+string+'")]')).isDisplayed()).to.eventually.be.true;
});




Given('User is on the {string} page to verify empty result list' ,async (string) => {
  await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});

When('User clicks on {string} radio button for single character search',async(string) => {
  await browser.element(by.id(string.toLowerCase())).click();
});
When('User enters Single People character as {string} in Search form and clicks on search button',async(arg) => {
 
   await browser.element(by.id('query')).click();
   await element(by.id('query')).sendKeys(Key.chord(Key.CONTROL, 'a'));
   await element(by.id('query')).sendKeys(Key.DELETE);
   await element(by.id('query')).sendKeys(arg);
   await browser.element(by.buttonText('Search')).click();
   await browser.sleep(3000); 
});
When('User clears Search form for Single People character search',async() => {
 
   await browser.element(by.id('query')).click();
   await element(by.id('query')).sendKeys(Key.chord(Key.CONTROL, 'a'));
   await element(by.id('query')).sendKeys(Key.DELETE);
});

When('User clicks on Search button for Single People character search',async() => {
  await browser.element(by.buttonText('Search')).click();
  await browser.sleep(3000);
});
Then('Search operation should remove People {string} result', async(string) => {
  await chai.expect(browser.element(by.xpath('//*[contains(text(),"'+string+'")]')).isDisplayed()).to.eventually.be.false;
});



Given('User is on the {string} page to verify ways for search results' ,async (string) => {
  await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});
When('User clicks on {string} radio button for people character search',async(string) => {
  await browser.element(by.id(string.toLowerCase())).click(); 
});
When('User clicks on search button after inputing People character as {string} in Search form',async(arg) => {
   await browser.element(by.id('query')).click();
   await element(by.id('query')).sendKeys(Key.chord(Key.CONTROL, 'a'));
   await element(by.id('query')).sendKeys(Key.DELETE);
   await element(by.id('query')).sendKeys(arg);
   await browser.element(by.buttonText('Search')).click();
   await browser.sleep(3000); 
});
When('User clears Search form after completing search results by Search button',async() => {
   await browser.element(by.id('query')).click();
   await element(by.id('query')).sendKeys(Key.chord(Key.CONTROL, 'a'));
   await element(by.id('query')).sendKeys(Key.DELETE); 
});

When('User Presses on Enter Key after inputing People character as {string} in Search form',async(arg) => {
  await browser.element(by.id('query')).click();
  await element(by.id('query')).sendKeys(arg);
  await element(by.id('query')).sendKeys(Key.ENTER);
});

Then('Search operation should dispaly People character with {string} result', async(string) => {
  await chai.expect(browser.element(by.xpath('//*[contains(text(),"'+string+'")]')).isDisplayed()).to.eventually.be.true;
});



Given('User is on the {string} page to verify search results when user switches search options from People to Planet' ,async (string) => {
  await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});

When('User clicks on {string} radio button for people character search option',async(string) => {
  await browser.element(by.id(string.toLowerCase())).click();
});
When('User enters People character as {string} in Search form',async(arg) => {
   await browser.element(by.id('query')).click();
   await element(by.id('query')).sendKeys(Key.chord(Key.CONTROL, 'a'));
   await element(by.id('query')).sendKeys(Key.DELETE);
   await element(by.id('query')).sendKeys(arg); 
});

When('User clicks Search button to see People Character data',async() => {
   await browser.element(by.buttonText('Search')).click();
   await browser.sleep(3000); 
});

When('User clicks on {string} radio button for Planet character search option',async(string) => {
  await browser.element(by.id(string.toLowerCase())).click();
});
When('User clicks Search button to see Planet Character data',async() => {

   await browser.element(by.buttonText('Search')).click();
   await browser.sleep(3000);
});
Then('Search operation should display result as {string} for searching Planet character result with People input data', async(string) => {
  await chai.expect(browser.element(by.xpath('//*[contains(text(),"'+string+'")]')).isDisplayed()).to.eventually.be.true;
});




Given('User is on the {string} page to verify search results with partial matching data' ,async (string) => {
  await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});

When('User clicks on {string} radio button for multiple people character search',async(string) => {
  
  await browser.element(by.id(string.toLowerCase())).click(); 
});
When('User enters partial matching People character as {string} in Search form',async(arg) => {

   await browser.element(by.id('query')).click();
   await element(by.id('query')).sendKeys(Key.chord(Key.CONTROL, 'a'));
   await element(by.id('query')).sendKeys(Key.DELETE);
   await element(by.id('query')).sendKeys(arg); 
});

When('User clicks Search button to see Multiple People Character search results',async() => {

   await browser.element(by.buttonText('Search')).click();
   await browser.sleep(3000); 
});

Then('Search operation should display multiple search results matching with data {string}', async(string) => {

  var elemFirst = element.all(by.xpath('//*[contains(text(),"'+string+'")]')).first();
  var elemLast = element.all(by.xpath('//*[contains(text(),"'+string+'")]')).last();
  await chai.expect(elemFirst.getText()).to.eventually.be.contains(string);
  await chai.expect(elemLast.getText()).to.eventually.be.contains(string);
});
