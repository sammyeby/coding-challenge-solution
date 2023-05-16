import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
  const spyLoStoRemove = jest.spyOn(localStorage, 'setItem');


  render(<App />);
  const linkElement = screen.getByText(/Challenge for the job opening Senior Frontend Engineer/i);
  expect(spyLoStoRemove).toHaveBeenCalled();
  // expect(spyLoStoRemove).toHaveBeenCalledTimes(2)
  expect(linkElement).toBeInTheDocument();
});
