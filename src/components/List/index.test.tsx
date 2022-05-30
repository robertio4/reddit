import { render, screen } from '@testing-library/react';
import FilterableList from './index';

const renderFn = jest.fn();
const filterFn = jest.fn();

describe('Filterable list', () => {
  const mockItems = [
    {
      id: 1,
      author: 'Juan',
      score: 1,
      title: 'Titulo',
      url: 'url',
      thumbnail: 'https://picsum.photos/200',
      num_comments: 0,
      created: 1653675959,
      permalink: '/r/pics/comments/uz4dpx/day_in_toronto_oc/',
    },
    {
      id: 2,
      author: 'Juan',
      score: 1,
      title: 'Titulo',
      url: 'url',
      thumbnail: 'https://picsum.photos/200',
      num_comments: 0,
      created: 1653675959,
      permalink: '/r/pics/comments/uz4dpx/day_in_toronto_oc/',
    },
    {
      id: 3,
      author: 'Juan',
      score: 1,
      title: 'Titulo',
      url: 'url',
      thumbnail: 'https://picsum.photos/200',
      num_comments: 0,
      created: 1653675959,
      permalink: '/r/pics/comments/uz4dpx/day_in_toronto_oc/',
    },
  ];

  it('should render a empty list', () => {
    render(
      <FilterableList items={[]} renderer={renderFn} filterFn={filterFn} />,
    );
    const list = screen.getByTestId('filterableList');
    expect(list).toBeInTheDocument();
    expect(list.tagName).toBe('DIV');
    expect(list.children).toHaveLength(0);
  });

  it('should render a list with renderer elements', () => {
    render(
      <FilterableList
        items={mockItems}
        renderer={() => <div>item</div>}
        filterFn={() => true}
      />,
    );
    const list = screen.getByTestId('filterableList');
    expect(list.children).toHaveLength(3);
    expect(list.children[0].tagName).toBe('DIV');
  });

  it('should render a list with filter elements', () => {
    render(
      <FilterableList
        items={mockItems}
        renderer={() => <div>Test</div>}
        filterFn={(item) => item.id > 1}
      />,
    );

    const list = screen.getByTestId('filterableList');
    expect(list.children).toHaveLength(2);
  });
});
