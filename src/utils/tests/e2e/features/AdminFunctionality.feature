Feature: Admin login and add new users

  Scenario Outline: Test admin functionalities
    Given I am on the "LoginPage" "login"

    When I fill "input" "email" with <admin_email>
    And I fill "input" "password" with <admin_password>
    And I press "button" "Login"
    Then I should be on the "home" page
    And I should see "HomePage" displayed

    Given I am on the "AdminHomePage" "homeAdmin"

    When I fill "input" "email" with <email>
    And I fill "input" "username" with <username>
    And I fill "input" "password" with <password>
    And I fill "input" "firstName" with <userFirstName>
    And I fill "input" "lastName" with <userLastName>
    And I select from "RolesDropdown" option <role>
    And I press "button" "RegisterUser"
    Then I expect the "UsersList" to contain <email>
    And I press "button" "Logout"
    And I should see "LoginPage" displayed

    When I fill "input" "email" with <email>
    And I fill "input" "password" with <password>
    And I press "button" "Login"
    Then I should be on the "home" page
    And I should see "HomePage" displayed

    Examples:
      | admin_email       | admin_password | email             | username        | password    | userFirstName          | userLastName          | role    |
      | 'admin@admin.com' | 'Admin123'     | 'admin@gmail.com' | 'administrator' | 'Admin1234' | 'faker.name.firstName' | 'faker.name.lastName' | 'admin' |
      | 'admin@admin.com' | 'Admin123'     | 'user@gmail.com'  | 'user'          | 'User1234'  | 'faker.name.firstName' | 'faker.name.lastName' | 'user'  |