Feature: Deal data creation

Scenario: Free CRM Create a new deal Scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters username and password
| username | password |
| TestUsername1 | TestPass |

And user clicks on login button
And user is on home page
Then user moves to new deal page
Then user enters deal details
| title | amount | probability | commission |
| Test deal | 1000 | 50 | 10 |
| Test dea2 | 2000 | 60 | 20 |
| Test dea3 | 3000 | 70 | 30 |

Then Close the browser