import { IUser } from '../openApi';

export class User implements IUser {
  email = ''
  username = ''
  password = ''
  firstName = ''
  lastName = ''
  roleId = ''
}