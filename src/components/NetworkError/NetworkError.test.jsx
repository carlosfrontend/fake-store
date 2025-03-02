import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { NetworkError } from './NetworkError';
import { BrowserRouter } from 'react-router-dom';

describe('NetworkError', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <NetworkError />
      </BrowserRouter>
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('should render the alert icon', () => {
    render(
      <BrowserRouter>
        <NetworkError />
      </BrowserRouter>
    );
    const alert = screen.getByRole('alert');

  expect(within(alert).getByRole('img')).toBeInTheDocument();
  
  });

  it('should render the error message', () => {
    render(
      <BrowserRouter>
        <NetworkError error="Network Error" />
      </BrowserRouter>
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Network Error');
  });

  it('should render the "Back to home" link', () => {
    render(
      <BrowserRouter>
        <NetworkError />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('link', { name: /back to home/i, href: '/' })
    ).toBeInTheDocument();
  });
});
