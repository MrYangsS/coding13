// Button.tsx
import React from 'react';
import styled from 'styled-components';


interface ButtonProps {
  text: string;
  onClick?: () => void;
  theme?:  'nav' | 'img';
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledButton = styled.button<{ disabled: boolean; theme?: 'nav' | 'img'; backgroundColor?: string }>`
  padding: ${(props) => props.theme === 'nav' ? '5px 10px' : '10px 20px'};  
  font-size: ${(props) => props.theme === 'nav' ? '12px' : '16px'};  
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => props.backgroundColor || (props.theme === 'nav' ? 'grey' : '#007bff')};
  color: white;
  outline: none;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};

  &:hover {
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : (props.theme === 'img' ? '#0056b3' : 'darkgrey')};
  }
`;

const Button: React.FC<ButtonProps> = ({ text, onClick, theme = 'img', disabled = false, backgroundColor }) => {
  return (
    <StyledButton onClick={onClick} theme={theme} disabled={disabled} backgroundColor={backgroundColor}  data-testid="submitButton">
      {text}
    </StyledButton>
  );
};

export default Button;
