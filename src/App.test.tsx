import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders good luck', () => {
    render(<App />);
    const linkElement = screen.getByText(/Good luck/i);
    expect(linkElement).toBeInTheDocument();
});
