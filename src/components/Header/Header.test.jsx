import {  render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Header cartItemsCount={0} />
    </BrowserRouter>
  );
});
describe('Header', () => {
  it('should render correctly', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should render the brand logo', () => {
    expect(screen.getByAltText('brand logo')).toBeInTheDocument();
  });
  it('should render the "Fake Store" text', () => {
    expect(screen.getByText('Fake Store')).toBeInTheDocument();
  });

  it('sould have a navigation menu', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render the links Home, Shop and Shopping Cart', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByTitle('Shopping Cart')).toBeInTheDocument();
  });

  it('should render the cart icon', () => {
    expect(screen.getByTitle('Shopping Cart')).toBeInTheDocument();
  });
  it('should render the cart count', () => {
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  it('should render the cart count whit an amount of 4 products', () => {
    render(
      <BrowserRouter>
        <Header cartItemsCount={4} />
      </BrowserRouter>
    );
    expect(screen.getByText('4')).toBeInTheDocument();
  });
});
