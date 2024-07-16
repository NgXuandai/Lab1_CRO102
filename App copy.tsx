// App1.js
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import Theme from './lab1/Theme';
import Block from './lab1/Block';
import Banner from './lab1/Banner';
import Button from './lab1/Button';
import TextInput from './lab1/TextInput';

const App1 = () => {
  const [theme, setTheme] = useState('black');
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '' });
  const [courseInfo, setCourseInfo] = useState({ courseName: '', courseCode: '' });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'pink') return 'black';
      if (prevTheme === 'black') return 'orange';
      return 'pink';
    });
  };

  const themeStyles = getThemeStyles(theme);

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <ScrollView contentContainerStyle={themeStyles.container}>
          <Theme>
            <View style={themeStyles.container}>
              <Image source={require('./img/fpt_poly.png')} style={themeStyles.logo} />
              <Banner source={require('./img/anh1.jpg')} />
              <Block title="Thông Tin Cá Nhân" style={themeStyles.block} theme={theme}>
                <TextInput
                  label="Họ và tên"
                  value={personalInfo.name}
                  onChangeText={(text) => setPersonalInfo({ ...personalInfo, name: text })}
                  style={themeStyles.input}
                />
                <TextInput
                  label="Email"
                  value={personalInfo.email}
                  onChangeText={(text) => setPersonalInfo({ ...personalInfo, email: text })}
                  style={themeStyles.input}
                />
                <Text style={themeStyles.text}>Họ và tên: {personalInfo.name}</Text>
                <Text style={themeStyles.text}>Email: {personalInfo.email}</Text>
              </Block>
              <Block title="Thông Tin Khóa Học" style={themeStyles.block} theme={theme}>
                <TextInput
                  label="Tên khóa học"
                  value={courseInfo.courseName}
                  onChangeText={(text) => setCourseInfo({ ...courseInfo, courseName: text })}
                  style={themeStyles.input}
                />
                <TextInput
                  label="Mã khóa học"
                  value={courseInfo.courseCode}
                  onChangeText={(text) => setCourseInfo({ ...courseInfo, courseCode: text })}
                  style={themeStyles.input}
                />
                <Text style={themeStyles.text}>Tên khóa học: {courseInfo.courseName}</Text>
                <Text style={themeStyles.text}>Mã khóa học: {courseInfo.courseCode}</Text>
              </Block>
              <Block title="Thông Tin Liên Hệ" style={themeStyles.block} theme={theme}>
                <Text style={themeStyles.text}>Địa chỉ: 123 Đường ABC, Nam Từ Liêm, Hà Nội</Text>
                <Text style={themeStyles.text}>Điện thoại: 0123456789</Text>
              </Block>
              <Button onPress={toggleTheme} style={themeStyles.button}>
                Đổi Theme
              </Button>
            </View>
          </Theme>
        </ScrollView>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

const getThemeStyles = (theme) => {
  switch (theme) {
    case 'black':
      return redThemeStyles;
    case 'orange':
      return orangeThemeStyles;
    default:
      return pinkThemeStyles;
  }
};

const pinkThemeStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffe4e6',
  },
  logo: {
    width: 300,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#000000',
  },
  block: {
    backgroundColor: '#ffb3ba',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ff80ab',
  },
});

const redThemeStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffcccb',
  },
  logo: {
    width: 300,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#000000',
  },
  block: {
    backgroundColor: '#ff9999',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ff6666',
  },
});

const orangeThemeStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#333333',
  },
  logo: {
    width: 300,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#000000',
  },
  block: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ff9933',
  },
});

export default App1;
