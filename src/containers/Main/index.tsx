import Item from '@components/Item';
import LoaderButton from '@components/LoaderButton';
import FilterableList from '@components/List';
import RadioGroup from '@components/RadioButton';
import { useSortReducer } from '../../hooks/useSortReducer';
import { useAppSelector } from '../../redux/hooks';
import { selectItems } from 'postService/postSlice';
import { sortOptions } from '@utils/constants';

function Main() {
  const { items, isLoading, isError } = useAppSelector(selectItems);

  const { state, changeOption, refreshOption } = useSortReducer();

  return (
    <div className="Main">
      <RadioGroup
        values={sortOptions}
        setChecked={changeOption}
        checked={state}
      />
      <LoaderButton loading={isLoading} onClick={() => refreshOption()}>
        Refresh
      </LoaderButton>
      {isError && <div>Something went wrong</div>}
      {items && (
        <FilterableList
          items={items}
          renderer={(item) => <Item item={item} />}
          filterFn={(item) => item.thumbnail !== 'nsfw'} // Reddit excludes this posts
        />
      )}
    </div>
  );
}

export default Main;
