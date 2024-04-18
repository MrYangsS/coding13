import React from 'react';
import styled, { css } from 'styled-components';

export interface TextProps {
    text: string;
    isPageStory?: boolean;
    isTitleText?: boolean;
    backgroundColor?: string;
    disabled?: boolean; // Now properly added in the interface
}

const StyledH2 = styled.h2<{ isTitleText?: boolean; backgroundColor?: string; disabled?: boolean }>`
  font-size: ${(props) => (props.isTitleText ? '1.5em' : '2em')};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: ${(props) => props.disabled ? 'gray' : 'black'};
  text-decoration: ${(props) => props.disabled ? 'line-through' : 'none'};
`;

const StyledP = styled.p<{ disabled?: boolean }>`
  color: ${(props) => props.disabled ? 'gray' : 'black'};
  text-decoration: ${(props) => props.disabled ? 'line-through' : 'none'};
`;

const Text: React.FC<TextProps> = ({ text, isPageStory, isTitleText, backgroundColor, disabled }) => {
  return (
    <>
      <StyledH2 isTitleText={isTitleText} backgroundColor={backgroundColor} disabled={disabled}>
        {isPageStory ? text : (isTitleText ? 'Title: ' : '') + text}
      </StyledH2>
      {!isPageStory && <StyledP disabled={disabled}>{text}</StyledP>}
    </>
  );
};

export default Text;
