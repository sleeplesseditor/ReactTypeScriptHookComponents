import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Header link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('React Hook Components');
  expect(linkElement).toBeInTheDocument();
});
