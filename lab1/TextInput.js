import React from 'react';
import { TextInput as PaperTextInput } from 'react-native-paper';

const TextInput = ({ label, value, onChangeText, ...props }) => {
  return (
    <PaperTextInput
      mode='outlined'
      label={label}
      value={value}
      onChangeText={onChangeText}
      style={{
        marginBottom: 10,
      }}
      theme={{ colors: { primary: '#6200ee' } }}
      {...props}
    />
  );
};

export default TextInput;
