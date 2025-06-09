import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button, SegmentedButtons } from 'react-native-paper';
import { flexStyles } from '../styles/flexStyles';
import { colors } from '../styles/globalStyles';

const FlexboxDemo: React.FC = () => {
  const [flexDirection, setFlexDirection] = useState<'row' | 'column'>('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('flex-start');

  const justifyOptions = [
    { value: 'flex-start', label: 'Start' },
    { value: 'center', label: 'Center' },
    { value: 'flex-end', label: 'End' },
    { value: 'space-between', label: 'Between' },
    { value: 'space-around', label: 'Around' },
    { value: 'space-evenly', label: 'Evenly' },
  ];

  const alignOptions = [
    { value: 'flex-start', label: 'Start' },
    { value: 'center', label: 'Center' },
    { value: 'flex-end', label: 'End' },
    { value: 'stretch', label: 'Stretch' },
  ];

  const renderFlexItem = (text: string, index: number) => (
    <View key={index} style={flexStyles.flexItem}>
      <Text style={flexStyles.flexItemText}>{text}</Text>
    </View>
  );

  return (
    <ScrollView style={flexStyles.container}>
      <Text style={flexStyles.sectionTitle}>Interactive Flexbox Demo</Text>

      {/* Controls */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: '600' }}>
          Flex Direction:
        </Text>
        <SegmentedButtons
          value={flexDirection}
          onValueChange={(value) => setFlexDirection(value as 'row' | 'column')}
          buttons={[
            { value: 'row', label: 'Row' },
            { value: 'column', label: 'Column' },
          ]}
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: '600' }}>
          Justify Content:
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {justifyOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => setJustifyContent(option.value)}
              style={{
                backgroundColor: justifyContent === option.value ? colors.primary : colors.lightGray,
                padding: 8,
                marginRight: 8,
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: justifyContent === option.value ? 'white' : colors.onSurface,
                  fontSize: 12,
                }}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: '600' }}>
          Align Items:
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {alignOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => setAlignItems(option.value)}
              style={{
                backgroundColor: alignItems === option.value ? colors.primary : colors.lightGray,
                padding: 8,
                marginRight: 8,
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: alignItems === option.value ? 'white' : colors.onSurface,
                  fontSize: 12,
                }}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Live Demo */}
      <View
        style={[
          flexStyles.demoContainer,
          {
            flexDirection,
            justifyContent: justifyContent as any,
            alignItems: alignItems as any,
          },
        ]}
      >
        {renderFlexItem('1', 1)}
        {renderFlexItem('2', 2)}
        {renderFlexItem('3', 3)}
        {renderFlexItem('4', 4)}
      </View>

      {/* Flex Values Demo */}
      <Text style={flexStyles.sectionTitle}>Flex Values</Text>
      <View style={[flexStyles.demoContainer, { flexDirection: 'row' }]}>
        <View style={flexStyles.flexItem1}>
          <Text style={flexStyles.flexItemText}>flex: 1</Text>
        </View>
        <View style={flexStyles.flexItem2}>
          <Text style={flexStyles.flexItemText}>flex: 2</Text>
        </View>
        <View style={flexStyles.flexItem3}>
          <Text style={flexStyles.flexItemText}>flex: 3</Text>
        </View>
      </View>

      {/* Flex Wrap Demo */}
      <Text style={flexStyles.sectionTitle}>Flex Wrap</Text>
      <View style={[flexStyles.demoContainer, { flexDirection: 'row', flexWrap: 'wrap' }]}>
        {Array.from({ length: 8 }, (_, i) => renderFlexItem(`${i + 1}`, i))}
      </View>
    </ScrollView>
  );
};

export default FlexboxDemo;