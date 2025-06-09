import React, { useState } from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';
import { Button } from 'react-native-paper';
import { flexStyles } from '../styles/flexStyles';
import { colors, spacing } from '../styles/globalStyles';

const PositionDemo: React.FC = () => {
  const [animatedValue] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animatedStyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100],
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 50],
        }),
      },
    ],
  };

  return (
    <ScrollView style={flexStyles.container}>
      <Text style={flexStyles.sectionTitle}>Absolute Positioning</Text>
      <View style={flexStyles.positionContainer}>
        <View style={[flexStyles.absoluteItem, flexStyles.topLeft]}>
          <Text style={flexStyles.flexItemText}>Top Left</Text>
        </View>
        <View style={[flexStyles.absoluteItem, flexStyles.topRight]}>
          <Text style={flexStyles.flexItemText}>Top Right</Text>
        </View>
        <View style={[flexStyles.absoluteItem, flexStyles.center]}>
          <Text style={flexStyles.flexItemText}>Center</Text>
        </View>
        <View style={[flexStyles.absoluteItem, flexStyles.bottomLeft]}>
          <Text style={flexStyles.flexItemText}>Bottom Left</Text>
        </View>
        <View style={[flexStyles.absoluteItem, flexStyles.bottomRight]}>
          <Text style={flexStyles.flexItemText}>Bottom Right</Text>
        </View>
      </View>

      <Text style={flexStyles.sectionTitle}>Relative Positioning</Text>
      <View style={flexStyles.demoContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={flexStyles.flexItem}>
            <Text style={flexStyles.flexItemText}>Normal</Text>
          </View>
          <View style={[flexStyles.flexItem, { position: 'relative', top: -10, left: 10 }]}>
            <Text style={flexStyles.flexItemText}>Relative</Text>
          </View>
          <View style={flexStyles.flexItem}>
            <Text style={flexStyles.flexItemText}>Normal</Text>
          </View>
        </View>
      </View>

      <Text style={flexStyles.sectionTitle}>Z-Index Demo</Text>
      <View style={[flexStyles.positionContainer, { backgroundColor: 'transparent' }]}>
        <View
          style={[
            flexStyles.absoluteItem,
            {
              top: 20,
              left: 20,
              width: 80,
              height: 80,
              backgroundColor: colors.primary,
              zIndex: 1,
            },
          ]}
        >
          <Text style={flexStyles.flexItemText}>Z: 1</Text>
        </View>
        <View
          style={[
            flexStyles.absoluteItem,
            {
              top: 40,
              left: 40,
              width: 80,
              height: 80,
              backgroundColor: colors.secondary,
              zIndex: 2,
            },
          ]}
        >
          <Text style={[flexStyles.flexItemText, { color: colors.onSecondary }]}>Z: 2</Text>
        </View>
        <View
          style={[
            flexStyles.absoluteItem,
            {
              top: 60,
              left: 60,
              width: 80,
              height: 80,
              backgroundColor: colors.error,
              zIndex: 0,
            },
          ]}
        >
          <Text style={flexStyles.flexItemText}>Z: 0</Text>
        </View>
      </View>

      <Text style={flexStyles.sectionTitle}>Animated Positioning</Text>
      <View style={flexStyles.positionContainer}>
        <Animated.View
          style={[
            flexStyles.absoluteItem,
            flexStyles.topLeft,
            animatedStyle,
          ]}
        >
          <Text style={flexStyles.flexItemText}>Animated</Text>
        </Animated.View>
      </View>

      <Button
        mode="contained"
        onPress={startAnimation}
        style={{ marginBottom: spacing.lg }}
      >
        Start Animation
      </Button>

      <Text style={flexStyles.sectionTitle}>Overflow Demo</Text>
      <View
        style={[
          flexStyles.demoContainer,
          {
            height: 100,
            overflow: 'hidden', // Try changing to 'visible'
          },
        ]}
      >
        <View
          style={[
            flexStyles.flexItem,
            {
              width: 200,
              height: 150,
              backgroundColor: colors.primary,
            },
          ]}
        >
          <Text style={flexStyles.flexItemText}>Overflow Hidden</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PositionDemo;