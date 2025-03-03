import articlesData from '@/json/articles.json';
import { AuthorData } from '@/app/types/author';

export type ArticleType = AuthorData;

export async function getArticles(): Promise<ArticleType[]> {
  // Type assertion to ensure the data matches our type
  const data = articlesData as unknown as ArticleType[];
  return data;
}
