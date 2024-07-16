import React from 'react';
import { Button as PaperButton } from 'react-native-paper';

const Button = ({ children, ...props }) => {
  return (
    <PaperButton
      mode="contained"
      style={{
        backgroundColor: '#6200ee',
        padding: 10,
        borderRadius: 5,
      }}
      {...props}
    >
      {children}
    </PaperButton>
  );
};

export default Button;
