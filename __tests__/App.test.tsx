import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders the app title correctly', () => {
    render(<App />);
    const titleElement = screen.getByText('La Tortuga EMR');
    expect(titleElement).toBeTruthy();
  });

  it('renders the app subtitle correctly', () => {
    render(<App />);
    const subtitleElement = screen.getByText(
      'Offline-first Medical & Dental Intake System'
    );
    expect(subtitleElement).toBeTruthy();
  });

  it('renders the app container', () => {
    render(<App />);
    const container = screen.getByTestId('app-container');
    expect(container).toBeTruthy();
  });

  it('matches snapshot', () => {
    const tree = render(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
