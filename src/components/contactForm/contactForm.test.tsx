import { isValidEmail, isValidPhoneNumber } from './contactForm.lib';

describe('Validation Library', () => {
  describe('isValidEmail', () => {
    it('should validate correct email formats', () => {
      expect(isValidEmail('test@example.com')).toBeTruthy();
      expect(isValidEmail('test.email+alias@example.com')).toBeTruthy();
    });

    it('should invalidate incorrect email formats', () => {
      expect(isValidEmail('test@')).toBeFalsy();
      expect(isValidEmail('test@example')).toBeFalsy();
    });
  });

  describe('isValidPhoneNumber', () => {
    it('should validate a phone number with exactly 10 digits', () => {
      expect(isValidPhoneNumber('1234567890')).toBeTruthy();
    });

    it('should invalidate phone numbers that are not exactly 10 digits', () => {
      expect(isValidPhoneNumber('12345')).toBeFalsy();
      expect(isValidPhoneNumber('123456789012345')).toBeFalsy();
    });
  });
});
