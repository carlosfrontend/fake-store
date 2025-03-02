import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ShoppingList from './ShoppingList';
import { toast } from '@pheralb/toast';
import userEvent from '@testing-library/user-event';

vi.mock('@pheralb/toast', () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn()
  }
}));

describe('ShoppingList Handlers', () => {
  let cartItems, setCartItems;
  const user = userEvent.setup();

  beforeEach(() => {
    cartItems = [
      { id: 1, title: 'Item 1', price: 10, amount: 2, image: 'img1.jpg' },
      { id: 2, title: 'Item 2', price: 20, amount: 1, image: 'img2.jpg' }
    ];
    setCartItems = vi.fn();
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  });

  it('handleAmountChange updates item amount', async () => {
    render(<ShoppingList cartItems={cartItems} setCartItems={setCartItems} />);
    const input = screen.getByDisplayValue('2');
    await fireEvent.change(input, { target: { value: '3' } });
    expect(setCartItems).toHaveBeenCalled();
    waitFor(() => {
      expect(setCartItems).toHaveBeenCalledWith([
        { id: 1, title: 'Item 1', price: 10, amount: 3, image: 'img1.jpg' },
        { id: 2, title: 'Item 2', price: 20, amount: 1, image: 'img2.jpg' }
      ]);
    })
  });

  it('handleAmountChange does not update if new amount is less than 1', async () => {
    render(<ShoppingList cartItems={cartItems} setCartItems={setCartItems} />);
    const input = screen.getByDisplayValue('2');
    await fireEvent.change(input, { target: { value: '0' } });
    expect(setCartItems).not.toHaveBeenCalled();
  });

  it('handleAmountChange updates localStorage correctly', async() => {
    render(<ShoppingList cartItems={cartItems} setCartItems={setCartItems} />);
    const input = screen.getByDisplayValue('2');
     fireEvent.change(input, { target: { value: '5' } });
    expect(localStorage.getItem('cartItems')).toContain('5');
  });

   
  it('handleIncrement increases item amount', async () => {
    render(<ShoppingList cartItems={cartItems} setCartItems={setCartItems} />);
    const incrementButton = screen.getAllByText('+')[0];
    await user.click(incrementButton);
    expect(setCartItems).toHaveBeenCalled();
  });

  it('handleDecrement decreases item amount', async () => {
    render(<ShoppingList cartItems={cartItems} setCartItems={setCartItems} />);
    const decrementButton = screen.getAllByText('-')[0];
    await user.click(decrementButton);
    expect(setCartItems).toHaveBeenCalled();
  });

  it('removeItem removes an item from the cart', async () => {
    
   
    render(<ShoppingList cartItems={cartItems} setCartItems={setCartItems} />);
    const removeButton = screen.getByTestId('remove-item-1');
    await user.click(removeButton);
    expect(setCartItems).toHaveBeenCalledWith([cartItems[1]]);
    expect(toast.error).toHaveBeenCalled();
  });

  it('clearCart clears the cart', async() => {
    render(<ShoppingList cartItems={cartItems} setCartItems={setCartItems} />);
    const clearButton = screen.getByText(/clear cart/i);
    await user.click(clearButton);
    expect(setCartItems).toHaveBeenCalledWith([]);
    expect(toast.success).toHaveBeenCalled();
  });
});
