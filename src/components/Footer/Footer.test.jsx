import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "./Footer";


describe('Footer', () => {
    it('should render correctly', () => {
        const { container } = render(<Footer />);
        expect(container).toBeVisible();
       
    })

    it('should render the Twitter icon', () => {
        render(<Footer />);
        expect(screen.getByTitle(/xtwitter/i)).toBeInTheDocument();
    })

    it('should render the Linkedin icon', () => {
        render(<Footer />);
        expect(screen.getByTitle(/linkedin/i)).toBeInTheDocument();
    })

    it('should render the Github icon', () => {
        render(<Footer />);
        expect(screen.getByTitle(/github/i)).toBeInTheDocument();
    })

    it('should render the copyright text', () => {
        render(<Footer />);
       expect(screen.getByText(/© fake store - 2025/i)).toBeInTheDocument();
    })
});