export interface NotificationData {
  id: string;
  title: string;
  body: string;
  data?: {
    type: 'news' | 'alert' | 'promotion' | 'reminder';
    category?: string;
    articleId?: string;
    deepLink?: string;
    imageUrl?: string;
    priority?: 'high' | 'normal' | 'low';
  };
  timestamp: number;
  read: boolean;
  source: 'firebase' | 'local';
}

export interface UserPreferences {
  notificationsEnabled: boolean;
  categories: {
    news: boolean;
    sports: boolean;
    technology: boolean;
    entertainment: boolean;
    business: boolean;
  };
  quiet_hours: {
    enabled: boolean;
    start: string; // "22:00"
    end: string;   // "08:00"
  };
  frequency: 'immediate' | 'hourly' | 'daily';
  sound: boolean;
  vibration: boolean;
}

export interface NotificationState {
  notifications: NotificationData[];
  unreadCount: number;
  isLoading: boolean;
  lastSync: string | null;
  fcmToken: string | null;
}

export interface UserPreferencesState {
  preferences: UserPreferences;
  isLoading: boolean;
  lastUpdated: string | null;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  imageUrl: string;
  publishedAt: string;
  source: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean; // ✅ Add this line
}
export interface NewsCategory {
  id: string;
  name: string;
  icon: string;
}