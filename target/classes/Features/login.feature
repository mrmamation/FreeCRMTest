Feature: Free CRM Login Feature

#Scenario: Free CRM Login Test Scenario

#Given user is already on Login Page
#When title of login page is Free CRM
#Then user enters "TestUsername1" and "TestPass"
#And user clicks on login button
#And user is on home page

Scenario Outline: Free CRM Login Test Scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
And user clicks on login button
And user is on home page
Then Close the browser

Examples:
	| username | password |
	| TestUsername1 | TestPass |
	| tom | test246 |