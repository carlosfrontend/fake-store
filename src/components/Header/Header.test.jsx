import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {

  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Header cartItemsCount={0} />
      </BrowserRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

    it('should render the brand logo', () => {
        render(
          <BrowserRouter>
            <Header cartItemsCount={0} />
          </BrowserRouter>
        );
        expect(screen.getByAltText('brand logo')).toBeInTheDocument();
    })
  it('should render the "Fake Store" text', () => {
    render(
      <BrowserRouter>
        <Header cartItemsCount={0} />
      </BrowserRouter>
    );
   
    expect(screen.getByText('Fake Store')).toBeInTheDocument();
  });

  it('sould have a navigation menu', () => {
    render(
      <BrowserRouter>
        <Header cartItemsCount={0} />
      </BrowserRouter>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render the links', () => {
    render(
      <BrowserRouter>
        <Header cartItemsCount={0} />
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByTitle('Shopping Cart')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
