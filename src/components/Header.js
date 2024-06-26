import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const IconButton = ({ name }) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: 15, bottom: 15 }}
      style={{ paddingHorizontal: 6 }}
    >
      <Ionicons name={name} size={24} color="black" />
    </TouchableOpacity>
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
