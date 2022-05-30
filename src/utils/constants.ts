import { Sort } from './types';
// APP TEXT
export const APP_TITLE = 'Reddit Pics';
export const REDDIT_URL = 'https://www.reddit.com';
export const SUBDIRECTORY = 'r/pics';

export const sortValues: Record<string, Sort> = {
  INIT: 'init',
  NEW: 'new',
  HOT: 'hot',
  CONTROVERSIAL: 'controversial',
  TOP: 'top',
};

export const sortOptions: { label: string; value: Sort }[] = [
  { label: 'New', value: sortValues.NEW },
  { label: 'Hot', value: sortValues.HOT },
  { label: 'Controversial', value: sortValues.CONTROVERSIAL },
  { label: 'Top', value: sortValues.TOP },
];
