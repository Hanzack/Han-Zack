// src/data/newsCategories.ts

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  content: string;
  date: string;
  image?: string;
}
export interface NewsCategory {
  id: string;
  name: string;
  icon: string;
}