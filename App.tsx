import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Banner from './Compoment/Banner'
import CustomHeader from './Compoment/CustomHeader'
import Section from './Compoment/Section'

const App = () => {
  return (
    <View>
        <CustomHeader title="My Title" onBackPress={() => console.log('Back clicked!')} />
        

        <Banner uri_img={"https://t4.ftcdn.net/jpg/04/28/76/95/360_F_428769564_NB2T4JM9E2xsxFdXXwqW717HwgaZdpAq.jpg"}
    title={"banner 1"}/>
        <View >
            <Section title="Sản phẩm mới" style={{ backgroundColor: '#ffcccc' }}>
            <Text>Nội dung </Text>
            <TextInput
                placeholder="Nhập văn bản..."
                style={styles.textInput}
        />
            <Button title="Nút 1" onPress={() => {}} />
            </Section>
            <Section title="Sản phẩm bán chạy" style={{ backgroundColor: '#ccffcc' }}>
                <Text>Nội dung</Text>
                <TextInput
                    placeholder="Nhập văn bản..."
                    style={styles.textInput}
        />
                <Button title="Nút 2" onPress={() => {}} />
     </Section>
   </View>
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
      },
      textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '100%',
      },
     });
     