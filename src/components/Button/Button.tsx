// Button.tsx
import React from 'react';
import styled from 'styled-components';


interface ButtonProps {
  text: string;
  onClick?: () => void;
  theme?:  'nav' | 'img';
  disabled?: boolean;
}

const StyledButton = styled.button<{ disabled: boolean; theme?:  'nav' | 'img' }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => {
    switch (props.theme) {
      case 'nav':
        return 'grey'; // 或者你的导航栏颜色
      case 'img':
        return '#007bff'; // 与 submitButton 的背景色相同
      default:
        return 'transparent';
    }
  }};
  color: white;
  outline: none;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};

  &:hover {
    background-color: ${(props) => {
      if ( props.theme === 'img') {
        return '#0056b3';
      }  else {
        return 'darkgrey';
      }
    }};
  }
`;

const Button: React.FC<ButtonProps> = ({ text, onClick, theme = 'img', disabled = false }) => {
  return (
    <StyledButton onClick={onClick} theme={theme} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
