// Card.tsx
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  margin: 10px;
  width: 300px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardTitle = styled.h2`
  margin-top: 0;
`;

const CardContent = styled.p``;

interface CardProps {
  title: string;
  content: string;
  images: string[];  // Array of image URLs
  disabled?: boolean;
}

const Card: React.FC<CardProps> = ({ title, content, images, disabled }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    startImageRotation();
  };

  const startImageRotation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
  };

  useEffect(() => {
    startImageRotation();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <CardContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Image src={images[currentImageIndex]} alt="Card Image" />
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};

export default Card;
