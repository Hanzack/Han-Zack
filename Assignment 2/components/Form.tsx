import React from 'react';
import { View, StyleSheet } from 'react-native';

interface FormProps {
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children }) => {
  return <View style={styles.form}>{children}</View>;
};

const styles = StyleSheet.create({
  form: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
});

export default Form;
// //   right={<Text>Right</Text>}
// // />