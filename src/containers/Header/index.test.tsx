import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './index';

describe('Header container', () => {
  it('renders title', () => {
    render(<Header />);
    const linkElement = screen.getByText(/Reddit Pics/i);
    expect(linkElement).toBeInTheDocument();
  });
});
