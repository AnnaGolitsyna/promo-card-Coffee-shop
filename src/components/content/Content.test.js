import { render, screen, fireEvent } from '@testing-library/react';
import Content from './Content';

describe('Content component', () => {
  test('renders buttons text', () => {
    render(<Content />);
    const messageBtn = screen.getByText('MESSAGE');
    const followBtn = screen.getByText('FOLLOW');

    expect(messageBtn).toBeInTheDocument();
    expect(followBtn).toBeInTheDocument();
  });

  test('toggles follow btn', () => {
    render(<Content />);

    const followBtn = screen.getByText('FOLLOW');

    fireEvent.click(followBtn);
    expect(followBtn).toHaveTextContent('unfollow');

    fireEvent.click(followBtn);
    expect(followBtn).toHaveTextContent('FOLLOW');
  });
});
