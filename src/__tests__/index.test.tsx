import HomePage from '@/pages';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading', {
      name: /Next.JS Code Sample/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
