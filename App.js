import Header from '@compoenents/Header'
import Profile from '@compoenents/Profile'
import { StatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, View } from 'react-native'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { friendProfiles, myProfile } from '@data/data'
import Spacing from '@compoenents/Spacing'
import Divider from '@compoenents/Divider'
import FriendSection from '@compoenents/FriendSection'
import FriendList from '@compoenents/FriendList'
import { useState } from 'react'
import Navbar from '@compoenents/Navbar'

export default function App() {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0)

  const { name, uri, introduction } = myProfile

  const onPressArrow = () => {
    setIsOpen(!isOpen)
  }
  const [isOpen, setIsOpen] = useState(true)
  const ItemSeparatorComponent = () => <Spacing />
  const renderItem = ({ item }) => (
    <View>
      <Profile
        name={item.name}
        uri={item.uri}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  )
  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: 'white' }}>
      <Header label="Chat" />
      <Spacing />
      <Profile name={name} uri={uri} introduction={introduction} isMe={true} />
      <Spacing />
      <Divider />
      <Spacing />
      <FriendSection
        isOpen={isOpen}
        friends={friendProfiles}
        onPress={onPressArrow}
      />
    </View>
  )
  const ListFooterComponent = () => <Spacing size={10} />

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top', 'right', 'left']} style={styles.container}>
        <FlatList
          data={isOpen ? friendProfiles : []}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          keyExtractor={(_, idx) => idx}
          stickyHeaderIndices={[0]}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
        />
        <Navbar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top', 'right', 'left']} style={styles.container}>
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          {/* <Text>Open up App.js to start working on your app!</Text> */}
          {/* <StatusBar style="auto" /> */}
          <Header label="Chat" />
          <Spacing />
          <Profile name={name} uri={uri} introduction={introduction} />
          <Spacing />
          <Divider />
          <Spacing />
          <FriendSection
            isOpen={isOpen}
            friends={friendProfiles}
            onPress={onPressArrow}
          />
          <FriendList friends={friendProfiles} isOpen={isOpen} />
        </View>
        <Navbar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
})
