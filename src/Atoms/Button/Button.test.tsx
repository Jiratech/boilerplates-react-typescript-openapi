import React from 'react';
import { render } from '@testing-library/react';
import Button from '.';
import { DefaultTheme } from 'styled-components';
import { themes } from '../../styles/theme/themes';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(<Button title='Buton' onClick={ () => { return null }} theme={theme || themes.light} />);

describe('<Button />', () => {
  it('should render an <button> tag', () => {
    const button = render(<Button title='Buton' onClick={ () => {return null} }/>);
    expect(button.container.querySelector('button')).toBeInTheDocument();
  });

  it('should have theme', () => {
    const button = renderWithTheme();
    expect(button.container.firstChild).toHaveStyle(
      `color: ${themes.light.text}`,
    );
  });
});