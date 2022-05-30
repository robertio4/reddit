import React from 'react';
import { render, screen } from '@testing-library/react';
import LoaderButton from './index';

const clickButton = jest.fn();

describe('Loader button', () => {
  it('should render a button with children and loader when typed', () => {
    render(
      <LoaderButton loading={false} onClick={clickButton}>
        Text
      </LoaderButton>,
    );
    const primaryButton = screen.getByRole('button');
    expect(primaryButton).toBeInTheDocument();
    expect(primaryButton.textContent).toBe('Text');
  });

  it('should render a button without children', () => {
    render(
      <LoaderButton loading onClick={clickButton}>
        Text
      </LoaderButton>,
    );

    const primaryButton = screen.getByRole('button');
    expect(primaryButton).toBeInTheDocument();
    expect(primaryButton.textContent).not.toBe('Text');
  });
});
