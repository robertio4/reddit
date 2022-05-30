import axios from 'axios';
import { store } from '../../store';
import postSlice, { fetchData, PostState } from './postSlice';

const mockAxios = axios as jest.Mocked<typeof axios>;

describe('Post reducer', () => {
  const initialState: PostState = {
    items: [],
    isLoading: false,
    isError: false,
  };

  it('Should initially set posts to an empty object', () => {
    const state = store.getState();
    expect(state.posts).toEqual(initialState);
  });

  it('should handle initial state', () => {
    expect(postSlice(undefined, { type: 'unknown' })).toEqual({
      items: [],
      isLoading: false,
      isError: false,
    });
  });

  it('should set loading true while action is pending', () => {
    const action = { type: fetchData.pending };
    const state = postSlice(initialState, action);
    expect(state).toEqual({ items: [], isError: false, isLoading: true });
  });

  it('should set user when action is fulfilled', () => {
    const action = {
      type: fetchData.fulfilled,
      payload: [
        {
          kind: 't3',
          data: {},
        },
        {
          kind: 't3',
          data: {},
        },
      ],
    };
    const state = postSlice(initialState, action);
    expect(state).toEqual({
      isError: false,
      isLoading: false,
      items: [
        {
          kind: 't3',
          data: {},
        },
        {
          kind: 't3',
          data: {},
        },
      ],
    });
  });

  it('should set error true when action is rejected', () => {
    const action = { type: fetchData.rejected };
    const state = postSlice(
      {
        items: [
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
        ],
        isLoading: false,
        isError: false,
      },
      action,
    );
    expect(state).toEqual({ items: [], isError: true, isLoading: false });
  });
});

describe('Post API', () => {
  test('Should be able to fetch the post list for a specific sort option', async () => {
    mockAxios.get = jest.fn().mockResolvedValue({
      data: {
        data: {
          children: [
            {
              kind: 't3',
              data: {
                id: 1,
              },
            },
          ],
        },
      },
    });

    const result = await store.dispatch(fetchData('new'));
    const post = result.payload;

    expect(result.type).toBe('post/fetchData/fulfilled');
    expect(post).toEqual([{ id: 1 }]);
  });

  test('Should be able to fetch the post list for a specific sort option 1', async () => {
    mockAxios.get = jest.fn().mockResolvedValue({
      data: {
        data: {
          children: [
            {
              kind: 't3',
              data: {
                id: 1,
              },
            },
          ],
        },
      },
    });

    const result = await store.dispatch(fetchData());
    const post = result.payload;

    expect(result.type).toBe('post/fetchData/fulfilled');
    expect(post).toEqual([{ id: 1 }]);
  });

  test('Should be able to rejected fetch', async () => {
    mockAxios.get = jest.fn().mockResolvedValue({
      data: {
        data: {},
      },
    });

    const result = await store.dispatch(fetchData('new'));
    const post = result.payload;

    expect(result.type).toBe('post/fetchData/rejected');
    expect(post).toEqual(undefined);
  });
});
