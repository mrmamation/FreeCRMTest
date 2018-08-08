$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/bin/Eclipse-Tests/FreeCrmBDDFramework/src/main/java/Features/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal Scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "TestUsername1",
        "TestPass"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "Test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "Test dea2",
        "2000",
        "60",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "Test dea3",
        "3000",
        "70",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepwithMapDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 4159463884,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithMapDefinition.title_of_the_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 27728356,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithMapDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 1064746643,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithMapDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4724169247,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithMapDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 6028488,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithMapDefinition.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 857989258,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithMapDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 5167676694,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithMapDefinition.close_the_browser()"
});
formatter.result({
  "duration": 675686305,
  "status": "passed"
});
});