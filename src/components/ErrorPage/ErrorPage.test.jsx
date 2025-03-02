import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { ErrorPage } from './ErrorPage';
import { BrowserRouter } from 'react-router-dom';

describe('ErrorPage', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    );
  });

  it('should render an alert icon', () => {
    expect(screen.getByTitle(/alert icon/i)).toBeInTheDocument();
  });

  it('should render the "Page not found 404" text', () => {
    expect(screen.getByText(/Page not found 404/i)).toBeInTheDocument();
  });

  it('should render the "Back to home" link', () => {
    expect(
      screen.getByRole('link', { name: /back to home/i })
    ).toBeInTheDocument();
  });
});
