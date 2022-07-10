import Home from '@/pages/home';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Ecommerce demo/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
