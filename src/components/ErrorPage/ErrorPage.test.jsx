import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ErrorPage } from './ErrorPage';
import { BrowserRouter } from 'react-router-dom';

describe('ErrorPage', () => {
  it('should render an alert icon', () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
    expect(screen.getByTitle(/alert icon/i)).toBeInTheDocument();
  });

  it('should render the "Page not found 404" text', () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/Page not found 404/i)).toBeInTheDocument();
  });

  it('should render the "Back to home" link', () => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/Back to home/i)).toBeInTheDocument();
  });
});
