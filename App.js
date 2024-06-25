import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '@components/Header';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const statusBarHeight = getStatusBarHeight(true)

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
      <Header label="Chat"/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:statusBarHeight,
  },
});
