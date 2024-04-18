// contactForm.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { isValidEmail, isValidPhoneNumber } from './contactForm.lib';

const Form = styled.form<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
`;

const Input = styled.input<{ disabled?: boolean }>`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? '#f3f3f3' : 'white')};
  color: ${(props) => (props.disabled ? '#d3d3d3' : 'black')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

export interface ContactFormProps {
  onSubmit: (data: { firstName: string; lastName: string; email: string; phone: string }) => void;
  backgroundColor?: string;
  disabled?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, backgroundColor, disabled }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [phone, setPhone] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidEmail(email) && isValidPhoneNumber(phone)) {
      onSubmit({ firstName, lastName, email, phone });
    } else {
      alert('Please enter a valid email or phone num.');
    }
  };

  return (
    <Form backgroundColor={backgroundColor} onSubmit={handleSubmit}>
      <Input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name"/>
      <Input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name"/>
      <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
      <Input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number" />
      <Button text="Submit" onClick={() => {}} theme="img" disabled={disabled} backgroundColor="#007bff" />
    </Form>
  );
};

export default ContactForm;
