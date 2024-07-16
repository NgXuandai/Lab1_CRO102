import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import st from './style'



const Index = ({uri_img, title}) => {
  
  return (
    <View style={st.khung}>
      <Image style={st.img} source={{uri: uri_img}} width={200} height={100}/>
      <Text style={st.title }>{title}</Text>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})
