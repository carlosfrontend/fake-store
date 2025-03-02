import { describe, it, vi, beforeEach, expect } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Global mock for toast.
vi.mock('@pheralb/toast', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn()
  }
}));

// Mock the local storage hook to do nothing.
vi.mock('../../hooks/useSetDataToLocalStorage', () => ({
  useSetDataToLocalStorage: () => {}
}));

// Our test product.
const product = {
  id: 1,
  title: 'Test Product',
  price: 50.0,
  description: 'A sample product',
  category: 'electronics',
  image: 'test.jpg'
};

describe('ProductDetail Component - Full Coverage', () => {
  // Reset modules, cleanup DOM, and clear mocks before each test.
  beforeEach(() => {
    vi.resetModules();
    cleanup();
    vi.clearAllMocks();
  });

  describe('When cart is empty (new product)', () => {
    let setCartItemsMock;
    let ProductDetail;
    beforeEach(async () => {
      setCartItemsMock = vi.fn();
      // Set up useOutletContext to return an empty cart.
      vi.doMock('react-router-dom', () => ({
        useOutletContext: () => ({
          cartItems: [],
          setCartItems: setCartItemsMock
        })
      }));
      // Dynamically import the component so it picks up the above mock.
      const mod = await import('./ProductDetail');
      ProductDetail = mod.ProductDetail;
      render(<ProductDetail product={product} />);
    });

    it('renders product details correctly', () => {
      expect(screen.getByTestId('product-detail')).toBeInTheDocument();
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText('$ 50')).toBeInTheDocument();
      expect(screen.getByAltText('Test Product')).toBeInTheDocument();
    });

    it('updates amount when user types a number', async () => {
      const user = userEvent.setup();
      const amountInput = screen.getByRole('spinbutton');
      await user.clear(amountInput);
      await user.type(amountInput, '3');
      expect(amountInput.value).toBe('3');
    });

    it('increments the amount when clicking the + button', async () => {
      const user = userEvent.setup();
      const incrementButton = screen.getByTestId('plus-1');
      const amountInput = screen.getByRole('spinbutton');
      expect(amountInput.value).toBe('1');
      await user.click(incrementButton);
      expect(amountInput.value).toBe('2');
    });

    describe('handleDecrement function', () => {
      it('does not decrement below 1', async () => {
        const user = userEvent.setup();
        const decrementButton = screen.getByTestId('minus-1');
        const amountInput = screen.getByRole('spinbutton');
        // Initial amount is 1; clicking decrement should not change it.
        expect(amountInput.value).toBe('1');
        await user.click(decrementButton);
        expect(amountInput.value).toBe('1');
      });

      it('decrements when amount is greater than 1', async () => {
        const user = userEvent.setup();
        const incrementButton = screen.getByTestId('plus-1');
        const decrementButton = screen.getByTestId('minus-1');
        const amountInput = screen.getByRole('spinbutton');
        // Increase amount to 3.
        await user.click(incrementButton);
        await user.click(incrementButton);
        expect(amountInput.value).toBe('3');
        // Now clicking decrement should reduce it to 2.
        await user.click(decrementButton);
        expect(amountInput.value).toBe('2');
      });
    });

    it('shows error toast if amount is 0 when adding to cart', async () => {
      const user = userEvent.setup();
      const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
      const amountInput = screen.getByRole('spinbutton');
      await user.clear(amountInput);
      await user.type(amountInput, '0');
      await user.click(addToCartButton);
      const { toast } = await import('@pheralb/toast');
      expect(toast.error).toHaveBeenCalledTimes(1);
      expect(toast.error).toHaveBeenCalledWith({
        text: 'Amount can not be 0 😞 !',
        description: 'Try setting amount to 1 as minimum'
      });
    });

    it('adds a new product to the cart with correct data', async () => {
      const user = userEvent.setup();
      const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
      // With default amount (1), clicking Add to Cart should append the product.
      await user.click(addToCartButton);
      expect(setCartItemsMock).toHaveBeenCalledTimes(1);
      expect(setCartItemsMock).toHaveBeenCalledWith([
        {
          ...product,
          amount: 1,
          subtotal: 50.0
        }
      ]);
      const { toast } = await import('@pheralb/toast');
      expect(toast.success).toHaveBeenCalledWith({
        text: '1 Product added to cart 👌',
        description: '✨ ' + product.title
      });
    });

    it('adds multiple quantities of the product to the cart', async () => {
      const user = userEvent.setup();
      const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
      const amountInput = screen.getByRole('spinbutton');
      // Set amount to 2.
      await user.clear(amountInput);
      await user.type(amountInput, '2');
      await user.click(addToCartButton);
      expect(setCartItemsMock).toHaveBeenCalledTimes(1);
      expect(setCartItemsMock).toHaveBeenCalledWith([
        {
          ...product,
          amount: 2,
          subtotal: 100.0
        }
      ]);
      const { toast } = await import('@pheralb/toast');
      expect(toast.success).toHaveBeenCalledWith({
        text: '2 Products added to cart 👌',
        description: '✨ ' + product.title
      });
    });
  });

  describe('When product is already in the cart', () => {
    let setCartItemsMock;
    let ProductDetail;
    beforeEach(async () => {
      setCartItemsMock = vi.fn();
      // Set up a cart with the current product already in it and another different product.
      const otherProduct = {
        id: 2,
        title: 'Other Product',
        price: 30.0,
        description: 'Another product',
        category: 'electronics',
        image: 'other.jpg',
        amount: 1,
        subtotal: 30.0
      };
      vi.doMock('react-router-dom', () => ({
        useOutletContext: () => ({
          cartItems: [
            { ...product, amount: 1, subtotal: 50.0 },
            otherProduct
          ],
          setCartItems: setCartItemsMock
        })
      }));
      const mod = await import('./ProductDetail');
      ProductDetail = mod.ProductDetail;
      render(<ProductDetail product={product} />);
    });

    it('updates the existing product in the cart with correct data', async () => {
      const user = userEvent.setup();
      const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
      await user.click(addToCartButton);
      // For the product with id === product.id, amount increases from 1 to 2 and subtotal from 50 to 100.
      // The other product should remain unchanged.
      expect(setCartItemsMock).toHaveBeenCalledTimes(1);
      expect(setCartItemsMock).toHaveBeenCalledWith([
        {
          ...product,
          amount: 2,
          subtotal: 100.0
        },
        {
          id: 2,
          title: 'Other Product',
          price: 30.0,
          description: 'Another product',
          category: 'electronics',
          image: 'other.jpg',
          amount: 1,
          subtotal: 30.0
        }
      ]);
      const { toast } = await import('@pheralb/toast');
      // Note: In this branch, the toast uses the current state's amount (which remains 1) for its message.
      expect(toast.success).toHaveBeenCalledWith({
        text: '1 Product added to cart 👌',
        description: '✨ ' + product.title
      });
    });
  });
});
