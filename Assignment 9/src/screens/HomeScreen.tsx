import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Button, FAB } from 'react-native-paper';
import { colors, spacing, globalStyles } from '../styles/globalStyles';
import ImageBackgroundDemo from '../components/ImageBackgroundDemo';

const HomeScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.welcomeText}>
          Welcome to React Native UI Design
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Day 9 Assignment</Text>
            <Text style={styles.cardDescription}>
              This app demonstrates advanced React Native UI concepts including:
            </Text>
            <View style={styles.featureList}>
              <Text style={styles.featureItem}>• ImageBackground components</Text>
              <Text style={styles.featureItem}>• Custom Navigation Drawer</Text>
              <Text style={styles.featureItem}>• React Native Paper integration</Text>
              <Text style={styles.featureItem}>• Advanced Flexbox layouts</Text>
              <Text style={styles.featureItem}>• Positioning techniques</Text>
              <Text style={styles.featureItem}>• Card-based designs</Text>
            </View>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained">Get Started</Button>
            <Button mode="outlined">Learn More</Button>
          </Card.Actions>
        </Card>

        <ImageBackgroundDemo />
      </ScrollView>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log('FAB pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    padding: spacing.md,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  card: {
    marginBottom: spacing.lg,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.onSurface,
    marginBottom: spacing.sm,
  },
  cardDescription: {
    fontSize: 16,
    color: colors.darkGray,
    marginBottom: spacing.md,
  },
  featureList: {
    marginLeft: spacing.sm,
  },
  featureItem: {
    fontSize: 14,
    color: colors.onSurface,
    marginBottom: spacing.xs,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
  },
});

export default HomeScreen;