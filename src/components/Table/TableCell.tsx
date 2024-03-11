import React from 'react';
import styled from 'styled-components';

interface TableCellProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const StyledTableCell = styled.td<{ disabled?: boolean }>`
  padding: 12px; 
  border: 1px solid #ddd; 
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  font-size: 16px; 
  color: ${props => (props.disabled ? '#999' : '#333')}; // 
  background-color: ${props => (props.disabled ? '#f9f9f9' : 'transparent')};

  &:hover {
    background-color: ${props => (props.disabled ? '#f9f9f9' : '#f2f2f2')}; 
`;

const TableCell: React.FC<TableCellProps> = ({ children, disabled }) => {
  return <StyledTableCell disabled={disabled}>{children}</StyledTableCell>;
};

export default TableCell;
