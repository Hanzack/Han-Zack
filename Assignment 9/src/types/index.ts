export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  publishedAt: string;
  author: string;
  category: string;
  readTime: number;
}

export interface DrawerNavigationProps {
  navigation: any;
}

export interface FlexboxDemoProps {
  // Add any specific props if needed
}

export interface PositionDemoProps {
  // Add any specific props if needed
}

export type RootStackParamList = {
  Home: undefined;
  News: undefined;
  FlexboxDemo: undefined;
  PositionDemo: undefined;
  ImageDemo: undefined;
};

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';