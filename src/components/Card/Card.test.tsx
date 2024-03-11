import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import '@testing-library/jest-dom';


jest.mock('./1.jpg', () => 'test-file-stub');

test('renders Card component', () => {
  const { getByTestId, getByText } = render(<Card title="Test" content="Content" />);
  const cardElement = getByTestId('card');
  const titleElement = getByText('Test');
  const contentElement = getByText('Content');

  expect(cardElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});

test('changes background color when disabled', () => {
  const { getByTestId } = render(<Card title="Test" content="Content" />);
  const cardElement = getByTestId('card');

  expect(cardElement).toHaveStyle('background-color: #eee;');
});
