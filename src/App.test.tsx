import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header of the application', () => {
  render(<App />);
  const header = screen.getByText(/Where is my test tube/i);
  expect(header).toBeInTheDocument();
});
