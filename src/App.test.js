import { render, screen } from '@testing-library/react';
import MarkdownPreviewer from './App';

test('renders Markdown Previewer heading', () => {
  render(<MarkdownPreviewer />);
  const headingElement = screen.getByText(/Markdown Previewer/i);
  expect(headingElement).toBeInTheDocument();
});
