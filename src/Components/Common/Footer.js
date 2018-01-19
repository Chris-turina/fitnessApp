import React from 'react';
import { View, Text } from 'react-native';

const Footer = () => {
  return (
    <View>
      <Text>
        This is the Footer
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 100,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  }
}

export { Footer };
