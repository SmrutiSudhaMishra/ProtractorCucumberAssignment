Feature: Check the installation of the protractor framework
    
Scenario: Open the browser
Given The app is open on "localhost"


Scenario:Search for a valid People character
Given User is on the "Star Wars Search" page to search valid People character
When User clicks on "People" radio button for valid People character search
When Search with valid People character as "Luke Skywalker"
When User clicks on Search button for valid People character search
Then Search operation should display Gender, Birth year, Eye color and Skin color
|Data        |Value|
|Gender      |male |
|Birth year  |19BBY |
|Eye color   |blue  |
|Skin color  |fair  |             
  
Scenario:Search for Invalid People character
Given User is on the "Star Wars Search" page to search invalid People character
When User clicks on "People" radio button for invalid People character search
When Search with invalid People character as "**NA"
When User clicks on Search button for invalid People character search
Then Search operation should display result as "Not found" for invalid People character search

Scenario:Search for a valid Planets character
Given User is on the "Star Wars Search" page to search valid Planets character
When User clicks on "Planets" radio button for valid Planets character search
When Search with valid Planets character as "Hoth"
When User clicks on Search button for valid Planets character search
Then Search operation should display Population,Climate and Gravity
|Data           | Value        |
|Population     |unknown      |
|Climate        |frozen        |
|Gravity        |1.1 standard  |


Scenario:Search for Invalid Planets character
Given User is on the "Star Wars Search" page to search invalid Planets character
When User clicks on "Planets" radio button for invalid Planets character search
When Search with invalid Planets character as "**Not"
When User clicks on Search button for invalid Planets character search
Then Search operation should display result as "Not found" for invalid Planets character search 


Scenario:Verify empty result list on click of search button after clearing "Search form" 
Given User is on the "Star Wars Search" page to verify empty result list
When User clicks on "People" radio button for single character search
When User enters Single People character as "R2" in Search form and clicks on search button
When User clears Search form for Single People character search
When User clicks on Search button for Single People character search
Then Search operation should remove People "R2" result 



Scenario:Verify search results by the "Search" button or by pressing "Enter" on the search field
Given User is on the "Star Wars Search" page to verify ways for search results 
When User clicks on "People" radio button for people character search
When User clicks on search button after inputing People character as "R2" in Search form
When User clears Search form after completing search results by Search button
When User Presses on Enter Key after inputing People character as "R2" in Search form
Then Search operation should dispaly People character with "R2" result 



Scenario:Verify Planets character Search with People characher search data filled in seach form
Given User is on the "Star Wars Search" page to verify search results when user switches search options from People to Planet
When User clicks on "People" radio button for people character search option
When User enters People character as "R2" in Search form
When User clicks Search button to see People Character data
When User clicks on "Planets" radio button for Planet character search option
When User clicks Search button to see Planet Character data
Then Search operation should display result as "Not found" for searching Planet character result with People input data


Scenario:Verify Planets character Search with partial matching data 
Given User is on the "Star Wars Search" page to verify search results with partial matching data 
When User clicks on "People" radio button for multiple people character search
When User enters partial matching People character as "Darth" in Search form 
When User clicks Search button to see Multiple People Character search results
Then Search operation should display multiple search results matching with data "Darth"
