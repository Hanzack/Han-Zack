import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { colors, spacing, shadows } from '../styles/globalStyles';

const { width, height } = Dimensions.get('window');

const ImageBackgroundDemo: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Basic ImageBackground */}
      <ImageBackground
        source={{
          uri: 'https://unsplash.com/photos/a-view-of-the-mountains-from-the-top-of-a-mountain-XlIpZd0IySUhttps://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=500'
        }}
        style={styles.basicBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Basic ImageBackground</Text>
        </View>
      </ImageBackground>

      {/* ImageBackground with Gradient Overlay */}
      <ImageBackground
        source={{uri: 'https://unsplash.com/photos/a-view-of-the-mountains-from-the-top-of-a-mountain-XlIpZd0IySUhttps://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&w=500'
        }}
        style={styles.gradientBackground}
        resizeMode="cover"
      >
        <View style={styles.gradientOverlay}>
          <Text style={styles.gradientText}>Gradient Overlay</Text>
          <Text style={styles.gradientSubText}>Beautiful backgrounds</Text>
        </View>
      </ImageBackground>

      {/* TODO: Add Card with ImageBackground */}
      <View style={styles.cardContainer}>
        <ImageBackground
          source={{uri: 'https://unsplash.com/photos/a-view-of-the-mountains-from-the-top-of-a-mountain-XlIpZd0IySUhttps://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&w=500'
          }}
          style={styles.cardBackground}
          imageStyle={styles.cardImageStyle}
        >
          <View style={styles.cardContent}>
            {/* TODO: Implement card content */}
            <Text style={styles.cardTitle}>Card Title</Text>
            <Text style={styles.cardDescription}>Your description here</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  basicBackground: {
    width: '100%',
    height: 150,
    marginBottom: spacing.md,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  gradientBackground: {
    width: '100%',
    height: 200,
    marginBottom: spacing.md,
  },
  gradientOverlay: {
    flex: 1,
    backgroundColor: 'rgba(102, 126, 234, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  gradientSubText: {
    color: 'white',
    fontSize: 16,
    marginTop: spacing.sm,
  },
  cardContainer: {
    ...shadows.medium,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardBackground: {
    width: '100%',
    height: 180,
  },
  cardImageStyle: {
    borderRadius: 12,
  },
  cardContent: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: spacing.md,
    justifyContent: 'flex-end',
  },
  cardTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardDescription: {
    color: 'white',
    fontSize: 14,
    marginTop: spacing.xs,
  },
});

export default ImageBackgroundDemo;