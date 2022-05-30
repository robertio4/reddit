interface AbstractItem {
  id: number;
}

export interface Post extends AbstractItem {
  id: number;
  author: string;
  score: number;
  title: string;
  url: string;
  thumbnail: string;
  num_comments: number;
  created: number;
  permalink: string;
}

export interface ResponsePost {
  data: {
    children: Array<Post>;
  };
  kind: 'Listing';
}

export type Sort = 'init' | 'new' | 'hot' | 'controversial' | 'top';
