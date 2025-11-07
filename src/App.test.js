import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome header with user name', () => {
  render(<App />);
  expect(screen.getByText(/Matthias/i)).toBeInTheDocument();
});
