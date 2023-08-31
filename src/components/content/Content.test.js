import { render, screen } from '@testing-library/react';
import Content from './Content';

describe('Content component', () => {
  test('renders buttons text', () => {
    render(<Content />);
    const messageBtn = screen.getByText('MESSAGE');
    const followBtn = screen.getByText('FOLLOW');

    expect(messageBtn).toBeInTheDocument();
    expect(followBtn).toBeInTheDocument();
  });
});
