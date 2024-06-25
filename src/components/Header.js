import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const IconButton = () => {
  return (
    <View>
      
    </View>
  )
}

const Header = ({label}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{label}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row'
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold'
  }
})