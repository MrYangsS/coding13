import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TableFooterProps {
  children: ReactNode;
  disabled?: boolean;
  backgroundColor?: string; 
}

const StyledTableFooter = styled.tfoot<{ disabled?: boolean, backgroundColor?: string }>`
  background-color: ${props => props.backgroundColor || '#f0f0f0'}; // Use passed background color or default
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

const TableFooter: React.FC<TableFooterProps> = ({ children, disabled, backgroundColor }) => {
  return <StyledTableFooter disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledTableFooter>;
};

export default TableFooter;
