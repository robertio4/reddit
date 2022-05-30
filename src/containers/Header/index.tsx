import { APP_TITLE } from '@utils/constants';

function Header() {
  const title: string = APP_TITLE;

  return (
    <header className="App-header">
      <h1>
        <span role="img" aria-label="emoji">
          🤖
        </span>{' '}
        {title}
      </h1>
    </header>
  );
}

export default Header;
