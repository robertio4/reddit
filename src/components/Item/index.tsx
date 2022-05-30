/* eslint-disable camelcase */
import classNames from 'classnames';
import { REDDIT_URL } from '@utils/constants';
import timeAgo from '@utils/timeAgo';
import { Post } from '@utils/types';
import styles from './index.module.css';

interface Props {
  item: Post;
}

function Item({ item }: Props) {
  const { title, num_comments, thumbnail, score, author, created, permalink } =
    item;

  function open(url: string): void {
    window.open(url);
  }

  const link = `${REDDIT_URL}${permalink}`;

  return (
    <div
      data-testid="itemList"
      role="button"
      className={styles.card}
      onClick={() => open(link)}
      onKeyPress={() => open(link)}
      tabIndex={0}
    >
      <div className={styles.row}>
        <div className={classNames(styles.column, styles.left)}>
          <div className={styles.thumbnail}>
            <img src={thumbnail} alt={title} />
          </div>
        </div>

        <div className={classNames(styles.column, styles.right)}>
          <div className={styles.row}>
            <div className={styles.timeago}>{timeAgo(created)}</div>
          </div>

          <div className={styles.row}>
            <div className={styles.name}>{title}</div>
          </div>

          <div className={styles.row}>
            <div className={classNames(styles.column, styles.author)}>
              Posted by {author}
            </div>
            <div className={classNames(styles.column, styles.score)}>
              Score: {score}
            </div>
            <div className={classNames(styles.column, styles.comments)}>
              Comments: {num_comments}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
