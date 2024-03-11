import React, { useState } from 'react';
import styled from 'styled-components';

interface RadioProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const Input = styled.input`
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Radio: React.FC<RadioProps> = ({ label, checked: checkedProp = false, onChange, disabled = false }) => {
  const [checked, setChecked] = useState(checkedProp);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label>
      <Input
        type="radio"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      {label}
    </label>
  );
};

export default Radio;
