// These are ways of being able to identify HTML elements to interact with and check.
const selectors = {
  element: {
    UsersList: '[data-test-id="users-list"]'
  },
  button: {
    Login: 'input[type=submit]',
    Register: 'input[type=submit]',
    RegisterUser: 'input[type=submit]',
    Logout: 'button[data-test-id="logout-button"]',
  },
  checkbox: {
  },
  dropDown: {
    RolesDropdown: '[data-test=button-roles-dropdown]'
  },
  input: {
  },
  dropdownElement: {
  },
  page: {
    LoginPage: '[data-test-id="login-page"]',
    RegisterPage: '[data-test-id="register-page"]',
    HomePage: '[data-test-id="home-page"]',
    AdminHomePage: '[data-test-id="admin-home-page"]',
  },
};

module.exports = selectors;
