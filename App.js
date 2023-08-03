import React from 'react';
// import 'react-native-gesture-handler';

// import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/components/AppStack';
import DialApp from './src/demostration/DialApp';

import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  SectionList,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import Tabs from './src/components/Tabs';

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      {/* <Stacks /> */}
      <Tabs />
    </NavigationContainer>
    // <SafeAreaView style={styles.containerWrapper}>
    //   <View style={styles.container}>
    //     <LanguageSelectionModal />
    //   </View>
    // </SafeAreaView>
    // <SafeAreaView style={styles.containerWrapper}>
    //   {/* <ThemeModalToggle /> */}
    //   <DialApp />
    // </SafeAreaView>

    // <>
    //   {/* //   <CreateScreen /> */}
    //   <ThemeMainModal />
    //   {/* <FlatListAutoScroll /> */}
    // </>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
  },

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    // height: '100%',
    // width: '100%',
  },
});

export default App;
