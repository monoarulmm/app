

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreenNavigation from './Navigation/HomeScreenNavigation';
import PlayListScreenNavigation from './Navigation/PlayListScreenNavigation';
import Home from './screens/Home';
import PlayListScreen from './screens/PlayListScreen';

import Color from './Shared/Color';
// or any other navigator



const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    flex: 1,
    padding: 20,
    marginTop: 20,
    backgroundColor: Color.black
  },
}
export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <View style={styles.container}>
        <HomeScreenNavigation />

      </View>

      {/* <PlayVideoScreen/> */}

    </NavigationContainer>







  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:10,
    marginRight:10,
    backgroundColor: Color.white

  },
});
