import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const FriendSection = ({ friends, onPress, isOpen }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>친구 {friends.length}</Text>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name={isOpen ? 'chevron-up-outline' : 'chevron-down-outline'}
          size={24}
          color="lightgray"
        />
      </TouchableOpacity>
    </View>
  )
}

export default FriendSection

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'gray',
  },
})
