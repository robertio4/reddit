import classNames from 'classnames';
import styles from './index.module.css';

interface Props {
  loading: boolean;
  onClick: () => void;
  children: string;
}

function LoaderButton({ loading, onClick, children }: Props) {
  return (
    <button
      data-testid="loaderButton"
      type="button"
      onClick={onClick}
      className={classNames(styles.button, loading && styles.loading)}
    >
      <span className={styles.text}>{!loading && children}</span>
    </button>
  );
}

export default LoaderButton;
