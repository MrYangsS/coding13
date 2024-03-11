import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface TableFooterProps {
  children: ReactNode;
  disabled?: boolean;
}

const StyledTableFooter = styled.tfoot<{ disabled?: boolean }>`
  background-color: #f0f0f0;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

const TableFooter: React.FC<TableFooterProps> = ({ children, disabled }) => {
  return <StyledTableFooter disabled={disabled}>{children}</StyledTableFooter>;
};

export default TableFooter;
