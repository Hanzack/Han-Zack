import React, { useState, useEffect } from 'react';
    import { View, FlatList, StyleSheet } from 'react-native';
    import { Searchbar, SegmentedButtons } from 'react-native-paper';
    import NewsCard from '../components/NewsCard';
    import { NewsArticle } from '../types';
    import { globalStyles, spacing } from '../styles/globalStyles';
    
    // Mock data
    const mockArticles: NewsArticle[] = [
      {
        id: '1',
        title: 'React Native 0.73 Released with New Architecture',
        description: 'The latest version of React Native brings significant improvements to performance and developer experience with the new architecture.',
        imageUrl: 'https://unsplash.com/photos/a-lighthouse-stands-beside-the-sea-at-dusk-V_coeWlO9bQ',
        publishedAt: '2024-01-15T10:30:00Z',
        author: 'John Developer',
        category: 'Technology',
        readTime: 5,
      },
      {
        id: '2',
        title: 'Building Scalable Mobile Apps with TypeScript',
        description: 'Learn how TypeScript can help you build more maintainable and scalable React Native applications.',
        imageUrl: 'https://unsplash.com/photos/a-lighthouse-stands-beside-the-sea-at-dusk-V_coeWlO9bQ',
        publishedAt: '2024-01-14T15:45:00Z',
        author: 'Jane Smith',
        category: 'Development',
        readTime: 3,
      },
      {
        id: '3',
        title: 'Mobile Design Trends for 2024',
        description: 'Discover the latest design trends that are shaping mobile app interfaces in 2024.',
        imageUrl: 'https://unsplash.com/photos/a-lighthouse-stands-beside-the-sea-at-dusk-V_coeWlO9bQ',
        publishedAt: '2024-01-13T09:20:00Z',
        author: 'Design Studio',
        category: 'Design',
        readTime: 7,
      },
      {
        id: '4',
        title: 'State Management in React Native Apps',
        description: 'A comprehensive guide to choosing the right state management solution for your React Native project.',
        imageUrl: 'https://unsplash.com/photos/a-lighthouse-stands-beside-the-sea-at-dusk-V_coeWlO9bQ',
        publishedAt: '2024-01-12T14:10:00Z',
        author: 'Alex React',
        category: 'Development',
        readTime: 6,
      },
      {
        id: '5',
        title: 'Performance Optimization Techniques',
        description: 'Learn advanced techniques to optimize the performance of your React Native applications.',
        imageUrl: 'https://unsplash.com/photos/a-lighthouse-stands-beside-the-sea-at-dusk-V_coeWlO9bQ',
        publishedAt: '2024-01-11T11:30:00Z',
        author: 'Performance Pro',
        category: 'Technology',
        readTime: 8,
      },
    ];
    
    const NewsScreen: React.FC = () => {
      const [searchQuery, setSearchQuery] = useState('');
      const [articles, setArticles] = useState<NewsArticle[]>(mockArticles);
      const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>(mockArticles);
      const [viewMode, setViewMode] = useState('vertical');
    
      useEffect(() => {
        const filtered = articles.filter(article =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredArticles(filtered);
      }, [searchQuery, articles]);
    
      const handleArticlePress = (article: NewsArticle) => {
        console.log('Article pressed:', article.title);
      };
    
      const handleBookmark = (article: NewsArticle) => {
        console.log('Bookmark:', article.title);
      };
    
      const handleShare = (article: NewsArticle) => {
        console.log('Share:', article.title);
      };
    
      const handleLike = (article: NewsArticle) => {
        console.log('Like:', article.title);
      };
    
      const renderArticle = ({ item }: { item: NewsArticle }) => (
        <NewsCard
          article={item}
          variant={viewMode as 'vertical' | 'horizontal'}
          onPress={() => handleArticlePress(item)}
          onBookmark={() => handleBookmark(item)}
          onShare={() => handleShare(item)}
          onLike={() => handleLike(item)}
        />
      );
    
      return (
        <View style={globalStyles.container}>
          <View style={styles.header}>
            <Searchbar
              placeholder="Search articles..."
              onChangeText={setSearchQuery}
              value={searchQuery}
              style={styles.searchbar}
            />
            
            <SegmentedButtons
              value={viewMode}
              onValueChange={setViewMode}
              buttons={[
                { value: 'vertical', label: 'Card View' },
                { value: 'horizontal', label: 'List View' },
              ]}
              style={styles.segmentedButtons}
            />
          </View>
    
          <FlatList
            data={filteredArticles}
            renderItem={renderArticle}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      header: {
        padding: spacing.md,
        paddingBottom: 0,
      },
      searchbar: {
        marginBottom: spacing.md,
      },
      segmentedButtons: {
        marginBottom: spacing.md,
      },
      listContainer: {
        paddingBottom: spacing.lg,
      },
    });
    
    export default NewsScreen;