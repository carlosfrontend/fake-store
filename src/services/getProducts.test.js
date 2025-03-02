import { getProducts } from './getProducts';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

describe('getProducts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should fetch products and set them', async () => {
    const mockProducts = [
      { id: 1, title: 'Product 1' },
      { id: 2, title: 'Product 2' }
    ];

    const mockFetch = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => mockProducts
    });

    const setProducts = vi.fn();
    const setLoading = vi.fn();
    const setError = vi.fn();

    await getProducts({ setProducts, setLoading, setError });

    expect(setProducts).toHaveBeenCalledWith(mockProducts);
    expect(setLoading).toHaveBeenCalledWith(false);
    expect(setError).not.toHaveBeenCalled();
    expect(mockFetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
  });

  it('should handle empty products', async () => {
    const mockProducts = [];

    const mockFetch = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => mockProducts
    });

    const setProducts = vi.fn();
    const setLoading = vi.fn();
    const setError = vi.fn();

    await getProducts({ setProducts, setLoading, setError });

    expect(setProducts).toHaveBeenCalledWith(mockProducts);
    expect(setLoading).toHaveBeenCalledWith(false);
    expect(setError).not.toHaveBeenCalled();
    expect(mockFetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
  });

  it('should handle network error', async () => {
    const mockFetch = vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('Network response was not ok'));

    const setProducts = vi.fn();
    const setLoading = vi.fn();
    const setError = vi.fn();

    await getProducts({ setProducts, setLoading, setError });

    expect(setProducts).not.toHaveBeenCalled();
    expect(setLoading).toHaveBeenCalledWith(false);
    expect(setError).toHaveBeenCalledWith('Network response was not ok');
    expect(mockFetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
  });

  it('should handle non-ok response', async () => {
    const mockFetch = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: false
    });

    const setProducts = vi.fn();
    const setLoading = vi.fn();
    const setError = vi.fn();

    await getProducts({ setProducts, setLoading, setError });

    expect(setProducts).not.toHaveBeenCalled();
    expect(setLoading).toHaveBeenCalledWith(false);
    expect(setError).toHaveBeenCalledWith('Network response was not ok');
    expect(mockFetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
  });
});
