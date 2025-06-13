import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Product A',
    price: 29.99,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Product B',
    price: 49.99,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: 'Product C',
    price: 19.99,
    image: 'https://via.placeholder.com/150',
  },
];

const ProductScreen = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleAddToCart(item)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={PRODUCTS}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 3,
  },
  image: {
    height: 100,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 6,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductScreen;
