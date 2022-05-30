import { render, screen } from '@testing-library/react';
import { Post as IPost } from '@utils/types';
import Post from './index';

describe('Post data', () => {
  const mockPost = (time = 1653675959): IPost => ({
    id: 1,
    author: 'Juan',
    score: 1,
    title: 'Titulo',
    url: 'url',
    thumbnail: 'https://picsum.photos/200',
    num_comments: 0,
    created: time,
    permalink: '/r/pics/comments/uz4dpx/day_in_toronto_oc/',
  });

  it('should render a item created now', () => {
    render(<Post item={mockPost(new Date().getTime() / 1000)} />);

    const item = screen.getByText(/now/i);
    expect(item).toBeInTheDocument();
  });

  it('should render a item created 12 min ago', () => {
    render(<Post item={mockPost(new Date().getTime() / 1000 - 12 * 60)} />);

    const item = screen.getByText(/minutes ago/i);
    expect(item.textContent).toEqual('12 minutes ago');
  });

  it('should render a item created 12 hours ago', () => {
    render(
      <Post item={mockPost(new Date().getTime() / 1000 - 12 * 60 * 60)} />,
    );

    const item = screen.getByText(/hours ago/i);
    expect(item.textContent).toEqual('12 hours ago');
  });
});
