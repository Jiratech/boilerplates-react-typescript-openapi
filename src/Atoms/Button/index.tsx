import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { DefaultTheme } from 'styled-components'

export type IButtonProps = {
  title: string;
  onClick: any;
  isLoading?: boolean;
  dataTestId?: string
  theme?: DefaultTheme | undefined;
}

export default function Button(props: IButtonProps) {
  if (props.isLoading) {
    return (
      <LoaderWrapper theme={props.theme}>
        <Loader theme={props.theme} />
      </LoaderWrapper>
    )
  }

  return (
    <ButtonWrapper theme={props.theme} onClick={props.onClick} data-test-id={props.dataTestId}>{props.title}</ButtonWrapper>
  )
}

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 4px solid ${p => p.theme.text};
  border-top: 4px solid ${p => p.theme.primary};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: ${spin} 2s linear infinite;
`;

const ButtonWrapper = styled.button`
  height: 30px;
  border-radius: 10px;
  border-color: ${p => p.theme.borderLight};
  background-color: ${p => p.theme.primary};
  color: ${p => p.theme.text};
`;

const LoaderWrapper = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;