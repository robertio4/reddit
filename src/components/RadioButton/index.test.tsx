import { render, screen, fireEvent } from '@testing-library/react';
import FilterableList from './index';

const setChecked = jest.fn();

describe('RadioGroup buttons', () => {
  it('should render a empty list', () => {
    render(<FilterableList values={[]} checked="" setChecked={setChecked} />);

    const radioGroup = screen.getByTestId('radioGroup');
    expect(radioGroup).toBeInTheDocument();
    expect(radioGroup.children[0].children).toHaveLength(0);
  });

  it('should render a list with multiple buttons', () => {
    render(
      <FilterableList
        values={[
          { label: 'uno', value: '1' },
          { label: 'dos', value: '2' },
        ]}
        checked=""
        setChecked={setChecked}
      />,
    );
    const radioGroup = screen.getByTestId('radioGroup');
    expect(radioGroup.children[0].children).toHaveLength(2);
  });

  it('should render a list with button checked', () => {
    render(
      <FilterableList
        values={[
          { label: 'uno', value: '1' },
          { label: 'dos', value: '2' },
        ]}
        checked="1"
        setChecked={setChecked}
      />,
    );

    const input1 = screen.getByTestId('radioGroupButton1');
    const input2 = screen.getByTestId('radioGroupButton2');
    expect(input1).toBeChecked();
    expect(input2).not.toBeChecked();

    fireEvent.click(screen.getByText(/dos/i));
    expect(setChecked).toHaveBeenCalledTimes(1);
    expect(setChecked).toHaveBeenCalledWith('2');
  });
});
