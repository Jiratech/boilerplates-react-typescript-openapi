Feature: Register user

  Register user
  Scenario Outline: Register user
    Given I am on the "RegisterPage" "register"

    When I fill "input" "email" with <email>
    And I fill "input" "username" with <username>
    And I fill "input" "password" with <password>
    And I fill "input" "firstName" with <userFirstName>
    And I fill "input" "lastName" with <userLastName>
    And I press "button" "Register"
    Then I should be on the "login" page

    When I fill "input" "email" with <email>
    And I fill "input" "password" with <password>
    And I press "button" "Login"
    Then I should be on the "home" page
    And I should see "HomePage" displayed

    Examples:
      | email            | username | password   | userFirstName          | userLastName           |
      | 'test@gmail.com' | 'Test1'  | 'Test1234' | 'faker.name.firstName' | 'faker.name.firstName' |

