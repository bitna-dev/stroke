import React from 'react'
import { StyleSheet, View } from 'react-native'
import Tap from './Tap'

const Navbar = ({ selectedTabIdx, setSelectedTabIdx }) => {
  return (
    <View style={styles.container}>
      <Tap
        isSelected={selectedTabIdx === 0}
        onPress={() => {
          setSelectedTabIdx(0)
        }}
        activeIconName="person"
        inactiveIconName="person-outline"
        isIconIonicons
        label="Home"
      />
      <Tap
        isSelected={selectedTabIdx === 1}
        onPress={() => {
          setSelectedTabIdx(1)
        }}
        label="CHAT"
        activeIconName="chatbubble"
        inactiveIconName="chatbubbles-outline"
        isIconIonicons
      />
      <Tap
        label="MARKET"
        isSelected={selectedTabIdx === 2}
        onPress={() => {
          setSelectedTabIdx(2)
        }}
        activeIconName="pricetag"
        inactiveIconName="pricetag-outline"
        isIconIonicons
      />
      <Tap
        isSelected={selectedTabIdx === 3}
        onPress={() => {
          setSelectedTabIdx(3)
        }}
        label="SETTING"
        activeIconName="dots-horizontal-circle"
        inactiveIconName="dots-horizontal-circle-outline"
        isMaterialCommunityIcons
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: 'lightgray',
  },
})

export default Navbar
