import React from 'react';
import DropDown from '.';
import { shallow } from 'enzyme';

const testProps = {
  onChange: () => { return null },
  value: 'ro',
  options: [{ value: 'ro', label: 'Romana' }, { value: 'en', label: 'English' }]
}

describe("Testing Not Found", () => {
  test("Render DropDown", () => {
    shallow(<DropDown {...testProps} />)
  })
  test("Render empty DropDown", () => {
    shallow(<DropDown {...testProps} options={[]} />)
  })
})