import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const IconButton = ({ name }) => {
  return (
    <View style={{ paddingHorizontal: 6 }}>
      <Ionicons name={name} size={24} color="black" />
    </View>
  )
}

const Header = ({ label }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{label}</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="settings-outline" />
      </View>
    </View>
  )
}

export default Header
