// src/components/Label/Label.tsx
import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? '#6c757d' : '#000')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Label: React.FC<LabelProps> = ({ text, disabled = false }) => {
  return <StyledLabel disabled={disabled}>{text}</StyledLabel>;
};

export default Label;
