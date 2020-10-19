import React from 'react';
import styled from 'styled-components/macro';

export type IInputProps = {
  value: string | undefined;
  type?: string;
  placeholder?: string;
  onChange?: (event: any) => void;
  name?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export default function Input(props: IInputProps) {
  return (
    <InputWrapper
      type={props.type || "text"}
      name={props.name}
      placeholder={props.placeholder || ""}
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled || props.isLoading}
    />
  )
}

const InputWrapper = styled.input<IInputProps>`
  border: 1px solid #CCC;
  border-radius: 6px;
  padding: 6px;
  margin: 6px;
  ::placeholder {
      color: ${p => p.theme.primary}
  }
  ${p =>
  p.type === 'submit' && `
    color: ${p.theme.text};
    background-color: ${p.theme.primary};
    border-color: ${p.theme.borderLight};
  `}
`;