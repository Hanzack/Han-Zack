import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

interface CounterProps {
  initial?: number;
}

const Counter: React.FC<CounterProps> = ({ initial = 0 }) => {
  const [count, setCount] = useState(initial);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button title="-" onPress={() => setCount(count - 1)} />
    </View>
  );
};

export default Counter;
// Usage example:
// <Counter initial={5} />