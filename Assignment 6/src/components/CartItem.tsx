import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { CartItem as CartItemType } from '../types';
import { useAppDispatch } from '../hooks/redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();

  const increaseQuantity = () => {
    dispatch(updateQuantity({ id: item.product.id, quantity: item.quantity + 1 }));
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.product.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.product.id));
  };

  return (
    <View style={styles.container}>
      {item.product.image && (
        <Image source={{ uri: item.product.image }} style={styles.image} />
      )}
      <View style={styles.details}>
        <Text style={styles.name}>{item.product.name}</Text>
        <Text style={styles.price}>${item.product.price.toFixed(2)}</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
        <View style={styles.actions}>
          <Button title="+" onPress={increaseQuantity} />
          <Button title="-" onPress={decreaseQuantity} />
          <Button title="Remove" onPress={handleRemove} color="red" />
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 6,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    color: '#888',
    marginVertical: 4,
  },
  quantity: {
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
