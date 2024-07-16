// Block.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Block = ({ title, children, style, theme }) => {
  const themeStyles = getBlockThemeStyles(theme);

  return (
    <View style={[styles.container, themeStyles.block, style]}>
      <Text style={themeStyles.title}>{title}</Text>
      {children}
    </View>
  );
};

const getBlockThemeStyles = (theme) => {
  switch (theme) {
    case 'pink':
      return redThemeStyles;
    case 'black':
      return orangeThemeStyles;
    default:
      return pinkThemeStyles;
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});

const pinkThemeStyles = StyleSheet.create({
  block: {
    backgroundColor: '#ffb3ba',
  },
  title: {
    color: '#000000',
  },
});

const redThemeStyles = StyleSheet.create({
  block: {
    backgroundColor: 'red',
  },
  title: {
    color: '#000000',
  },
});

const orangeThemeStyles = StyleSheet.create({
  block: {
    backgroundColor: '#000000',
  },
  title: {
    color: '#000000',
  },
});

export default Block;
