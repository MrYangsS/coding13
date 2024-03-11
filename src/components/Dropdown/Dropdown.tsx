import React, { useState } from 'react';
import styled from 'styled-components';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;

}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownList = styled.ul`
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
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #342123;
  }
`;

const DropdownButton = styled.button`

`;

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
    const handleSelect = (option: string) => {
      onSelect(option); 
      setSelectedOption(option); 
      setIsOpen(false); 
    };
  
    return (
      <DropdownContainer>
        <DropdownButton onClick={() => setIsOpen(!isOpen)}>
          {selectedOption || 'option'}
        </DropdownButton>
        {isOpen && (
          <DropdownList>
            {options.map((option, index) => (
              <DropdownItem key={index} onClick={() => handleSelect(option)}>
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    );
  };
  

export default Dropdown;
