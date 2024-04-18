import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled?: boolean, backgroundColor?: string }>`
  color: ${(props) => (props.disabled ? '#6c757d' : '#000')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
`;

const Label: React.FC<LabelProps> = ({ text, disabled = false, backgroundColor }) => {
  return <StyledLabel disabled={disabled} backgroundColor={backgroundColor}>{text}</StyledLabel>;
};

export default Label;
