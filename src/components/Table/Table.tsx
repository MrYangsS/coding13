import React from 'react';
import styled from 'styled-components';

interface TableProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 80%;
  margin: 20px auto; 
  border-collapse: collapse;
  border: 2px solid #ddd; 
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  th, td {
    border: 1px solid #ddd; 
    text-align: center; 
    padding: 8px; 
  }

  tr:nth-child(even) {
    background-color: #f2f2f2; 
  }

  tr:hover {
    background-color: ${props => (props.disabled ? '#grey' : '#ddd')}; 
  }
`;

const Table: React.FC<TableProps> = ({ children, disabled }) => {
  return <StyledTable disabled={disabled}>{children}</StyledTable>;
};

export default Table;
