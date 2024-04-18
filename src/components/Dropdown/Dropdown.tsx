import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

interface DropdownListProps {
  disabled: boolean;
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownList = styled.ul<DropdownListProps>`
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  display: ${props => props.disabled ? 'none' : 'block'};
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const DropdownButton = styled.button`
  padding: 8px 16px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, backgroundColor, disabled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    if (!disabled) {
      const selected = options.find(opt => opt.id === optionId);
      setSelectedOption(selected ? selected.label : null);
      setIsOpen(false);
      if (onSelect && selected) {
        onSelect(selected.id);
      }
    }
  };

  return (
    <DropdownContainer>
      <DropdownButton 
        onClick={() => !disabled && setIsOpen(!isOpen)} 
        disabled={disabled} 
        style={{ backgroundColor }}
        data-testid="dropdown-button">
        {selectedOption || 'Select an option'}
      </DropdownButton>
      {isOpen && (
        <DropdownList disabled={disabled}>  
          {options.map(option => (
            <DropdownItem key={option.id} onClick={() => handleSelect(option.id)}>
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};


export default Dropdown;
