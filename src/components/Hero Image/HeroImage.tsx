import React from 'react';
import styled from 'styled-components';
//@ts-ignore
import imgSrc from './h.jpg';

interface HeroImageProps {
  imageUrl: string;
  altText: string;
  disabled?: boolean;
}

const Container = styled.div<{ disabled?: boolean }>`
  width: 100vw;
  height: 100vh; 
  overflow: hidden;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div<{ disabled?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${(props) => (props.disabled ? '0.3' : '0')});
`;

const Text = styled.div<{ disabled?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => (props.disabled ? '#aaa' : 'white')};
  text-align: center;
  font-size: 24px;
`;

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl = imgSrc, altText, disabled = false }) => (
  <Container disabled={disabled}>
    <Image src={imageUrl} alt={altText} />
    <Overlay disabled={disabled} />
    <Text disabled={disabled}>{altText}</Text>
  </Container>
);

export default HeroImage;
