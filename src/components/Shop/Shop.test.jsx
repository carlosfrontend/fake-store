import {
  cleanup,
  render,
  screen,
  waitFor,
  act,
  fireEvent
} from '@testing-library/react';

import { useOutletContext } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Shop } from './Shop';
import { useProducts } from '../../hooks/useProducts';

vi.mock('../../hooks/useProducts');
vi.mock('react-router-dom', () => ({
  useOutletContext: vi.fn(),
  Link: ({ children }) => children
}));

describe('Shop Component', () => {
  const mockSetFilters = vi.fn();

  beforeEach(() => {
    useProducts.mockReturnValue({
      products: [
        {
          title: 'Test Product 1',
          price: 50.0,
          description: 'A sample product',
          category: 'electronics',
          image: 'test1.jpg',
          id: 1
        },
        {
          title: 'Test Product 2',
          price: 200.0,
          description: 'A sample product',
          category: 'jewelery',
          image: 'test2.jpg',
          id: 2
        }
      ],
      loading: false,
      error: null
    });
    useOutletContext.mockReturnValue({
      filters: { minPrice: 0, category: 'all' },
      setFilters: mockSetFilters
    });
  });

  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should render a product', () => {
    useProducts.mockReturnValue({
      products: [
        {
          title: 'Test Product',
          price: 50.0,
          description: 'A sample product',
          category: 'electronics',
          image: 'test.jpg',
          id: 1
        }
      ],
      loading: false,
      error: null
    });
    render(<Shop />);
    expect(
      screen.getByRole('heading', { name: /test product/i })
    ).toBeInTheDocument();
  });

  it('should render a loader', () => {
    useProducts.mockReturnValue({ products: [], loading: true, error: null });
    render(<Shop />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('handle category change', async () => {
    render(<Shop />);

    // Verifica que el combobox tenga el valor correcto antes de disparar el evento
    const categorySelect = screen.getByRole('combobox', { name: /category/i });
    expect(categorySelect.value).toBe('all');

    // Dispara el evento de cambio
    await act(async () => {
      fireEvent.change(categorySelect, { target: { value: 'jewelery' } });
    });

    // Espera a que el mock de setFilters se haya llamado con los valores correctos
    waitFor(() => {
      expect(mockSetFilters).toHaveBeenCalledWith({
        minPrice: 0,
        category: 'jewelery'
      });
    });

    // Verifica que el valor del combobox se haya actualizado correctamente
    expect(categorySelect.value).toBe('jewelery');
    vi.clearAllMocks();
  });

  it('handle price change', () => {
    render(<Shop />);

    const slider = screen.getByTestId('price-input');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveValue('0');

    act(() => {
      fireEvent.change(slider, { target: { value: 100 } });
    });
  });

  it('should render the text "No products found with the selected filters."', async () => {
    useProducts.mockReturnValue({
      products: [
        {
          title: 'Test Product 1',
          price: 50.0,
          description: 'A sample product',
          category: 'electronics',
          image: 'test1.jpg',
          id: 1
        },
        {
          title: 'Test Product 2',
          price: 200.0,
          description: 'A sample product',
          category: 'jewelery',
          image: 'test2.jpg',
          id: 2
        }
      ],
      loading: false,
      error: null
    });
    useOutletContext.mockReturnValue({
      filters: { minPrice: 1000, category: 'all' },
      setFilters: mockSetFilters
    });

    render(<Shop />);
    expect(screen.getByText(/No products found with the selected filters./i))
      .toBeInTheDocument;
  });

  it('should render an Network Error', () => {
    useProducts.mockReturnValue({
      products: [],
      loading: false,
      error: 'Error'
    });
    render(<Shop />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
