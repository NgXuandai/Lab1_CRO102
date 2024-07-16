import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Banner = ({ source }) => {
  return (
    <Image source={source} style={styles.banner} />
  );
};

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default Banner;
