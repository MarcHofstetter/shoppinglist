import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    it('zeigt den App-Titel an', () => {
        render(<Header />);
        expect(screen.getByText('Einkaufsliste App')).toBeInTheDocument();
    });

    it('zeigt Navigationslinks an', () => {
        render(<Header />);
        expect(screen.getByText('Neue Liste erstellen')).toBeInTheDocument();
        expect(screen.getByText('Liste beitreten')).toBeInTheDocument();
        expect(screen.getByText('Einkaufsliste anzeigen')).toBeInTheDocument();
    });
});
