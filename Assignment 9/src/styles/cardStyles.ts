import { StyleSheet } from 'react-native';

const cardStyles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  horizontalDescription: {
    fontSize: 14,
    color: '#666',
    // Removed numberOfLines
  },
  // ...other styles
});

export default cardStyles;
