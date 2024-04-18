import React from 'react';
import styled from 'styled-components';

interface TableCellProps {
  children: React.ReactNode;
  disabled?: boolean;
  theme?: 'light' | 'dark';  // Optional theme prop
  backgroundColor?: string;
}

const StyledTableCell = styled.td<{ disabled?: boolean; theme?: 'light' | 'dark'; backgroundColor?: string }>`
  padding: 10px; 
  border: 1px solid #ddd; 
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  font-size: 16px; 
  color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};
  background-color: ${props => props.backgroundColor || (props.theme === 'dark' ? '#333' : 'transparent')};

  &:hover {
    background-color: ${props => props.backgroundColor ? props.backgroundColor : (props.theme === 'dark' ? '#555' : '#f2f2f2')};
  }
`;

const TableCell: React.FC<TableCellProps> = ({ children, disabled = false, theme = 'light', backgroundColor }) => {
  return <StyledTableCell disabled={disabled} theme={theme} backgroundColor={backgroundColor}>{children}</StyledTableCell>;
};

export default TableCell;
