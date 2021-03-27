import { render, screen } from '@testing-library/react';
import App from './App';
import Counter from './components/counter';

test('renders learn react link', () => {
  render(<Counter/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
