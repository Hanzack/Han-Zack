import React from 'react';
import { View } from 'react-native';
import { ListItemProps } from './ListItem';

interface ListProps {
  children: React.ReactElement<ListItemProps>[] | React.ReactElement<ListItemProps>;
}

const List: React.FC<ListProps> = ({ children }) => {
  return <View>{children}</View>;
};

export default List;
// Usage example:
// import React from 'react';