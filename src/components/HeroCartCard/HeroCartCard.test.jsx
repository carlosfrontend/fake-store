import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroCartCard from './HeroCartCard';

import { BrowserRouter } from 'react-router-dom';

describe('HeroCartCard', () => {
  it('should render correctly with 5 products in the cart', () => {
    render(<HeroCartCard productsQuantity={5} />);
    expect(
      screen.getByRole('img', {
        name: /a drawing of a woman making a purchase\./i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /you have 5 products in your cart 😊 !/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /view the shopping list 👇/i })
    ).toBeInTheDocument();
  });

  it('should render the correct text and link if the cart is empty', () => {
    render(
      <BrowserRouter>
        <HeroCartCard productsQuantity={0} />
      </BrowserRouter>
    );
    
    expect(
      screen.getByRole('heading', {
        name: /Your cart is empty 😔 !/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /buy something/i })
    ).toBeInTheDocument();
    
    expect(screen.getByRole('link', { name: /buy something/i }))
      .toHaveAttribute('href', '/shop')
      .toBeVisible();
  });
});
