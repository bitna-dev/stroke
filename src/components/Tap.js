import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Spacing from './Spacing'

const Tap = ({
  isSelected,
  onPress,
  label,
  activeIconName,
  inactiveIconName,
  isIconIonicons,
  isMaterialCommunityIcons,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {isIconIonicons && (
        <View style={styles.btnStyle}>
          <Ionicons
            name={isSelected ? activeIconName : inactiveIconName}
            size={24}
            color="black"
          />
          <Spacing size={8} />
          <Text>{label}</Text>
        </View>
      )}
      {isMaterialCommunityIcons && (
        <View style={styles.btnStyle}>
          <MaterialCommunityIcons
            name={isSelected ? activeIconName : inactiveIconName}
            size={28}
            color="black"
          />
          <Spacing size={8} />
          <Text>{label}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  btnStyle: {
    alignItems: 'center',
  },
})

export default Tap
