export const serverURL = process.env.REACT_APP_API_HOST || "http://localhost:3000";

export const sessionTimeout = 60000;

export const endpointList = {
  login: '/api/auth/login',
  register: '/api/auth/register',
  refresh: '/api/auth/refresh'
};

export const userRoles = {
  admin: 'admin',
  user: 'user'
};

export const userKeyList = ['email', 'username', 'password', 'firstName', 'lastName', 'roleName'];

export const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  homeAdmin: '/admin',
  homeUser: '/user'
};

export const componentsLabels = {
  chooseOption: 'Choose option',
}

export const languages = [
  { value: 'ro', label: 'Românā' },
  { value: 'en', label: 'English' },
]

export const themes = [
  { value: 'light', label: 'light' },
  { value: 'dark', label: 'dark' },
  { value: 'system', label: 'system' },
]

export const axiosConstants = {
  baseUrl: process.env.REACT_APP_API_HOST || 'http://localhost:3000',
  content: 'Content-Type',
  contentJson: 'application/json'
};