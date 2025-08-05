/* eslint-disable */

export type NewsArticleType = {
  author: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  source: { id: string | null; name: string };
  url: string;
  urlToImage: string;
};
