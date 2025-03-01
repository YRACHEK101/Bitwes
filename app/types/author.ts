export type ArticleData = {
  title: string;
  img: string;
  date: string;
  read: string;
  label: string;
  slug: string;
};

export type AuthorData = {
  author: string;
  job: string;
  city: string;
  avatar: string;
  imgAlt: string;
  slug: string;
  biography: {
    summary: string;
    body: string;
  };
  articles: ArticleData[];
};