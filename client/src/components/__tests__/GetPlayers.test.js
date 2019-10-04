import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import GetPlayers from '../GetPlayers';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(
    <GetPlayers />
  );
});

describe('Get Players Component', () => {
  it('debug the output', () => {
    tools.debug();
  });
  
  it('includes a heading', () => {
    const heading = tools.queryByText(/Players List/i);
    expect(heading).toBeInTheDocument();
  });
  
  it('check heading with test id', () => {
    const headingText = tools.queryByTestId('player-head');
    expect(headingText).toBeInTheDocument();
  });

  it('contains name country and hits keys', () => {
    
  })
})