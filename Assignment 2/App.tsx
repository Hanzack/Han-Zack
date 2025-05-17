import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

// Basic UI components
import Button from './components/Button';
import Card from './components/Card';
import Avatar from './components/Avatar';

// Compound components
import List from './components/List';
import ListItem from './components/ListItem';
import Header from './components/Header';

// Components with children
import Container from './components/Container';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <View style={sectionStyles.section}>
    <Text style={sectionStyles.title}>{title}</Text>
    <View style={sectionStyles.content}>{children}</View>
  </View>
);

const sectionStyles = StyleSheet.create({
  section: {
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  content: {
    // Add any additional styling for content if needed
  },
});

// export default Section;

// Stateful component
import Counter from './components/Counter';

// Controlled toggle
import Toggle from './components/Toggle';

// Accordion
import Accordion from './components/Accordion';

// Modal
import { Modal as RNModal, StyleSheet as RNModalStyleSheet, TouchableWithoutFeedback } from 'react-native';

interface ModalProps {
  visible: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, children }) => (
  <RNModal
    visible={visible}
    transparent
    animationType="fade"
  >
    <TouchableWithoutFeedback>
      <View style={modalStyles.overlay}>
        <View style={modalStyles.content}>
          {children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  </RNModal>
);

const modalStyles = RNModalStyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    minWidth: 250,
    minHeight: 100,
    alignItems: 'center',
  },
});

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Header with accessories */}
        <Header
          title="Component Showcase"
          left={<Text>👈</Text>}
          right={<Text>⚙️</Text>}
        />

        {/* Section with basic UI components */}
        <Section title="Basic UI Components">
          <Button text="Primary Button" onPress={() => {}} />
          <Button text="Danger Button" color="#f33" onPress={() => {}} />
          <Card>
            <Text>This is a card with content inside.</Text>
          </Card>
          <Avatar uri="https://i.pravatar.cc/100" size={60} />
        </Section>

        {/* Compound Components: List + ListItem */}
        <Section title="Compound Components">
          <List>
            <ListItem title="Item 1" onPress={() => alert('Pressed Item 1')} />
            <ListItem title="Item 2" />
          </List>
        </Section>

        {/* Children prop: Container wraps multiple elements */}
        <Section title="Container + Composition">
          <Container>
            <Text>Inside a styled container</Text>
            <Button text="Inner Button" onPress={() => {}} />
          </Container>
        </Section>

        {/* State integration */}
        <Section title="Stateful Components">
          <Counter initial={5} />
          <Toggle value={isToggled} onChange={setIsToggled} />
        </Section>

        {/* Accordion demonstrates state + children + props */}
        <Section title="Accordion">
          <Accordion title="Show more info">
            <Text>This is the hidden content of the accordion.</Text>
          </Accordion>
        </Section>

        {/* Modal controlled by button */}
        <Section title="Modal Example">
          <Button text="Show Modal" onPress={() => setShowModal(true)} />
        </Section>

        <Modal visible={showModal}>
          <Card>
            <Text>This is a modal!</Text>
            <Button text="Close" onPress={() => setShowModal(false)} />
          </Card>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContainer: {
    padding: 20,
  },
});