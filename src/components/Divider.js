import React from 'react'
import { StyleSheet, View } from 'react-native'

const Divider = () => {
  return <View style={styles.divider} />
}

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'lightgray',
  },
})
export default Divider
