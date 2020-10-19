import React from 'react';
import styled from 'styled-components/macro';

export interface IOption {
  value: string | number;
  label: string;
}

export type IProps = {
  onChange: (value: string) => void;
  disabled?: boolean;
  options: Array<IOption>;
  value: string;
  dataTest?: string;
}

export default function DropDown(props: IProps) {

  const disabled = props.disabled || props.options.length === 0
  const options = [{value: '', label: 'None'}, ...props.options];
  return (
    <Select
      value={props.value}
      data-test={props.dataTest}
      onChange={(event) => props.onChange(event.target.value)}
      disabled={disabled}
    >
      {props.options.length > 0 ?
        options.map(element => {
          return <option data-test={`drop-down-item-${element.label}`} key={element.value} value={element.value}>{element.label}</option>
        })
        : <option value={props.value}>Empty</option>
      }
    </Select>
  )
}

const Select = styled.select`
    margin: 10px;
    border-radius: 5px;
    min-width: 100px;
    height: 25px;
`;