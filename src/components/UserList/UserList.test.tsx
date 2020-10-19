import React from 'react';
import UserList from '.';
import { shallow } from 'enzyme';

const usersList = [
  { email: 'user1@gmail.com' },
  { email: 'user2@gmail.com' },
  { email: 'user3@gmail.com' },
]

describe("Testing Not Found", () => {
  test("Render list without error", () => {
    shallow(<UserList usersList={usersList} />);
  })
  test("Render list with no users", () => {
    const wrapper = shallow(<UserList usersList={[]} />);
    expect(wrapper.find('P').text()).toBe('no users found')
  })
})