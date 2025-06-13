import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../store/cartSlice';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <Image source={{ uri: item.product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.product.name}</Text>
        <Text style={styles.price}>${item.product.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => dispatch(decreaseQuantity(item.product.id))}>
            <Text style={styles.quantityBtn}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => dispatch(increaseQuantity(item.product.id))}>
            <Text style={styles.quantityBtn}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => dispatch(removeFromCart(item.product.id))}>
          <Text style={styles.removeBtn}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={cartItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id}
      contentContainerStyle={styles.list}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text>Your cart is empty.</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    color: '#888',
    marginVertical: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  quantityBtn: {
    fontSize: 20,
    width: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  quantity: {
    marginHorizontal: 12,
    fontSize: 16,
  },
  removeBtn: {
    color: 'red',
    marginTop: 6,
  },
  empty: {
    alignItems: 'center',
    marginTop: 50,
  },
});

export default CartScreen;
