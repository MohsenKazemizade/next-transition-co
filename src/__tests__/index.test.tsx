// __tests__/index.test.tsx
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
