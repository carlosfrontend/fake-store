import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });
  it('should render correctly', () => {
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should render the Twitter icon', () => {
    expect(screen.getByTitle(/xtwitter/i)).toBeInTheDocument();
  });

  it('should render the Linkedin icon', () => {
    expect(screen.getByTitle(/linkedin/i)).toBeInTheDocument();
  });

  it('should render the Github icon', () => {
    expect(screen.getByTitle(/github/i)).toBeInTheDocument();
  });

  it('should render the copyright text', () => {
    expect(screen.getByText(/© fake store - 2025/i)).toBeInTheDocument();
  });
});
