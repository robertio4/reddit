import { act, fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import axios from 'axios';
import store from '../../redux/store';
import Main from './index';
import { fetchData } from 'postService/postSlice';

const mockAxios = axios as jest.Mocked<typeof axios>;

describe('Main container', () => {
  it('should get elements', async () => {
    mockAxios.get = jest.fn().mockResolvedValue({
      data: {
        data: {
          children: [
            {
              kind: 't3',
              data: {
                id: 1,
                author: 'Juan',
                score: 1,
                title: 'Titulo',
                url: 'url',
                thumbnail: 'https://picsum.photos/200',
                num_comments: 0,
                created: new Date().getTime() / 1000,
                permalink: '/r/pics/comments/uz4dpx/day_in_toronto_oc/',
              },
            },
          ],
        },
      },
    });
    await store.dispatch(fetchData());
    render(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
    const itemLists = screen.findAllByTestId('itemList');
    expect(await itemLists).toHaveLength(1);
  });
  it('should change input button', async () => {
    mockAxios.get = jest.fn().mockResolvedValue({});
    await store.dispatch(fetchData());
    render(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
    const filterableList = await screen.findByTestId('filterableList');
    expect(filterableList.children).toHaveLength(0);
    await act(async () => {
      fireEvent.click(
        await screen.findByTestId('radioGroupButtoncontroversial'),
      );
    });
    expect(filterableList.children).toHaveLength(0);
  });
  it('should push refresh', async () => {
    mockAxios.get = jest.fn().mockResolvedValue({});
    await store.dispatch(fetchData());
    render(
      <Provider store={store}>
        <Main />
      </Provider>,
    );
    const filterableList = await screen.findByTestId('filterableList');
    expect(filterableList.children).toHaveLength(0);
    await act(async () => {
      fireEvent.click(await screen.findByTestId('loaderButton'));
    });
    expect(filterableList.children).toHaveLength(0);
  });
});
