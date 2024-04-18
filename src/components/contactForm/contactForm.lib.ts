// This file will contain the validation functions for email and phone number.

export const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email);
  };
  
  export const isValidPhoneNumber = (phoneNumber: string): boolean => {
    const digits = phoneNumber.replace(/\D/g, ''); 
    return digits.length === 10; 
  };
  