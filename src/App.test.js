import { render, screen } from '@testing-library/react';
import App from './App';

describe('main text information', () => {

    test('renders company name and slogan', () => {
      render(<App />);

      const companyName = screen.getByText(/death wish coffee/i);
      const companeSlogan = screen.getByText(/world's strongest coffee/i);

      expect(companyName).toBeInTheDocument();
      expect(companeSlogan).toBeInTheDocument();
    });

})

