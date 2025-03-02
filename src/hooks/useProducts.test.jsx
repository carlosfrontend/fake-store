import { render, screen, waitFor } from '@testing-library/react';
import { useProducts } from './useProducts';
import { getProducts } from '../services/getProducts';
import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../services/getProducts');

const TestComponent = () => {
  const { products, loading, error } = useProducts();
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

describe('useProducts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch products and set them', async () => {
    const mockProducts = [
      { id: 1, title: 'Product 1' },
      { id: 2, title: 'Product 2' }
    ];

    getProducts.mockImplementation(({ setProducts, setLoading, setError }) => {
      setProducts(mockProducts);
      setLoading(false);
      setError(null);
    });

    render(<TestComponent />);

    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('Product 2')).toBeInTheDocument();
    });

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.queryByText('Error:')).not.toBeInTheDocument();
  });

  it('should handle network error', async () => {
    getProducts.mockImplementation(({ setProducts, setLoading, setError }) => {
      setProducts([]);
      setLoading(false);
      setError('Network response was not ok');
    });

    render(<TestComponent />);

    await waitFor(() => {
      expect(screen.getByText('Error: Network response was not ok')).toBeInTheDocument();
    });

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.queryByText('Product 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
  });

  it('should handle non-ok response', async () => {
    getProducts.mockImplementation(({ setProducts, setLoading, setError }) => {
      setProducts([]);
      setLoading(false);
      setError('Network response was not ok');
    });

    render(<TestComponent />);

    await waitFor(() => {
      expect(screen.getByText('Error: Network response was not ok')).toBeInTheDocument();
    });

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.queryByText('Product 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
  });
});