import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    accent: '#03dac4',
  },
};

const Theme = ({ children }) => {
  return (
    <PaperProvider theme={theme}>
      {children}
    </PaperProvider>
  );
};

export default Theme;
