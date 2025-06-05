// src/components/NewsCard.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface NewsCardProps {
  title: string;
  summary: string;
  date: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, summary, date }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.summary}>{summary}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  summary: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
});
