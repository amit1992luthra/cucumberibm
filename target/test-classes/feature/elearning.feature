Feature: Elearning login page

  Background: Background section
    Given User is on homepage

  Scenario Outline: Login with unauthorized user
    When user enter invalid Username "<username>" and password "<password>"
    Then validation message appears

    Examples: 
      | username | password |
      | amit     |   123456 |
      | shobhit  | pass123  |
      | saif     | xyz      |
      |          |          |

