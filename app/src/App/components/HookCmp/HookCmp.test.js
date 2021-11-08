import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HookCmp from './HookCmp';

describe('<HookCmp />', () => {
  test('it should mount', () => {
    render(<HookCmp />);
    
    const hookCmp = screen.getByTestId('HookCmp');

    expect(hookCmp).toBeInTheDocument();
  });
});