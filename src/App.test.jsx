import {it,describe, expect} from 'vitest'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
    it('should render correctly', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        expect(screen.getByRole('banner')).toBeInTheDocument();
    });
});