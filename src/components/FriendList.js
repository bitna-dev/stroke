import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Profile from './Profile'
import Spacing from './Spacing'

const FriendList = ({ friends, isOpen }) => {
  return (
    isOpen && (
      <ScrollView>
        {friends.map(({ name, uri, introduction }, idx) => (
          <View key={idx}>
            <Profile name={name} uri={uri} introduction={introduction} />
            <Spacing />
          </View>
        ))}
      </ScrollView>
    )
  )
}

export default FriendList
