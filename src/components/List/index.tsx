import React from 'react';

interface Props<T> {
  items: T[];
  renderer: (item: T) => React.ReactNode;
  filterFn: (item: T) => boolean;
}

interface AbstractItem {
  id: number;
}

function FilterableList<T extends AbstractItem>({
  items,
  renderer,
  filterFn,
}: Props<T>) {
  const elements = items.filter(filterFn);

  return (
    <div data-testid="filterableList">
      {elements.map((item) => (
        <div key={item.id}>{renderer(item)}</div>
      ))}
    </div>
  );
}

export default FilterableList;
