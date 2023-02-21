import { render, screen } from '@testing-library/react';
import { Footer } from '../footer';

describe('renders Footer', () => {
    it('displays an "About Us" text', async () => {
        render(<Footer />);
        expect(screen.getByText('About us')).toBeInTheDocument();
    });

    it('displays a "Linkedin" text', async () => {
        render(<Footer />);
        expect(screen.getByText('Linkedin')).toBeInTheDocument();
    });
  });