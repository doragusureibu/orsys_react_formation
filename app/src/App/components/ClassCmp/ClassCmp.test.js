import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClassCmp from './ClassCmp';

describe('<ClassCmp />', () => {
  test('it should mount', () => {
    render(<ClassCmp />);
    
    const classCmp = screen.getByTestId('ClassCmp');

    expect(classCmp).toBeInTheDocument();
  });
});