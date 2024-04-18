import React from 'react';
import styled from 'styled-components';
//@ts-ignore
import imgSrc from './h.jpg'; 
interface ImgProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  backgroundColor?: string; 
}

const StyledImg = styled.img<{ disabled?: boolean, backgroundColor?: string }>`
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  max-width: 50%;
  height: auto;
  border: ${(props) => (props.disabled ? 'none' : '1px solid #ccc')};
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor || 'transparent'}; 
`;


const Img: React.FC<ImgProps> = ({ src = imgSrc, alt, width, height, disabled = false, backgroundColor }) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      disabled={disabled}
      backgroundColor={backgroundColor} 
    />
  );
};

export default Img;

