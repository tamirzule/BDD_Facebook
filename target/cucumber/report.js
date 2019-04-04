$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FacebookMutliyUser.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook mutily user login functionality",
  "description": "",
  "id": "facebook-mutily-user-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Facebook mutily user login sucess test case",
  "description": "",
  "id": "facebook-mutily-user-login-functionality;facebook-mutily-user-login-sucess-test-case",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@mutily"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user at homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter the email \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter the password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user see the login result",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "facebook-mutily-user-login-functionality;facebook-mutily-user-login-sucess-test-case;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 13,
      "id": "facebook-mutily-user-login-functionality;facebook-mutily-user-login-sucess-test-case;;1"
    },
    {
      "cells": [
        "tamir@gmail.com",
        "jhbhjghgday"
      ],
      "line": 14,
      "id": "facebook-mutily-user-login-functionality;facebook-mutily-user-login-sucess-test-case;;2"
    },
    {
      "cells": [
        "bryan@gmail.com",
        "jhjkasduiq"
      ],
      "line": 15,
      "id": "facebook-mutily-user-login-functionality;facebook-mutily-user-login-sucess-test-case;;3"
    },
    {
      "cells": [
        "ferd@gmail.com",
        "jhjhyuqasd"
      ],
      "line": 16,
      "id": "facebook-mutily-user-login-functionality;facebook-mutily-user-login-sucess-test-case;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6411727618,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Facebook mutily user login sucess test case",
  "description": "",
  "id": "facebook-mutily-user-login-functionality;facebook-mutily-user-login-sucess-test-case;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@mutily"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user at homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter the email \"tamir@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter the password \"jhbhjghgday\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user see the login result",
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefination.FBhp()"
});
formatter.result({
  "duration": 146966542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tamir@gmail.com",
      "offset": 22
    }
  ],
  "location": "GUIStepDefination.user_enter_the_email(String)"
});
formatter.result({
  "duration": 125463956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhbhjghgday",
      "offset": 25
    }
  ],
  "location": "GUIStepDefination.user_enter_the_password(String)"
});
formatter.result({
  "duration": 111485160,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepDefination.click()"
});
formatter.result({
  "duration": 12805973896,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepDefination.result()"
});
formatter.result({
  "duration": 32915036,
  "status": "passed"
});
formatter.after({
  "duration": 2368321875,
  "status": "passed"
});
formatter.before({
  "duration": 5648027919,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Facebook mutily user login sucess test case",
  "description": "",
  "id": "facebook-mutily-user-login-functionality;facebook-mutily-user-login-sucess-test-case;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@mutily"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user at homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter the email \"bryan@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter the password \"jhjkasduiq\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user see the login result",
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefination.FBhp()"
});
formatter.result({
  "duration": 17808570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bryan@gmail.com",
      "offset": 22
    }
  ],
  "location": "GUIStepDefination.user_enter_the_email(String)"
});
formatter.result({
  "duration": 210872381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhjkasduiq",
      "offset": 25
    }
  ],
  "location": "GUIStepDefination.user_enter_the_password(String)"
});
formatter.result({
  "duration": 98780015,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepDefination.click()"
});
formatter.result({
  "duration": 12979592290,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepDefination.result()"
});
formatter.result({
  "duration": 33535289,
  "status": "passed"
});
formatter.after({
  "duration": 2710058894,
  "status": "passed"
});
formatter.before({
  "duration": 5568974005,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Facebook mutily user login sucess test case",
  "description": "",
  "id": "facebook-mutily-user-login-functionality;facebook-mutily-user-login-sucess-test-case;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@mutily"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user at homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter the email \"ferd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter the password \"jhjhyuqasd\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user see the login result",
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefination.FBhp()"
});
formatter.result({
  "duration": 11445243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ferd@gmail.com",
      "offset": 22
    }
  ],
  "location": "GUIStepDefination.user_enter_the_email(String)"
});
formatter.result({
  "duration": 181236685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhjhyuqasd",
      "offset": 25
    }
  ],
  "location": "GUIStepDefination.user_enter_the_password(String)"
});
formatter.result({
  "duration": 138412406,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepDefination.click()"
});
formatter.result({
  "duration": 7146540227,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepDefination.result()"
});
formatter.result({
  "duration": 36187674,
  "status": "passed"
});
formatter.after({
  "duration": 2362488883,
  "status": "passed"
});
});