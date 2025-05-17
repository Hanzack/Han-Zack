import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface AvatarProps {
  source: string;
  size?: number;
  shape?: 'circle' | 'square';
}

const Avatar: React.FC<AvatarProps> = ({ source, size = 50, shape = 'circle' }) => {
  return (
    <Image
      source={{ uri: source }}
      style={[
        styles.image,
        { width: size, height: size, borderRadius: shape === 'circle' ? size / 2 : 8 },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
  },
});

export default Avatar;
//       <Avatar source="https://example.com/avatar.jpg" size={100} shape="circle" />
//     },