import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';

describe('test finding tube', () => {
  test('should show location of tube by its id', async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Enter tube ID to locate it/i);
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, {
      target: { value: '1' },
    });

    expect(await screen.findByText('Your tube is located:')).toBeVisible();
    expect(await screen.findByText('Name: Rack, ID: 4')).toBeVisible();
    expect(await screen.findByText('Name: Fridge 1, ID: 2')).toBeVisible();
    expect(await screen.findByText('Name: Lab 1, ID: 1')).toBeVisible();
  });

  test('should show info that application cannot find tube for wrong id', async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Enter tube ID to locate it/i);
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, {
      target: { value: '111' },
    });

    expect(await screen.findByText("Sorry we couldn't find your tube")).toBeVisible();
  });
});
