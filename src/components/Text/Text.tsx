// Text.tsx
import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledH2 = styled.h2<{ isTitleText?: boolean }>`
  font-size: ${(props) => (props.isTitleText ? '1.5em' : '2em')};
`;

const StyledP = styled.p``;

const Text: React.FC<TextProps> = ({ text, isPageStory, isTitleText }) => {
  return (
    <>
      <StyledH2 isTitleText={isTitleText}>{isPageStory ? text : (isTitleText ? 'Title: ' : '') + text}</StyledH2>
      {!isPageStory && <StyledP>{text}</StyledP>}
    </>
  );
};

export default Text;
