Feature: Free CRM Create Contacts

Scenario Outline: Free CRM Create a new contact Scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
And user clicks on login button
And user is on home page
Then user moves to new contact page
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then Close the browser

Examples:
	| username | password | firstname | lastname | position |
	| TestUsername1 | TestPass | Tom | Peter | Manager |
	| TestUsername1 | TestPass | David | Weai | Director |