import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Home', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('img', {
        name: /shopping bags/i
      })
    ).toBeInTheDocument();
  });

  it('should render the "Welcome to Fake Store" text', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', {
        name: /welcome to fake store/i
      })).toBeInTheDocument();
  });

  it('should render the "Your one stop shop for all your shopping needs" text', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', {
        name: /your one stop shop for all your shopping needs/i
      })).toBeInTheDocument();
  });

  it('should render the "Shop Now!" button', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText( 
        'Shop Now!'
      )).toBeInTheDocument();
  });
});
