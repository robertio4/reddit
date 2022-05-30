const timeAgo = (time: number): string => {
  const date = time * 1000;

  const today = new Date().getTime();

  const seconds = Math.round((today - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);

  if (seconds < 60) {
    return 'now';
  }
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }
  return `${hours} hours ago`;
};

export default timeAgo;
