import { describe, it, vi, beforeEach, afterEach, expect, beforeAll } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Cart } from './Cart';
import { useOutletContext } from 'react-router-dom';

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

beforeAll(() => {
    globalThis.window.scrollTo = vi.fn();
  });
  

describe('Cart Component', () => {
  beforeEach(() => {
    vi.mocked(useOutletContext).mockReturnValue({
      cartItems: [
        { id: 1, title: 'Product 1', price: 10, amount: 2 },
        { id: 2, title: 'Product 2', price: 15, amount: 1 },
      ],
      setCartItems: vi.fn(),
    });
    
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('renders HeroCartCard with correct quantity', () => {
    expect(
      screen.getByText(/you have 3 products in your cart/i)
    ).toBeInTheDocument();
  });

  it('renders ShoppingList when there are items in the cart', () => {
    expect(screen.getByText('Shopping List')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('renders empty cart message when no items are in the cart', () => {
    cleanup();
    vi.mocked(useOutletContext).mockReturnValue({ cartItems: [], setCartItems: vi.fn() });
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(screen.getByText(/your cart is empty !/i)).toBeInTheDocument();
  });
});
