import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface TableRowProps {
  children: ReactNode;
  disabled?: boolean;
}

const StyledTableRow = styled.tr<{ disabled?: boolean }>`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

const TableRow: React.FC<TableRowProps> = ({ children, disabled }) => {
  return <StyledTableRow disabled={disabled}>{children}</StyledTableRow>;
};

export default TableRow;
