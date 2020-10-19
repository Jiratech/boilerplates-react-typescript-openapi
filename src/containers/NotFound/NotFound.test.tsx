import React from 'react';
import NotFound from '.';
import { shallow } from 'enzyme';

describe("Testing Not Found", () => {
  test("Render page not found text", () => {
    const wrapper = shallow(<NotFound />)
    expect(wrapper.find('#not-found-title').text()).toBe('404')
  })
})