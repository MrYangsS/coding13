import React from 'react';
import styled from 'styled-components';
//@ts-ignore
import cardImage from './h.jpg'; 


interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
}

const CardContainer = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 20%;
`;


const Image = styled.img`
  width: 400px;
  height: 250px;
  object-fit: fill; // 
  border-radius: 8px 8px 0 0;
  display: block;
  margin: 0 auto;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Card: React.FC<CardProps> = ({ title, content, imageUrl = cardImage }) => {
  return (
    <CardContainer data-testid="card">
      <Image src={imageUrl} alt="Card Image" />
      <CardContent>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>{imageUrl}</p>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
