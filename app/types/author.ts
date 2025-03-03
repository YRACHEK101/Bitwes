export type ArticleContent = {
  img: string; // Remove optional flag
  summary: string;
  section1?: string;
  quote?: string[];
  summary2?: string;
  section2?: string;
};

export type ArticleData = {
  title: string;
  popular: boolean;
  popularity?: number;  // Make popularity optional
  description: string;
  date: string;
  read: string;
  label: string;
  img: string;
  imgAlt: string;
  slug: string;
  content: ArticleContent[];
};

export type AuthorData = {
  id: number;
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