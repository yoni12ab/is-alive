import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';
import SearchBox from './SearchBox';

export default function App() {
  const [searchTerm, setSearchTerm] = useState(0);
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Is Dead', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <SearchBox></SearchBox>
      <Text>Open up App.tsx to sYomnitart working on your app! {searchTerm}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
