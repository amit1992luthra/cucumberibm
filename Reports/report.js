$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/elearning.feature");
formatter.feature({
  "name": "Elearning login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@amit"
    }
  ]
});
formatter.step({
  "name": "user enter invalid Username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "amit",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "Background section",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "elearning.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@amit"
    }
  ]
});
formatter.step({
  "name": "user enter invalid Username \"amit\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "elearning.user_enter_invalid_Username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "elearning.validation_message_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with authorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enter valid Username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "amit",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "Background section",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "elearning.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with authorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enter valid Username \"amit\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "elearning.user_enter_valid_Username_and_password(String,String)"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefinition.elearning.user_enter_valid_Username_and_password(elearning.java:37)\r\n\tat ✽.user enter valid Username \"amit\" and password \"123456\"(file:src/test/java/feature/elearning.feature:19)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "elearning.validation_message_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Background section",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "elearning.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User enter value in user name field",
  "keyword": "When "
});
formatter.match({
  "location": "elearning.user_enter_value_in_user_name_field()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefinition.elearning.user_enter_value_in_user_name_field(elearning.java:43)\r\n\tat ✽.User enter value in user name field(file:src/test/java/feature/elearning.feature:29)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "user enter value in password field",
  "keyword": "And "
});
formatter.match({
  "location": "elearning.user_enter_value_in_password_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Login button enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "elearning.login_button_enabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});